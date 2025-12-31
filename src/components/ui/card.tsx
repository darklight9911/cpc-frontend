import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const Card = ({ className, hoverEffect = true, ...props }: CardProps) => {
    return (
        <div
            className={cn(
                "relative rounded-lg border border-white/5 bg-[#1E293B]/50 backdrop-blur-sm p-6 overflow-hidden group transition-all duration-300",
                // "Dog-ear" clip path effect (subtly via a pseudo-element or just keep it simple with shape)
                // Let's use a subtle hover border effect with the brand colors
                hoverEffect && "hover:border-primary/50 hover:shadow-[0_0_30px_rgba(45,140,255,0.1)]",
                className
            )}
            {...props}
        >
            {/* Gradient Line Top (Tech Accent) */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
                {props.children}
            </div>
        </div>
    );
};

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex flex-col space-y-1.5 mb-4", className)} {...props} />
)

export const CardTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn("text-2xl font-semibold leading-none tracking-tight font-mono text-white", className)} {...props} />
)

export const CardDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("text-sm text-slate-400", className)} {...props} />
)

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("", className)} {...props} />
)

export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("flex items-center pt-4", className)} {...props} />
)
