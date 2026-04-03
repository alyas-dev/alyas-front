import "./Cta.css";
import { Children } from "react";
import { cn } from "@/lib/utils";

type CTAVariants = "white" | "black" | "light-grey" | "transparent";
type CTASizes = "xs" | "s" | "m";
type CTAIcon = "cross" | "";

interface CTAProps {
    children: React.ReactNode;
    color?: CTAVariants;
    size?: CTASizes;
    icon?: CTAIcon;
    className?: string;
}

export default function Cta({ children, color = "white", size = "xs", icon = "", className, ...props }: CTAProps) {

    const fontSizeMap = {
        xs: "h7",
        s: "h7",
        m: "h6"
    };

    const classNames = cn("cta", color, size, fontSizeMap[size], className);

    return (
        <button {...props} className={classNames}>
            <span>{children}</span>
            {icon !== "" && <div className={`cta - icon ${icon} `} aria-hidden="true" />}
        </button>
    );
}