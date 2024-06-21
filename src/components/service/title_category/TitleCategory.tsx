interface TitleCategoryProps {
    name: string;
}

export function TitleCategory({name}: TitleCategoryProps) {
    return(
        <div className="flex items-center w-full mb-8">
            <div className=" rounded bg-red-custom w-5 h-10"></div>
            <label className="text-red-custom text-lg font-medium ml-4">{name}</label>
        </div>
    );
}