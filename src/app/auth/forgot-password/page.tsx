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
import { ArrowLeft } from "lucide-react"

export default function ForgotPasswordPage() {
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
                    Forgot password?
                </CardTitle>
                <CardDescription>
                    Enter your university mail and we'll send you a link to reset your password
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="university mail" />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full bg-gradient-to-r from-cpc-red to-cpc-blue hover:opacity-90 transition-opacity">
                    Send Reset Link
                </Button>
                <div className="text-center text-sm">
                    <Link
                        href="/auth/login"
                        className="flex items-center justify-center font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to login
                    </Link>
                </div>
            </CardFooter>
        </Card>
    )
}
