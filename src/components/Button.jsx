import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`
            w-full sm:w-auto px-5 py-3 rounded-md 
            ${bgColor} ${textColor} 
            transition-all duration-300 
            hover:bg-opacity-80 focus:ring focus:ring-opacity-50 
            ${className}
        `} {...props}>
            {children}
        </button>
    );
}