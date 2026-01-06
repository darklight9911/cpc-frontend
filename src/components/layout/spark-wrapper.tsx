"use client";

import ClickSpark from "@/components/ui/click-spark";

export default function SparkWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClickSpark
            sparkColor={["#E64848", "#F4B400", "#2D8CFF"]}
            sparkSize={12}
            sparkRadius={25}
            sparkCount={8}
            duration={400}
            extraScale={0.9}
            className="min-h-screen" // Ensure it covers the full height
        >
            {children}
        </ClickSpark>
    );
}
