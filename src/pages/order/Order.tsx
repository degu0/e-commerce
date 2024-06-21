export function Order() {
    return (
        <div className="h-screen">
            <div className="h-[15vh] flex items-center ml-24">
                <p className="text-gray-500 tracking-widest">
                    Home / <label className="text-black">My Order</label>
                </p>
            </div>
            <div className="max-w-7xl m-auto flex items-center justify-between">
                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="text-lg font-bold">My Orders</h2>
                        <p className="text-red-custom cursor-pointer ml-10">My Orders</p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">Logout</h2>
                    </div>
                </div>
                <div className="w-3/5">
                    <h1>ORDER</h1>
                </div>
            </div>
        </div>
    )
}