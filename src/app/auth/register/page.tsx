"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerSchema, RegisterValues } from "@/lib/validations/auth";
import api from "@/lib/axios";
import { Loader2 } from "lucide-react";
import { toast } from "sonner"; // Assuming sonner or generic toast

export default function RegisterPage() {
    const router = useRouter();
    const [step, setStep] = useState<1 | 2>(1); // 1: Register, 2: OTP
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");

    // Form 1: Registration Data
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        trigger
    } = useForm<RegisterValues>({
        resolver: zodResolver(registerSchema),
    });

    // Form 2: OTP
    const [otp, setOtp] = useState("");

    const onRegisterSubmit = async (data: RegisterValues) => {
        setIsLoading(true);
        try {
            // Call FastAPI Backend
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { confirmPassword, ...registerData } = data;
            await api.post("/auth/register", registerData);
            setEmail(data.email);
            setStep(2);
            // toast.success("OTP sent to Discord/Email!");
        } catch (error: any) {
            console.error(error);
            // Parse FastAPI validation errors
            // Parse FastAPI validation errors
            const detail = error.response?.data?.detail;
            let errorMessage = "Registration failed";

            if (Array.isArray(detail)) {
                // If detail is an array of errors (FastAPI default)
                errorMessage = detail.map((err: any) => err.msg).join(", ");
            } else if (typeof detail === 'string') {
                errorMessage = detail;
            } else if (typeof detail === 'object') {
                errorMessage = JSON.stringify(detail);
            }

            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    const onOtpSubmit = async () => {
        setIsLoading(true);
        try {
            const registrationData = watch(); // Get form data

            // Removing confirmPassword from registrationData as well if it exists in watch()
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { confirmPassword, ...cleanRegistrationData } = registrationData;

            // Call FastAPI Verify
            await api.post("/auth/verify", {
                email,
                otp,
                registration_data: cleanRegistrationData
            });

            // toast.success("Account created successfully!");
            router.push("/auth/login");
        } catch (error: any) {
            console.error(error);
            const detail = error.response?.data?.detail;
            const errorMessage = typeof detail === 'object' ? JSON.stringify(detail, null, 2) : (detail || "Verification failed");
            alert(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="w-full border-border/40 bg-card/60 backdrop-blur-md shadow-xl">
            <CardHeader className="space-y-1 text-center">
                <div className="mx-auto mb-4 relative h-16 w-16 flex items-center justify-center">
                    <Image
                        src="/cpc-logo.png"
                        alt="CPC Logo"
                        fill
                        className="object-contain" // Ensure logo is visible
                    />
                </div>
                <CardTitle className="text-2xl font-bold tracking-tight">
                    {step === 1 ? "Create an account" : "Verify Email"}
                </CardTitle>
                <CardDescription>
                    {step === 1
                        ? "Enter your email below to create your account"
                        : `We sent a code to ${email}`}
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {step === 1 ? (
                    <form onSubmit={handleSubmit(onRegisterSubmit)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="e.g. Umme Munia" {...register("name")} />
                            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="uni_id">Student or Employee ID</Label>
                            <Input id="uni_id" placeholder="e.g. 241-15-540" {...register("uni_id")} />
                            {errors.uni_id && <p className="text-sm text-red-500">{errors.uni_id.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="student@diu.edu.bd" {...register("email")} />
                            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" {...register("password")} />
                            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
                            {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
                        </div>

                        <Button type="submit" className="w-full bg-gradient-to-r from-cpc-blue to-cpc-red hover:opacity-90 transition-opacity" disabled={isLoading}>
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Create account"}
                        </Button>
                    </form>
                ) : (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="otp">Enter OTP</Label>
                            <Input
                                id="otp"
                                placeholder="123456"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                maxLength={6}
                                className="text-center text-2xl tracking-widest"
                            />
                        </div>
                        <Button onClick={onOtpSubmit} className="w-full bg-gradient-to-r from-cpc-blue to-cpc-red" disabled={isLoading || otp.length < 6}>
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Verify & Register"}
                        </Button>
                        <Button variant="ghost" className="w-full" onClick={() => setStep(1)} disabled={isLoading}>
                            Back to Register
                        </Button>
                    </div>
                )}
            </CardContent>
            {step === 1 && (
                <CardFooter className="flex flex-col space-y-4">
                    <div className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link
                            href="/auth/login"
                            className="font-semibold text-cpc-blue hover:text-cpc-blue/80 hover:underline"
                        >
                            Sign In
                        </Link>
                    </div>
                </CardFooter>
            )}
        </Card>
    );
}
