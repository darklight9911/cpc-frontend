import { NextResponse } from "next/server";
import { db } from "@/lib/mock-db";
import { registerSchema } from "@/lib/validations/auth";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { otp, registrationData } = body;

        // 1. Validate Registration Data again (security)
        const result = registerSchema.safeParse(registrationData);
        if (!result.success) {
            return NextResponse.json({ message: "Invalid registration data" }, { status: 400 });
        }

        const { name, uni_id, email, password } = result.data;

        // 2. Verify OTP
        const isValid = await db.verifyOTP(email, otp);
        if (!isValid) {
            return NextResponse.json({ message: "Invalid or expired OTP" }, { status: 400 });
        }

        // 3. Create User (Mock)
        const newUser = await db.createUser({
            id: crypto.randomUUID(),
            name,
            uni_id,
            email,
            passwordHash: "hashed_" + password, // In real app, use bcrypt
            createdAt: new Date(),
            profilePictureUrl: "https://github.com/shadcn.png",
            status: "active",
        });

        return NextResponse.json({ message: "Registration successful!", user: newUser });

    } catch (error) {
        console.error("Verification Error:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
