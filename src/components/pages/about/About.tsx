const About: React.FC = () => {
    return (
        <div className="h-[245vh]">
            <div className="h-[15vh] flex items-center ml-16">
                <p className="text-gray-500">
                    Home / <label className="text-black">About</label>
                </p>
            </div>
            <div className="h-[80vh] w-full flex">
                <div className="w-1/2 ">
                    <h1 className="text-black text-2xl font-bold">TITLE</h1>
                    <p className="text-black  text-normal">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas,
                        veritatis! Optio necessitatibus nisi adipisci consectetur
                        recusandae harum eveniet magni architecto cum, quis illum a aperiam
                        tempora quasi animi! Quos, qui.
                    </p>
                </div>
                <div className="w-1/2 bg-pink-500">

                </div>
            </div>
            <div className="h-[50vh] flex items-center justify-around">
                <div className="border-2 border-gray-500 rounded w-1/6 h-1/4 flex flex-col items-center">
                    <div className="bg-black rounded-full w-10 h-10"></div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae itaque neque magnam incidunt voluptatum
                    </p>
                </div>
                <div className="border-2 border-gray-500 rounded w-1/6 h-1/4 flex flex-col items-center">
                    <div className="bg-black rounded-full w-10 h-10"></div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae itaque neque magnam incidunt voluptatum
                    </p>
                </div>
                <div className="border-2 border-gray-500 rounded w-1/6 h-1/4 flex flex-col items-center">
                    <div className="bg-black rounded-full w-10 h-10"></div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae itaque neque magnam incidunt voluptatum
                    </p>
                </div>
                <div className="border-2 border-gray-500 rounded w-1/6 h-1/4 flex flex-col items-center">
                    <div className="bg-black rounded-full w-10 h-10"></div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae itaque neque magnam incidunt voluptatum
                    </p>
                </div>
            </div>
            <div className="h-[50vh] flex items-center justify-around w- full ">
                <div className="flex">
                    <div className="bg-gray-500 w-1/4 h-1/2"></div>
                    <div>
                        <h1>title</h1>
                        <h3>subtitle</h3>
                        <div className="flex gap-2">
                            <div className="bg-black rounded-full w-5 h-5"></div>
                            <div className="bg-black rounded-full w-5 h-5"></div>
                            <div className="bg-black rounded-full w-5 h-5"></div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-gray-500 w-full h-full"></div>
                    <div>
                        <h1>title</h1>
                        <h3>subtitle</h3>
                        <div className="flex gap-2">
                            <div className="bg-black rounded-full w-5 h-5"></div>
                            <div className="bg-black rounded-full w-5 h-5"></div>
                            <div className="bg-black rounded-full w-5 h-5"></div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-gray-500 w-1/4 h-1/2"></div>
                    <div>
                        <h1>title</h1>
                        <h3>subtitle</h3>
                        <div className="flex gap-2">
                            <div className="bg-black rounded-full w-5 h-5"></div>
                            <div className="bg-black rounded-full w-5 h-5"></div>
                            <div className="bg-black rounded-full w-5 h-5"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[50vh] flex items-center justify-around">
                <div>
                    <div className="bg-black rounded-full h-10 w-10"></div>
                    <h1>title</h1>
                    <h3>subtitle</h3>
                </div>
                <div>
                    <div className="bg-black rounded-full h-10 w-10"></div>
                    <h1>title</h1>
                    <h3>subtitle</h3>
                </div>
                <div>
                    <div className="bg-black rounded-full h-10 w-10"></div>
                    <h1>title</h1>
                    <h3>subtitle</h3>
                </div>
            </div>
        </div>
    );
}

export default About;