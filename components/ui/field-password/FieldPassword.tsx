"use client";
import './FieldPassword.css';
import { cn } from "@/lib/utils";
import { useState } from 'react';
import { Eye, EyeClosed } from "@phosphor-icons/react";

interface FieldPasswordProps {
    children?: React.ReactNode;
    className?: string;
    showPasswordStrenght?: boolean;
}

export default function FieldPassword({ children, className, showPasswordStrenght = true }: FieldPasswordProps) {
    const classNames = cn("FieldPassword", className);
    const strokeDasharray = 44; /*Calcul de la valeur du cercle password strength*/

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [strokeColor, setStrokeColor] = useState("var(--accent-pink-dark)");
    const [strokeDashoffset, setStrokeDashoffset] = useState(strokeDasharray);

    const handleShowPassword = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const inputType = showPassword ? "text" : "password";


    function PasswordStrength(password: string) {
        let score = 0;
        if (password.length >= 8) score += 20;
        if (password.length >= 12) score += 20;
        if (/[a-z]/.test(password)) score += 15;
        if (/[A-Z]/.test(password)) score += 15;
        if (/[0-9]/.test(password)) score += 15;
        if (/[^a-zA-Z0-9]/.test(password)) score += 15;
        return score;
    }

    function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        setPassword(e.target.value);
        let score = PasswordStrength(e.target.value);
        if (score < 70) {
            setStrokeColor("var(--accent-pink-dark)");
            setStrokeDashoffset(strokeDasharray * (1 - score / 100));
        } else if (score < 85) {
            setStrokeColor("var(--accent-yellow-dark)");
            setStrokeDashoffset(strokeDasharray * (1 - score / 100));
        } else {
            setStrokeColor("var(--accent-green-dark)");
            setStrokeDashoffset(strokeDasharray * (1 - score / 100));
        }
    }


    return (
        <div className={classNames}>
            <input type={inputType} placeholder={children as string} className="field-input" value={password} onChange={handlePasswordChange} />
            <div className="password-strength-and-toggle-container">
                {showPasswordStrenght && (
                    <svg width="16" height="16" viewBox="0 0 16 16">
                        <circle cx="8px" cy="8px" r="7px" fill='none' strokeWidth="2" stroke="var(--neutral-grey)" className="password-strength-circle" strokeDasharray="80" />
                        <circle cx="8px" cy="8px" r="7px" fill='none' strokeWidth="2" stroke={strokeColor} className="password-strength-circle" strokeDasharray="44" strokeDashoffset={strokeDashoffset} strokeLinecap="round" transform="rotate(-90 8 8)" />
                    </svg>
                )}
                <button
                    aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                    className="password-toggle"
                    onClick={handleShowPassword}
                    type="button"
                    tabIndex={-1}>
                    {showPassword ? <EyeClosed size={16} weight="regular" /> : <Eye size={16} weight="regular" />}
                </button>
            </div>
        </div>
    );
}
