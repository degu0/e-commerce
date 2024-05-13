import { RiInstagramLine, RiTwitterXLine, RiLinkedinLine, RiShieldCheckLine } from "react-icons/ri";
import { BiStoreAlt } from "react-icons/bi";
import { TbCoin, TbMoneybag, TbTruckDelivery, TbHeadset } from "react-icons/tb";
import { IoBagOutline } from "react-icons/io5";

const About: React.FC = () => {
    return (
        <div className="h-[315vh]">
            <div className="h-[15vh] flex items-center ml-16">
                <p className="text-gray-500">
                    Home / <label className="text-black">About</label>
                </p>
            </div>
            <div className="h-[80vh] w-full flex flex-wrap">
                <div className="w-1/2 flex flex-col justify-center">
                    <h1 className="text-black text-6xl font-bold text-left mb-10">Our Story</h1>
                    <p className="text-black font-medium text-lg w-[625px]">
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an
                        active presense in Bangladesh. Supported by wide range of tailored marketing, data and service
                        solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across
                        the region.
                    </p>
                    <br />
                    <p className="text-black font-medium text-lg w-[625px]">
                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a
                        diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <div className="w-1/2 bg-pink-500">

                </div>
            </div>
            <div className="h-[70vh] flex items-center justify-around">
                <div className="border-2 border-gray-500 rounded w-[270px] h-[230px] flex flex-col items-center justify-center">
                    <div className="bg-gray-400 rounded-full w-20 h-20 flex items-center justify-center mb-2">
                        <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
                            <BiStoreAlt className="text-white text-4xl" />
                        </div>
                    </div>
                    <h1 className="font-bold text-center text-4xl mb-2">10.5k</h1>
                    <p>
                        Sallers active our site
                    </p>
                </div>
                <div className="border-2 border-gray-500 rounded w-[270px] h-[230px] flex flex-col items-center justify-center">
                    <div className="bg-gray-400 rounded-full w-20 h-20 flex items-center justify-center mb-2">
                        <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
                            <IoBagOutline className="text-white text-4xl" />
                        </div>
                    </div>
                    <h1 className="font-bold text-center text-4xl mb-2">33k</h1>
                    <p>
                        Mopnthly Produduct Sale
                    </p>
                </div>
                <div className="border-2 border-gray-500 rounded w-[270px] h-[230px] flex flex-col items-center justify-center">
                    <div className="bg-gray-400 rounded-full w-20 h-20 flex items-center justify-center mb-2">
                        <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
                            <TbCoin className="text-white text-4xl" />
                        </div>
                    </div>
                    <h1 className="font-bold text-center text-4xl mb-2">45.5k</h1>
                    <p>
                        Customer active in our site
                    </p>
                </div>
                <div className="border-2 border-gray-500 rounded w-[270px] h-[230px] flex flex-col items-center justify-center">
                    <div className="bg-gray-400 rounded-full w-20 h-20 flex items-center justify-center mb-2">
                        <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center">
                            <TbMoneybag className="text-white text-4xl" />
                        </div>
                    </div>
                    <h1 className="font-bold text-center text-4xl mb-2">25k</h1>
                    <p>
                        Anual gross sale in our site
                    </p>
                </div>
            </div>
            <div className="h-[80vh] flex items-center justify-around w- full ">
                <div className="flex flex-col justify-center w-[370px] h-full">
                    <div className="bg-gray-500 w-full h-full"></div>
                    <div>
                        <h1 className="text-bold text-5xl">Tom Cruise</h1>
                        <h3 className="text-lg">Founder & Chairman</h3>
                        <div className="flex text-lg gap-2 mt-4">
                            <RiInstagramLine />
                            <RiTwitterXLine />
                            <RiLinkedinLine />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-[370px] h-full">
                    <div className="bg-gray-500 w-full h-full"></div>
                    <div>
                        <h1 className="text-bold text-5xl">Emma Watson</h1>
                        <h3 className="text-lg">Managing Director</h3>
                        <div className="flex text-lg gap-2 mt-4">
                            <RiInstagramLine />
                            <RiTwitterXLine />
                            <RiLinkedinLine />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center w-[370px] h-full">
                    <div className="bg-gray-500 w-full h-full"></div>
                    <div>
                        <h1 className="text-bold text-5xl">Will Smith</h1>
                        <h3 className="text-lg">Product Designer</h3>
                        <div className="flex gap-2 mt-4">
                            <RiInstagramLine />
                            <RiTwitterXLine />
                            <RiLinkedinLine />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[70vh] flex items-center justify-around">
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

export default About;