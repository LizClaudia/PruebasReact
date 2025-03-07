import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    children: React.ReactNode;
}

export default function ButtonComponent({
    onClick,
    className = "App-buttonAdd",
    children = "+",
    ...props
}: ButtonProps) {
    return (
        <button className={className} {...props} onClick={onClick}>
            {children}
        </button>
    );
}
