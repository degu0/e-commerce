
interface CustomNumberInputProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    placeholder?: string;
}

export function CustomNumberInput ({
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    placeholder = '',
}: CustomNumberInputProps) {
    return (
        <div className="flex items-center">
            <button
                onClick={() => onChange(Math.max(min, value - step))}
                className="px-3 py-2 border-2 border-gray-300 border-r-0 text-gray-700 hover:bg-red-custom hover:text-white focus:outline-none rounded-l"
            >
                -
            </button>
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(parseFloat(e.target.value))}
                min={min}
                max={max}
                step={step}
                placeholder={placeholder}
                className="w-20 text-center pl-4 py-2 border border-gray-300 rounded-none font-semibold"
            />
            <button
                onClick={() => onChange(Math.min(max, value + step))}
                className="px-3 py-2 border-2 border-gray-300 border-l-0 text-gray-700 hover:bg-red-custom hover:text-white focus:outline-none rounded-r"
            >
                +
            </button>
        </div>
    );
}
