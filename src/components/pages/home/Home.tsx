import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbTruckDelivery, TbHeadset, TbDeviceWatch  } from "react-icons/tb";
import { RiShieldCheckLine } from "react-icons/ri";
import { MdSmartphone, MdOutlineCameraAlt  } from "react-icons/md";
import { LuGamepad } from "react-icons/lu";

import Category from "../../service/category/Category";
import Button from "../../forms/button/Button";
import Carts from "../../service/carts/Carts";

const Home: React.FC = () => {
    return (
        <div>
            <div className="flex h-[80vh]">
                <div className="w-[25%] border-black border-r-2 flex flex-col content-center justify-center items-center">
                    <ul className="font-medium text-lg">
                        <li className="mb-3">
                            <p>Woman's Fashion</p>
                        </li>
                        <li className="mb-3">
                            <p>Men's Fashion</p>
                        </li>
                        <li className="mb-3">
                            <p>Electronics</p>
                        </li>
                        <li className="mb-3">
                            <p>Home & Lifestyle</p>
                        </li>
                        <li className="mb-3">
                            <p>Medicine</p>
                        </li>
                        <li className="mb-3">
                            <p>Sports & Outdoor</p>
                        </li>
                        <li className="mb-3">
                            <p>Baby's & Toys</p>
                        </li>
                        <li className="mb-3">
                            <p>Groceries & Pets</p>
                        </li>
                        <li className="mb-3">
                            <p>Health & Beauty</p>
                        </li>
                    </ul>
                </div>
                <div className="bg-black w-[800px] h-[344px] m-auto my-10">
                    {/* <img src="./image/Frame_1.png" alt="Frame of Promotion!" /> */}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[80vh]">
                <Category name={"Today's"} />
                <div className="flex justify-around w-full">
                    <div className="flex items-center gap-x-40">
                        <h2 className="text-5xl font-semibold">Flash Sales</h2>
                        <p className="text-3xl font-semibold">03: 23: 19: 56</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-slate-400 rounded-full w-12 h-12 flex justify-center items-center">
                            <HiArrowSmLeft className="text-black text-3xl" />
                        </div>
                        <div className="bg-slate-400 rounded-full w-12 h-12 flex justify-center items-center">
                            <HiArrowSmRight className="text-black text-3xl" />
                        </div>
                    </div>
                </div>
                <Carts />
                <div>
                    <Button label="View All Products" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[80vh]">
                <Category name="Categories" />
                <div className="flex justify-around w-full">
                    <div>
                        <h2 className="text-5xl font-semibold">Browse By Categories</h2>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-slate-400 rounded-full w-12 h-12 flex justify-center items-center">
                            <HiArrowSmLeft className="text-black text-3xl" />
                        </div>
                        <div className="bg-slate-400 rounded-full w-12 h-12 flex justify-center items-center">
                            <HiArrowSmRight className="text-black text-3xl" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-evenly items-center w-full h-3/4 ">
                    <div className="border-2 border-gray-300 flex flex-col justify-center items-center gap-2 w-[170px] h-[145px]">
                        <MdSmartphone className="text-4xl"/>
                        <h4 className="text-medium text-xl">Phones</h4>
                    </div>
                    <div className="border-2 border-gray-300 flex flex-col justify-center items-center gap-2 w-[170px] h-[145px]">
                        <HiOutlineComputerDesktop className="text-4xl"/>
                        <h4 className="text-medium text-xl">Computers</h4>
                    </div>
                    <div className="border-2 border-gray-300 flex flex-col justify-center items-center gap-2 w-[170px] h-[145px]">
                        <TbDeviceWatch className="text-4xl"/>
                        <h4 className="text-medium text-xl">SmartWatch</h4>
                    </div>
                    <div className="border-2 border-gray-300 flex flex-col justify-center items-center gap-2 w-[170px] h-[145px]">
                        <MdOutlineCameraAlt className="text-4xl"/>
                        <h4 className="text-medium text-xl">Camera</h4>
                    </div>
                    <div className="border-2 border-gray-300 flex flex-col justify-center items-center gap-2 w-[170px] h-[145px]">
                        <TbHeadset className="text-4xl"/>
                        <h4 className="text-medium text-xl">HeadPhone</h4>
                    </div>
                    <div className="border-2 border-gray-300 flex flex-col justify-center items-center gap-2 w-[170px] h-[145px]">
                        <LuGamepad className="text-4xl"/>
                        <h4 className="text-medium text-xl">Gaming</h4>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[80vh]">
                <Category name="This Mouth" />
                <div className="flex justify-evenly items-center w-full">
                    <div>
                        <h2 className="text-5xl font-semibold">Best Selling Products</h2>
                    </div>
                    <div>
                        <Button label="View All" />
                    </div>
                </div>
                <Carts />
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-black w-[1170px] h-[500px]"></div>
                {/* <img src="../image/Frame_2.png" alt="Frame of BoomBox" /> */}
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[80vh]">
                <Category name="Our Products" />
                <div className="flex justify-around w-full">
                    <div>
                        <h2 className="text-5xl font-semibold">Explore Our Products</h2>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-slate-400 rounded-full w-12 h-12 flex justify-center items-center">
                            <HiArrowSmLeft className="text-black text-3xl" />
                        </div>
                        <div className="bg-slate-400 rounded-full w-12 h-12 flex justify-center items-center">
                            <HiArrowSmRight className="text-black text-3xl" />
                        </div>
                    </div>
                </div>
                <Carts />
                <Carts />
                <div>
                    <Button label="View All Products" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[80vh]">
                <Category name="Featured" />
                <div>
                    <h2 className="text-5xl font-semibold">New Arrival</h2>
                </div>
                <div>
                    <img src="../image/Frame_3.png" alt="Frame of Featured" />
                </div>
            </div>
            <div className="h-[80vh] flex items-center justify-around">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-gray-400 rounded-full w-20 h-20 flex items-center justify-center">
                        <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
                            <TbTruckDelivery className="text-white text-4xl" />
                        </div>
                    </div>
                    <h1 className="font-bold text-2xl">FREE AND FAST DELIVERY</h1>
                    <h3 className="text-lg font-medium">Free delivery for all orders over $140</h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-gray-400 rounded-full w-20 h-20 flex items-center justify-center">
                        <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
                            <TbHeadset className="text-white text-4xl" />
                        </div>
                    </div>
                    <h1 className="font-bold text-2xl">24/7 CUSTOMER SERVICE</h1>
                    <h3 className="text-lg font-medium">Friendly 24/7 customer service</h3>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-gray-400 rounded-full w-20 h-20 flex items-center justify-center">
                        <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
                            <RiShieldCheckLine className="text-white text-4xl" />
                        </div>
                    </div>
                    <h1 className="font-bold text-2xl">MONEY BACK GUARANTEE</h1>
                    <h3 className="text-lg font-medium">We return money within 30 days</h3>
                </div>
            </div>
        </div>
    );
}

export default Home;