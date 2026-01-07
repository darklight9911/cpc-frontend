import { z } from "zod";

export const registerSchema = z
    .object({
        name: z
            .string()
            .min(1, "Name is required")
            .max(100, "Name must be less than 100 characters"),
        uni_id: z
            .string()
            .min(1, "University ID is required")
            .regex(/^[0-9-]+$/, "University ID must contain only numbers and hyphens")
            .max(100, "University ID must be less than 100 characters"),
        email: z
            .string()
            .email("Invalid email address")
            .refine(
                (email) => email.endsWith("@diu.edu.bd"),
                {
                    message: "Email must be a DIU student email (@diu.edu.bd)",
                }
            ),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

export type RegisterValues = z.infer<typeof registerSchema>;
