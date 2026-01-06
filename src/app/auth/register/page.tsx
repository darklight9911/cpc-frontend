import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Github, Mail } from "lucide-react"

export default function RegisterPage() {
    return (
        <Card className="w-full border-border/40 bg-card/60 backdrop-blur-md shadow-xl">
            <CardHeader className="space-y-1 text-center">
                <div className="mx-auto mb-4 relative h-16 w-16 flex items-center justify-center">
                    <Image
                        src="/cpc-logo.png"
                        alt="CPC Logo"
                        fill
                        className="object-contain"
                    />
                </div>
                <CardTitle className="text-2xl font-bold tracking-tight">
                    Create an account
                </CardTitle>
                <CardDescription>
                    Enter your email below to create your account
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" placeholder="e.g. Umme" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" placeholder="e.g. Munia" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="id">Student or Employee ID</Label>
                    <Input id="id" placeholder="e.g. 241-15-540 or 710002642" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="e.g. iman241-15-540@diu.edu.bd" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full bg-gradient-to-r from-cpc-blue to-cpc-red hover:opacity-90 transition-opacity">
                    Create account
                </Button>
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
        </Card>
    )
}
