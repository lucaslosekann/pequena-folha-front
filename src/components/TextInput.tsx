import React, { useCallback } from "react";
import { cn } from "../lib/utils";

type TextInputProps = {
    label?: string;
    type: "text" | "password" | "date";
    containerClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
    mask?: (e: React.KeyboardEvent<HTMLInputElement>) => React.KeyboardEvent<HTMLInputElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    ({ label, type, containerClassName, labelClassName, inputClassName, mask, ...props }, ref) => {
        const handleKeyUp = useCallback(
            (e: React.KeyboardEvent<HTMLInputElement>) => {
                if (mask) {
                    return mask(e);
                }
            },
            [mask],
        );

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
                    onKeyUp={handleKeyUp}
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
