interface InputProps {
    name: string;
    placeholder: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, type = 'text' }) => {
    return (
        <input type={type} name={name} className="w-1/4 p-4 border-none rounded-md bg-gray-input text-gray-placeholder" placeholder={placeholder} />
    )
}

export default Input;