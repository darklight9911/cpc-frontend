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

export default function LoginPage() {
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
                    Welcome back
                </CardTitle>
                <CardDescription>
                    Enter your credentials to access your account
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">

                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="university mail" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 rounded border-gray-300 text-cpc-blue focus:ring-cpc-blue"
                    />
                    <Label htmlFor="remember" className="text-sm font-normal">
                        Remember me
                    </Label>
                    <Link
                        href="/auth/forgot-password"
                        className="ml-auto text-sm font-medium text-cpc-blue hover:text-cpc-blue/80 hover:underline"
                    >
                        Forgot password?
                    </Link>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full bg-gradient-to-r from-cpc-red to-cpc-blue hover:opacity-90 transition-opacity">
                    Sign In
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link
                        href="/auth/register"
                        className="font-semibold text-cpc-blue hover:text-cpc-blue/80 hover:underline"
                    >
                        Register
                    </Link>
                </div>
            </CardFooter>
        </Card>
    )
}
