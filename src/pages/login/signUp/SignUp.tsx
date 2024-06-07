import Image from '../../../image/Image_login.png';
import Google from '../../../image/Google_Icon.svg';

const SignUp: React.FC = () => {
    return (
    <div className="w-full h-screen flex font-custom">
            <div className="w-[60%] bg-blue-login flex justify-center items-end">
                <img src={Image} className="h-full" />
            </div>
            <div className="w-[40%]">
                <form action="" className="h-full w-full flex flex-col items-center justify-center">
                    <div className="flex flex-col items-start mb-8">
                        <h1 className="text-black font-bold text-[44px] mb-2 tracking-wide">Create an account</h1>
                        <h3 className="text-black text-xl">Enter your details below</h3>
                    </div>
                    <div className="flex flex-col items-center w-full gap-6">
                        <input type="text" className="w-[60%] border-b-2 border-gray-200 p-2" placeholder="Name" />
                        <input type="text" className="w-[60%] border-b-2 border-gray-200 p-2" placeholder="Email or Phone Number" />
                        <input type="text" className="w-[60%] border-b-2 border-gray-200 p-2" placeholder="Password" />
                    </div>
                    <div className="w-[60%] flex flex-col items-center justify-between mt-8">
                        <button className="bg-red-custom w-full h-14 border-none rounded text-white text-normal mb-4">
                            Create Account
                        </button>
                        <button 
                        className="bg-white w-full h-14 border-2 border-black rounded text-black 
                        text-normal mb-4 flex items-center justify-center gap-2">
                            <img src={Google} alt="Google Login" className='w-10' />
                            Sign Up with Google 
                        </button>
                        <p className="text-gray-500 mt-2">
                            Already have account? <a href="/login" className="text-gray-500 underline">Login</a>    
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;