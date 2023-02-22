import React from 'react'

interface ILargeButtonProps {
    text: any;
    color: string;
    iconName?: string;
    className?: string;
    onClick?: any;
}

export default function LargeButton({ text, color, iconName, className, onClick }: ILargeButtonProps) {
    return (
        <div className={`c-large-button ${color} ${className}  align-items-center`} onClick={onClick}>
            <i className="material-symbols-outlined">{iconName}</i>
            <span >{text}</span>
        </div>
    )
}
