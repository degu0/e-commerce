interface SizeProps {
    label: string;
}

export function Size({ label }: SizeProps) {
    return (
        <label
            className="has-[:checked]:bg-white/30 has-[:checked]:text-white has-[:checked]:border-none has-[:checked]:bg-red-custom cursor-pointer 
        border-2 border-gray-300 w-10 h-10 rounded-md flex justify-center items-center"
        >
            <div>
                <h2 className="text-xl">{label}</h2>
            </div>
            <input
                type="radio"
                name="payment"
                className="h-0 w-0"
            />
        </label>
    );
}