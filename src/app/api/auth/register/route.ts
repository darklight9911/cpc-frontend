import { NextResponse } from "next/server";
import { registerSchema } from "@/lib/validations/auth";
import { db } from "@/lib/mock-db";

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1458519726182367304/lbuB73PRLYhKDcI8-S3xAIVUDmfS3UsbXS3MCh27jCTHIduZKwshMW6Bon1kBGDB9Vt2";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // 1. Zod Validation
        const result = registerSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { message: "Invalid input", errors: result.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const { name, uni_id, email, password } = result.data;

        // 2. Check Mock DB for existing user
        if (await db.findUserByEmail(email)) {
            return NextResponse.json({ message: "Email already registered" }, { status: 409 });
        }
        if (await db.findUserByUniId(uni_id)) {
            return NextResponse.json({ message: "University ID already registered" }, { status: 409 });
        }

        // 3. Generate OTP
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digits
        await db.createOTP(email, otpCode);

        // 4. Send OTP via Discord Webhook
        await fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: `🔐 **New OTP Request**\n**User:** ${name} (${uni_id})\n**Email:** ${email}\n**OTP:** \`${otpCode}\` 🚀`,
            }),
        });

        // 5. Success
        return NextResponse.json({ message: "OTP sent successfully. Please check your Discord/Email." });

    } catch (error) {
        console.error("Registration Error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
