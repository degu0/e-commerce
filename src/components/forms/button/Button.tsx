interface ButtonProps {
    label: string;
}

export function Button({ label }: ButtonProps) {
    return (
        <button className="bg-red-custom w-48 h-14 border-none rounded text-white
        text-normal hover:bg-opacity-90 hover:transition-colors hover:duration-500">{label}</button>
    );
}