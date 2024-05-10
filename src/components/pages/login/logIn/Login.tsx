const Login: React.FC = () => {
    return(
        <div className="w-full h-screen flex">
        <div className="w-[60%] bg-blue-login">
            {/* <img src="./image/dl_beatsnoop_1.png" alt="" /> */}
        </div>
        <div className="w-[40%]">
            <form action="" className="h-full w-full flex flex-col items-center justify-center">
                <div className="flex flex-col items-start mb-8">
                    <h1 className="text-black font-bold text-4xl mb-2">Log in to Ecommerce</h1>
                    <h3 className="text-black text-xl">Enter your details below</h3>
                </div>
                <div className="flex flex-col items-center w-full gap-6">
                    <input type="text" className="w-[60%] border-b-2 border-gray-200 p-2" placeholder="Email or Phone Number" />
                    <input type="text" className="w-[60%] border-b-2 border-gray-200 p-2" placeholder="Password" />
                </div>
                <div className="w-[60%] flex items-center justify-between mt-8">
                    <button className="bg-red-custom w-36 h-14 border-none rounded text-white text-normal">Log in</button>
                    <a href="#" className="text-red-custom">Forgot Password?</a>
                </div>
            </form>
        </div>
    </div>
    );
}

export default Login;