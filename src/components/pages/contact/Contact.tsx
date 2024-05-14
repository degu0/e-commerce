import { FiPhone } from "react-icons/fi";
import { SlEnvolope } from "react-icons/sl";
import Button from "../../forms/button/Button";
import Input from "../../forms/input/Input";

const Contact: React.FC = () => {
    return (
        <div className="h-screen">
            <div className="h-[15vh] flex items-center ml-24">
                <p className="text-gray-500">
                    Home / <label className="text-black">About</label>
                </p>
            </div>
            <div className="flex justify-evenly items-center h-[80%] w-full">
                <div className="w-[340px] h-[470px] border-none rounded shadow-lg">
                    <div className="mx-10 my-8">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-custom rounded-full w-10 h-10 flex justify-center items-center">
                                <FiPhone className="text-white text-2xl" />
                            </div>
                            <h3 className="font-medium text-xl">
                                Call To Us
                            </h3>
                        </div>
                        <br />
                        <p>We are available 24/7, 7 days a week</p>
                        <br />
                        <p>Phone: +8801611112222</p>
                    </div>
                    <hr className="w-[80%] mx-auto" />
                    <div className="m-10 h-1/2">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-custom rounded-full w-10 h-10 flex justify-center items-center">
                                <SlEnvolope className="text-white text-2xl" />
                            </div>
                            <h3 className="font-medium text-xl">
                                Write To Us
                            </h3>
                        </div>
                        <br />
                        <p>Fill out our form and we will contact you within 24 hours</p>
                        <p className="my-3">Emails: customer@ecommerce.com</p>
                        <p>Emails: support@ecommerce.com</p>
                    </div>
                </div>
                <div className="w-[60%] h-[470px] border-none rounded shadow-lg flex flex-col justify-center items-center">
                    <div className="flex justify-around w-full ">
                        <Input name="Name" placeholder="Your Name"/>
                        <Input name="Name" placeholder="Your Email"/>
                        <Input name="Name" placeholder="Your Phone"/>
                    </div>
                    <div className="w-full h-1/2 flex justify-center my-8">
                        <textarea name="compalint" placeholder="Your Massage" className="p-2 px-8 border-none rounded-md bg-gray-200 w-[92%] h-full"></textarea>
                    </div>
                    <div className="w-[92%] flex justify-end">
                        <Button label="Send Massage"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;