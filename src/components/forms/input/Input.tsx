interface InputProps {
    name: string;
    placeholder: string;
    type?: string;
}

export function Input ({ name, placeholder, type = 'text' }: InputProps) {
    return (
        <input type={type} name={name} className="w-4/5 py-2 px-1 text-sm border-none rounded bg-gray-input focus:outline-none focus:ring-0" placeholder={placeholder} />
    )
}