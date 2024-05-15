import { FaStar } from "react-icons/fa";
import { FaS } from "react-icons/fa6";

const Carts: React.FC = () => {
    return (
        <div className="flex justify-evenly items-center w-full h-full mt-32">
            <div className="flex flex-col">
                <div className="bg-gray-400 w-[270px] h-[250px] rounded">
                    {/* <img src="../image/cart.png" alt="" /> */}
                </div>
                <div>
                    <h4 className="text-lg font-medium">Name</h4>
                    <p className="text-red-custom ">$450</p>
                    <div className="flex items-center gap-1 text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <p className="text-gray-400">(65)</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-gray-400 w-[270px] h-[250px] rounded">
                    {/* <img src="../image/cart_2.png" alt="" /> */}
                </div>
                <div>
                    <h4 className="text-lg font-medium">Name</h4>
                    <p className="text-red-custom ">$450</p>
                    <div className="flex items-center gap-1 text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <p className="text-gray-400">(65)</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-gray-400 w-[270px] h-[250px] rounded">
                    {/* <img src="../image/cart_3.png" alt="" /> */}
                </div>
                <div>
                    <h4 className="text-lg font-medium">Name</h4>
                    <p className="text-red-custom ">$450</p>
                    <div className="flex items-center gap-1 text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <p className="text-gray-400">(65)</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="bg-gray-400 w-[270px] h-[250px] rounded">
                    {/* <img src="../image/cart_4.png" alt="" /> */}
                </div>
                <div>
                    <h4 className="text-lg font-medium">Name</h4>
                    <p className="text-red-custom ">$450</p>
                    <div className="flex items-center gap-1 text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <p className="text-gray-400">(65)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carts;