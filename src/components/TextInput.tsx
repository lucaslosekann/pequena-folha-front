import React from "react";
import { cn } from "../lib/utils";

type TextInputProps = {
    label?: string;
    type: "text" | "password" | "date";
    containerClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    // ? -> significa que opcional
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    ({ label, type, containerClassName, labelClassName, inputClassName, ...props }, ref) => {
        return (
            <div className={containerClassName}>
                {label && (
                    <label htmlFor="username" className={cn("text-lg text-white", labelClassName)}>
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    {...props}
                    type={type}
                    className={cn(
                        "w-full border-b-2 border-white bg-transparent px-2 py-1 text-lg font-light text-white outline-none",
                        inputClassName,
                    )}
                />
            </div>
        );
    },
);

export default TextInput;
