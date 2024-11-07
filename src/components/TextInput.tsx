import clsx from 'clsx';
import React from 'react'

type TextInputProps = {
    label?: string,
    type: "text" | "password",
    containerClassName?: string
} & React.InputHTMLAttributes<HTMLInputElement>


const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ label, type, containerClassName, ...props }, ref) => {
    return (
        <div className={containerClassName}>
            {
                label && <label htmlFor="username" className='text-white text-lg'>{label}</label>
            }
            <input ref={ref} {...props} type={type} className={clsx('w-full py-1 px-2 bg-transparent border-b-2 border-white text-white text-lg font-light outline-none')} />
        </div>
    )
});

export default TextInput;
