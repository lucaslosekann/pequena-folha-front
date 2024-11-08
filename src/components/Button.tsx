type ButtonProps = {
    onClick?: () => void;
    children: string;
};
export default function Button({ onClick, children }: ButtonProps) {
    return (
        <button className="w-full rounded-md bg-own-green px-4 py-2 text-white" onClick={onClick}>
            {children}
        </button>
    );
}
