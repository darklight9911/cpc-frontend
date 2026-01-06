export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cpc-red/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cpc-blue/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 w-full max-w-md p-4">
                {children}
            </div>
        </div>
    )
}
