import { Children } from "react";
import "./Tag.css"

type TagVariants = "white" | "black" | "green" | "yellow" | "blue" | "red";
type TagSizes = "small" | "medium" | "big";

interface TagProps {
    children: React.ReactNode;
    color?: TagVariants;
    size?: TagSizes;
}


export default function Tag({ children, color = "white", size = "small" }: TagProps) {

    const fontSizeMap = {
        small: "h8",
        medium: "h7",
        big: "h6"
    };

    const classNames = `tag ${color} ${size} ${fontSizeMap[size]}`;

    return (
        <div className={classNames}>
            <span>{children}</span>
        </div>
    );
}
