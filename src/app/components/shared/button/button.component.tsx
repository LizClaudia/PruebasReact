import React from "react";
interface ButtonProps {
    onclick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    children: React.ReactNode;
}

export default function ButtonComponent({
    onclick,
    className = "App-buttonAdd",
    children = "+",
}: ButtonProps) {
    return (
        <button className={className} onClick={onclick}>
            {children}
        </button>
    );
}
