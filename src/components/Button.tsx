
type ButtonProps = {
    onClick?: () => void
    children: string
}
export default function Button({ onClick, children }: ButtonProps) {

    return (
        <button className='bg-own-green text-white rounded-md py-2 px-4 w-full' onClick={onClick}>
            {children}
        </button>
    )
}
