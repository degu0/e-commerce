interface InputProps {
    name: string;
    placeholder: string;
    type?: string;
}

export function Input ({ name, placeholder, type = 'text' }: InputProps) {
    return (
        <input type={type} name={name} className="w-1/4 p-4 border-none rounded-md bg-gray-input text-gray-placeholder" placeholder={placeholder} />
    )
}