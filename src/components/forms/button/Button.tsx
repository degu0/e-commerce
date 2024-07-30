interface ButtonProps {
    label: string;
}

export function Button({ label }: ButtonProps) {
    return (
        <button className="bg-red-custom w-40 h-12 border-none rounded text-white
        text-sm hover:bg-opacity-90 hover:transition-colors hover:duration-500">{label}</button>
    );
}