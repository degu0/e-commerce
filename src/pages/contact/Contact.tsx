import { FiPhone } from "react-icons/fi";
import { SlEnvolope } from "react-icons/sl";
import { Button } from "../../components/forms/button/Button";
import { Input } from "../../components/forms/input/Input";

export function Contact() {
    return (
        <div className="h-[190vh] md:h-screen font-custom">
            <div className="h-[15vh] flex items-center ml-24">
                <p className="text-gray-500 tracking-widest">
                    Home / <label className="text-black">Contact</label>
                </p>
            </div>
            <div className="flex flex-col gap-7 md:gap-0 sm:flex-row justify-evenly items-center h-4/5 w-full">
                <div className="w-3/4 h-4/5 md:w-5/12 lg:w-4/12 xl:w-3/12 border-none rounded shadow-lg">
                    <div className="m-8">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-custom rounded-full w-10 h-10 flex justify-center items-center">
                                <FiPhone className="text-white text-2xl" />
                            </div>
                            <h3 className="font-medium text-xl">
                                Call To Us
                            </h3>
                        </div>
                        <br />
                        <p className="mb-2 text-xs xl:text-base  2xl:text-lg">We are available 24/7, 7 days a week</p>
                        <p className="text-xs xl:text-base 2xl:text-lg">Phone: +8801611112222</p>
                    </div>
                    <hr className="w-[80%] mx-auto" />
                    <div className="mx-8 my-5 h-1/2">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-custom rounded-full w-10 h-10 flex justify-center items-center">
                                <SlEnvolope className="text-white text-2xl" />
                            </div>
                            <h3 className="font-medium text-xl">
                                Write To Us
                            </h3>
                        </div>
                        <br />
                        <p className="text-xs xl:text-base 2xl:text-lg">Fill out our form and we will contact you within 24 hours</p>
                        <p className="my-2 text-xs xl:text-base 2xl:text-lg">Emails: customer@ecommerce.com</p>
                        <p className="text-xs xl:text-base 2xl:text-lg">Emails: support@ecommerce.com</p>
                    </div>
                </div>
                <div className="w-3/4 h-4/5 md:w-6/12 py-7 border-none rounded shadow-lg flex flex-col justify-center items-center">
                    <div className="flex flex-wrap gap-5 justify-center items-center lg:flex-col w-full text-md">
                        <Input name="Name" placeholder="Your Name" />
                        <Input name="Name" placeholder="Your Email" />
                        <Input name="Name" placeholder="Your Phone" />
                    </div>
                    <div className="w-full h-1/2 flex justify-center my-8">
                        <textarea name="compalint" placeholder="Your Massage" className="p-2 px-4 border-none rounded-md bg-gray-200 w-4/5 h-full"></textarea>
                    </div>
                    <div className="xl:flex xl:justify-end w-10/12">
                        <Button label="Send Massage" />
                    </div>
                </div>
            </div>
        </div>
    );
}
