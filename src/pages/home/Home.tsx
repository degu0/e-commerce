import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbTruckDelivery, TbHeadset, TbDeviceWatch } from "react-icons/tb";
import { RiShieldCheckLine } from "react-icons/ri";
import { MdSmartphone, MdOutlineCameraAlt } from "react-icons/md";
import { LuGamepad } from "react-icons/lu";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FaApple } from "react-icons/fa6";

import Iphone from "../../image/Iphone_frame_1.png";
import Box from "../../image/JBL.png";
import PS5 from "../../image/Frame_3/PS5_frame_3.png";
import Woman from "../../image/Frame_3/Woman_frame_3.png";
import Speakers from "../../image/Frame_3/Amazon_frame_3.png";
import Perfume from "../../image/Frame_3/Perfume_frame_3.png";

import Category from "../../components/service/category/Category";
import Button from "../../components/forms/button/Button";
import Carrosel from "../../components/service/carrosel/Carrosel";


const Home: React.FC = () => {

    return (
        <div className="w-[80%] mx-[10%] font-custom">
            <div className="flex gap-16 h-[60vh] container">
                <div className="w-[20%] border-gray-400 border-r-2 flex flex-col  justify-center items-center">
                    <ul className="font-medium text-lg">
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Woman's Fashion
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Men's Fashion
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Electronics
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Home & Lifestyle
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Medicine
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Sports & Outdoor
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Baby's & Toys
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Groceries & Pets
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Health & Beauty
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bg-black flex w-[75%] h-[80%] m-auto my-10 cursor-pointer">
                    <div className="h-full w-1/2 flex flex-col gap-10 justify-center items-start ml-16">
                        <div className="flex items-center gap-2">
                            <FaApple className="text-white text-6xl" />
                            <p className="text-white">Iphone 14 Series</p>
                        </div>
                        <div>
                            <h1 className="text-white text-6xl">
                                Up to 10% <br />
                                off Voucher
                            </h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-white font-semibold underline underline-offset-4 decoration-gray-line">Shop Now</p>
                            <IoMdArrowForward className="text-white text-2xl" />
                        </div>
                    </div>
                    <div className="flex items-end w-1/2 h-full">
                        <img src={Iphone} className="" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full h-[80vh] my-[12%]">
                <Category name={"Today's"} />
                <div className="flex justify-between gap-40 w-full">
                    <div className="flex items-center gap-x-40">
                        <h2 className="text-5xl font-semibold">Flash Sales</h2>
                        <p className="text-3xl font-semibold">03: 23: 19: 56</p>
                    </div>
                </div>
                <Carrosel />
                <div className="my-[5%]">
                    <Button label="View All Products" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[80vh] my-[5%]">
                <Category name="Categories" />
                <div className="flex justify-between gap-40 w-full">
                    <div>
                        <h2 className="text-5xl font-semibold">Browse By Categories</h2>
                    </div>
                </div>
                <div className="flex justify-evenly items-center w-full h-1/2 ">
                    <div className=" cursor-pointer border-2 border-gray-300 flex flex-col justify-center items-center 
                    gap-2 w-[15%] h-[60%] hover:border-none hover:bg-red-custom hover:text-white">
                        <MdSmartphone className="text-5xl" />
                        <h4 className="text-medium text-xl">Phones</h4>
                    </div>
                    <div className=" cursor-pointer border-2 border-gray-300 flex flex-col justify-center items-center 
                    gap-2 w-[15%] h-[60%] hover:border-none hover:bg-red-custom hover:text-white">
                        <HiOutlineComputerDesktop className="text-5xl" />
                        <h4 className="text-medium text-xl">Computers</h4>
                    </div>
                    <div className=" cursor-pointer border-2 border-gray-300 flex flex-col justify-center items-center 
                    gap-2 w-[15%] h-[60%] hover:border-none hover:bg-red-custom hover:text-white">
                        <TbDeviceWatch className="text-5xl" />
                        <h4 className="text-medium text-xl">SmartWatch</h4>
                    </div>
                    <div className=" cursor-pointer border-2 border-gray-300 flex flex-col justify-center items-center 
                    gap-2 w-[15%] h-[60%] hover:border-none hover:bg-red-custom hover:text-white">
                        <MdOutlineCameraAlt className="text-5xl" />
                        <h4 className="text-medium text-xl">Camera</h4>
                    </div>
                    <div className=" cursor-pointer border-2 border-gray-300 flex flex-col justify-center items-center 
                    gap-2 w-[15%] h-[60%] hover:border-none hover:bg-red-custom hover:text-white">
                        <TbHeadset className="text-5xl" />
                        <h4 className="text-medium text-xl">HeadPhone</h4>
                    </div>
                    <div className=" cursor-pointer border-2 border-gray-300 flex flex-col justify-center items-center 
                    gap-2 w-[15%] h-[60%] hover:border-none hover:bg-red-custom hover:text-white">
                        <LuGamepad className="text-5xl" />
                        <h4 className="text-medium text-xl">Gaming</h4>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-[80vh] my-[5%]">
                <Category name="This Mouth" />
                <div className="flex justify-between items-center w-full">
                    <div>
                        <h2 className="text-5xl font-semibold">Best Selling Products</h2>
                    </div>
                    <div>
                        <Button label="View All" />
                    </div>
                </div>
                <Carrosel />
            </div>
            <div className="flex justify-center items-center w-full h-[80vh] my-[5%]">
                <div className="bg-black w-full h-[500px] rounded flex ">
                    <div className="h-full w-1/2 flex flex-col gap-10 justify-center items-start ml-16">
                        <p className="text-green-500 font-medium">Categories</p>
                        <h1 className="text-white text-6xl">Enhance Your <br /> Music Experience</h1>
                        <div className="flex items-center gap-8">
                            <div className="bg-white rounded-full flex flex-col justify-center items-center w-20 h-20">
                                <p className="font-semibold">05</p>
                                <p className="text-sm">Days</p>
                            </div>
                            <div className="bg-white rounded-full flex flex-col justify-center items-center w-20 h-20">
                                <p className="font-semibold">23</p>
                                <p className="text-sm">Hours</p>
                            </div>
                            <div className="bg-white rounded-full flex flex-col justify-center items-center w-20 h-20">
                                <p className="font-semibold">59</p>
                                <p className="text-sm">Minutes</p>
                            </div>
                            <div className="bg-white rounded-full flex flex-col justify-center items-center w-20 h-20">
                                <p className="font-semibold">35</p>
                                <p className="text-sm">Seconds</p>
                            </div>
                        </div>
                        <button className="bg-green-500 text-white py-5 px-10 rounded">Buy Now!</button>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={Box} className="drop-shadow-xl shadow-white " />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full my-[5%]">
                <Category name="Our Products" />
                <div className="flex justify-between w-full">
                    <div>
                        <h2 className="text-5xl font-semibold">Explore Our Products</h2>
                    </div>
                </div>
                <Carrosel/>
                <div className="mt-[5%]">
                    <Button label="View All Products" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <Category name="Featured" />
                <div className="w-full">
                    <h2 className="text-5xl font-semibold text-start">New Arrival</h2>
                </div>
                <div className="flex gap-3 h-full w-full my-10">
                    <div className="relative flex gap-3 h-full w-full ">
                        <div className="bg-black w-full h-full flex relative">
                            <div className="absolute inset-0 flex justify-center items-center z-10">
                                <img src={PS5} className="w-[81%] object-cover" />
                            </div>
                            <div className="relative flex flex-col gap-3 justify-end m-10 z-20">
                                <h2 className="text-white font-semibold text-3xl">PlayStation 5</h2>
                                <p className="text-white font-light">
                                    Black and White version of the PS5 <br />
                                    coming out on sale.
                                </p>
                                <p className="text-white font-semibold underline underline-offset-4 decoration-gray-line">Shop Now</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 grid-flow-col gap-4 w-full">
                        <div className="col-span-2 bg-black h-full w-full flex relative">
                            <div className="absolute inset-0 flex justify-end items-center z-10">
                                <img src={Woman} className="h-full object-cover" />
                            </div>
                            <div className="flex flex-col gap-3 justify-end m-6 z-20">
                                <h2 className="text-white font-semibold text-3xl">Women's Collections</h2>
                                <p className="text-white font-light">
                                    Feactured woman collections that <br />
                                    give you another vibe.
                                </p>
                                <p className="text-white font-semibold underline underline-offset-4 decoration-gray-line">Shop Now</p>
                            </div>
                        </div>
                        <div className="bg-black h-full w-full flex relative">
                            <div className="absolute inset-0 flex justify-center items-center z-10">
                                <img src={Speakers} className="object-cover drop-shadow-2xl" />
                            </div>
                            <div className="flex flex-col gap-3 justify-end m-5 z-20">
                                <h2 className="text-white font-semibold text-3xl">Speakers</h2>
                                <p className="text-white font-light">
                                    Amazon wireless speakers
                                </p>
                                <p className="text-white font-semibold underline underline-offset-4 decoration-gray-line">Shop Now</p>
                            </div>
                        </div>
                        <div className=" bg-black h-full w-full flex relative">
                            <div className="absolute inset-0 flex justify-center items-center z-10">
                                <img src={Perfume} className=" object-cover" />
                            </div>
                            <div className="flex flex-col gap-3 justify-end m-5 z-20">
                                <h2 className="text-white font-semibold text-3xl">Perfume</h2>
                                <p className="text-white font-light">
                                    GUCCI INTENSE OUD EDP
                                </p>
                                <p className="text-white font-semibold underline underline-offset-4 decoration-gray-line">Shop Now</p>
                            </div>
                        </div>
                    </div>
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