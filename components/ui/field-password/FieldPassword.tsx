"use client";
import './FieldPassword.css';
import { cn } from "@/lib/utils";
import { useState } from 'react';
import { Eye, EyeClosed } from "@phosphor-icons/react";

interface FieldPasswordProps {
    children?: React.ReactNode;
    className?: string;
}

export default function FieldPassword({ children, className }: FieldPasswordProps) {
    const classNames = cn("FieldPassword", className);

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const inputType = showPassword ? "text" : "password";


    return (
        <div className={classNames}>
            <input type={inputType} placeholder={children as string} className="field-input" />
            <button
                aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                className="password-toggle"
                onClick={handleShowPassword}
                type="button"
                tabIndex={-1}>
                {showPassword ? <EyeClosed size={16} weight="regular" /> : <Eye size={16} weight="regular" />}
            </button>
        </div>
    );
}
