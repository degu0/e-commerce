interface ButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label }) => {
    return (
        <button className="bg-red-custom w-36 h-14 border-none rounded text-white text-normal">{label}</button>
    );
}

export default Button;