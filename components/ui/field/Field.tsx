import "./Field.css";
import { Children } from "react";

//type CTAVariants = "white" | "black" | "light-grey" | "transparent";

type FieldVariants = "base" | "radio" | "oneIcon" | "doubleIcon";

interface FieldProps {
    children: React.ReactNode;
    variant?: FieldVariants;

}

export default function Field({ children, variant = "base" }: FieldProps) {


    return (
        <div className={`field body-s ${variant}`}>
            <input type="text" placeholder={`${children}`} className="input body-s" />
            {variant !== "base" && <div className={`field-icon ${variant}`} aria-hidden="true" />}
        </div>
    );
}