import { TbTruckDelivery, TbHeadset } from "react-icons/tb";
import { RiShieldCheckLine } from "react-icons/ri";
import { IoMdArrowForward } from "react-icons/io";
import { FaApple } from "react-icons/fa6";
import { AdMusic } from "../../components/service/ad_music/AdMusic";
import { ProductList } from "../../components/service/show_products/showProducts";
import { CategoryProducts } from "../../components/service/category_products/CategoryProducts";

import Iphone from "../../image/Iphone_frame_1.png";
import PS5 from "../../image/Frame_3/PS5_frame_3.png";
import Woman from "../../image/Frame_3/Woman_frame_3.png";
import Speakers from "../../image/Frame_3/Amazon_frame_3.png";
import Perfume from "../../image/Frame_3/Perfume_frame_3.png";

import { TitleCategory } from "../../components/service/title_category/TitleCategory";
import { Button } from "../../components/forms/button/Button";
import { Carrosel } from "../../components/service/carrosel/Carrosel";
import { Timer } from "../../components/service/timer/Timer";


export function Home() {
    return (
        <div className="max-w-7xl m-auto font-custom">
            <div className="flex gap-16 xl:h-[60vh] mb-24 container">
                <div className="w-[20%] border-gray-400 border-r-2 hidden lg:flex lg:flex-col lg:justify-start xl:justify-center lg:items-center 2xl:h-4/5">
                    <ul className="font-medium text-lg">
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Woman's Fashion
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Men's Fashion
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Electronics
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Home & Lifestyle
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Medicine
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Sports & Outdoor
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Baby's & Toys
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Groceries & Pets
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                        <li className="mb-3">
                            <a href="/" className="relative inline-block text-lg group">
                                Health & Beauty
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-line group-hover:w-full transition-all duration-500"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div
                    className="bg-black flex w-[85%] h-[60%] md:w-[75%] md:h-[70%] lg:w-[70%] lg:h-[80%] 2xl:h-[60%] m-auto my-10 cursor-pointer">
                    <div className="h-full w-1/2 flex flex-col gap-2 md:gap-5 justify-center items-start ml-3 md:ml-10 lg:ml-16">
                        <div className="flex items-center gap-2">
                            <FaApple className="text-white text-4xl md:text-5xl lg:text-6xl" />
                            <p className="text-white">Iphone 14 Series</p>
                        </div>
                        <div>
                            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl">
                                Up to 10% <br />
                                off Voucher
                            </h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <p
                                className="text-white font-semibold text-xs lg:text-base underline underline-offset-4 decoration-gray-line">
                                Shop Now</p>
                            <IoMdArrowForward className="text-white text-xl" />
                        </div>
                    </div>
                    <div className="flex items-end w-1/2 h-full">
                        <img src={Iphone} className="" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center w-full xl:h-[90vh] mb-24 xl:mb-0 mt-[12%]">
                <TitleCategory name={"Today's"} />
                <div
                    className="flex flex-col items-center gap-5 md:flex-row md:justify-between xl:justify-start xl:gap-20 w-full mb-8">
                    <h2 className="text-5xl font-semibold">Flash Sales</h2>
                    <Timer />
                </div>
                <div className="w-full">
                    <Carrosel />
                </div>
                <div className="my-[5%]">
                    <Button label="View All Products" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 w-full xl:h-[60vh] mb-24 xl:mb-0 my-[5%]">
                <TitleCategory name="Categories" />
                <div className="flex justify-between gap-40 w-full">
                    <div>
                        <h2 className="text-4xl text-center w-full font-semibold">Browse By Categories</h2>
                    </div>
                </div>
                <div
                    className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 md:items-center lg:grid-cols-6 w-full h-1/2 gap-4">
                    <CategoryProducts title="Home" />
                    <CategoryProducts title="Clothing" />
                    <CategoryProducts title="Accessory" />
                    <CategoryProducts title="Computer" />
                    <CategoryProducts title="Camera" />
                    <CategoryProducts title="Gaming" />
                </div>

            </div>
            <div className="flex flex-col justify-center items-center w-full xl:h-[90vh] mb-24 xl:mb-0 my-[5%]">
                <TitleCategory name="This Mouth" />
                <div className="flex flex-col items-center md:flex-row md:justify-between md:items-end gap-5 w-full mb-8">
                    <h2 className="text-4xl lg:text-5xl font-semibold">Best Selling Products</h2>
                    <Button label="View All" />
                </div>
                <div className="w-full">
                    <Carrosel />
                </div>
            </div>
            <div className="flex justify-center items-center w-full xl:h-[90vh] my-[5%]">
                <AdMusic />
            </div>
            <div className="flex flex-col justify-center items-center w-full my-[5%]">
                <TitleCategory name="Our Products" />
                <div className="flex justify-between w-full mb-8">
                    <h2 className="text-5xl font-semibold">Explore Our Products</h2>
                </div>
                <ProductList />
            </div>
            <div className="flex flex-col justify-center items-center w-full xl:h-[90vh] mb-24 xl:mb-0">
                <TitleCategory name="Featured" />
                <div className="w-full">
                    <h2 className="text-5xl font-semibold text-start">New Arrival</h2>
                </div>
                <div className="flex flex-col lg:flex-row gap-3 h-full w-full my-10">
                    <div className="relative flex gap-3 h-full w-full cursor-pointer">
                        <div className="bg-black w-full h-full flex relative">
                            <div className="absolute inset-0 flex justify-center items-end md:items-center lg:items-end z-10">
                                <img src={PS5} className="w-6/12 md:w-[27%] lg:w-7/12 2xl:w-full object-cover" />
                            </div>
                            <div className="relative flex flex-col gap-3 justify-end m-10 z-20">
                                <h2 className="text-white font-semibold text-3xl">PlayStation 5</h2>
                                <p className="text-white font-light">
                                    Black and White version of the PS5 <br />
                                    coming out on sale.
                                </p>
                                <p className="text-white font-semibold underline underline-offset-4 decoration-gray-line">Shop Now
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-2 grid-flow-col gap-4 w-full cursor-pointer">
                        <div className="col-span-2 bg-black h-full w-full flex relative">
                            <div className="absolute inset-0 flex justify-end items-center z-10">
                                <img src={Woman} className="h-full object-cover" />
                            </div>
                            <div className="flex flex-col gap-3 justify-end m-6 z-20">
                                <h2 className="text-white font-semibold text-3xl">Women's Collections</h2>
                                <p className="text-white font-light">
                                    Featured woman collections that <br />
                                    give you another vibe.
                                </p>
                                <p className="text-white font-semibold underline underline-offset-4 decoration-gray-line">Shop Now
                                </p>
                            </div>
                        </div>
                        <div className="bg-black h-full w-full flex relative">
                            <div className="absolute inset-0 flex justify-center items-center z-10">
                                <img src={Speakers} className="object-cover drop-shadow-2xl h-full 2xl:h-auto" />
                            </div>
                            <div className="flex flex-col gap-3 justify-end m-5 z-20">
                                <h2 className="text-white font-semibold text-3xl">Speakers</h2>
                                <p className="text-white font-light">
                                    Amazon wireless speakers
                                </p>
                                <p className="text-white font-semibold underline underline-offset-4 decoration-gray-line">Shop Now
                                </p>
                            </div>
                        </div>
                        <div className=" bg-black h-full w-full flex relative">
                            <div className="absolute inset-0 flex justify-center items-center z-10">
                                <img src={Perfume} className=" object-cover h-full 2xl:h-auto" />
                            </div>
                            <div className="flex flex-col gap-3 justify-end m-5 z-20">
                                <h2 className="text-white font-semibold text-3xl">Perfume</h2>
                                <p className="text-white font-light">
                                    GUCCI INTENSE OUD EDP
                                </p>
                                <p className="text-white font-semibold underline underline-offset-4 decoration-gray-line">Shop Now
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:h-[90vh] mb-24 xl:mb-0 flex flex-col lg:flex-row items-center justify-around">
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
