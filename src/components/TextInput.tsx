import React from 'react'
import { cn } from '../lib/utils';

type TextInputProps = {
    label?: string,
    type: "text" | "password",
    containerClassName?: string,
    labelClassName?: string
    inputClassName?: string
    // ? -> significa que opcional
} & React.InputHTMLAttributes<HTMLInputElement>


const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ label, type, containerClassName, labelClassName, inputClassName, ...props }, ref) => {
    return (
        <div className={containerClassName}>
            {
                label && <label htmlFor="username" className={cn('text-lg text-white', labelClassName)}>{label}</label>
            }
            <input ref={ref} {...props} type={type} className={cn('w-full py-1 px-2 bg-transparent border-b-2 border-white text-white text-lg font-light outline-none', inputClassName)} />
        </div>
    )
});

export default TextInput;
