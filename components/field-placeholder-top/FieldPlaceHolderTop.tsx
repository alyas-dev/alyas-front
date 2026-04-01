import "./FieldPlaceHolderTop.css";
import { Children } from "react";
import { cn } from "@/lib/utils";

interface FieldPlaceHolderTopProps {
    children: React.ReactNode;
    className?: string;
}

export default function FieldPlaceHolderTop({ children, className }: FieldPlaceHolderTopProps) {

    const classNames = cn("FieldPlaceHolderTop", className);

    return (
        <div className={classNames}>
            <label htmlFor="name" className="field-label">{children}</label>
            <input type="text" id="name" placeholder=" " className="field-input" />
        </div>
    );
}