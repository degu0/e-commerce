interface CategoryProps {
    name: string;
}

export function Category({name}: CategoryProps) {
    return(
        <div className="flex items-center w-full mb-10">
            <div className=" rounded bg-red-custom w-5 h-10"></div>
            <label className="text-red-custom text-lg font-medium ml-4">{name}</label>
        </div>
    );
}