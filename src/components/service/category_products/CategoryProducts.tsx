import { HiOutlineComputerDesktop, HiOutlineCamera, HiOutlineHome } from "react-icons/hi2";
import { LuGamepad } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

const iconMapping: { [key: string]: IconType } = {
    "Accessory": IoBagHandleOutline,
    "Camera": HiOutlineCamera,
    "Computer": HiOutlineComputerDesktop,
    "Clothing": FaRegUser,
    "Home": HiOutlineHome,
    "Gaming": LuGamepad,
};

interface CategoryProductsProps {
    title: string;
}

export function CategoryProducts({ title }: CategoryProductsProps) {
    const IconComponent = Object.prototype.hasOwnProperty.call(iconMapping, title) ? iconMapping[title] : null;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/category/${title}`)
    }

    return (
        <div
            className="cursor-pointer border-2 border-gray-300 flex flex-col justify-center items-center 
        gap-2 w-2/5 h-32 md:h-full md:w-7/12 lg:h-5/5 lg:w-full 2xl:h-3/5  hover:border-none hover:bg-red-custom hover:text-white hover:transition-colors hover:duration-500"
            onClick={handleClick}
        >
            {/* Renderiza o ícone se ele existir no mapeamento */}
            {IconComponent && <IconComponent className="text-3xl lg:text-5xl" />}
            <h4 className="text-medium text-base lg:text-xl">{title}</h4>
        </div>
    );
}
