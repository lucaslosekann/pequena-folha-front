type ButtonProps = {
    onClick?: () => void;
    children: string;
};
import { forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ onClick, children }, ref) => {
    return (
        <button ref={ref} className="w-full rounded-md bg-own-green px-4 py-2 text-white" onClick={onClick}>
            {children}
        </button>
    );
});

export default Button;
