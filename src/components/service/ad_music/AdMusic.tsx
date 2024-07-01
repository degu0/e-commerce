import { useState, useEffect } from 'react';
import Box from "../../../image/JBL.png";

export function AdMusic () {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-12-31') - +new Date();
        let timeLeft: any = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutes: Math.floor((difference / 1000 / 60) % 60),
                Seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents: any = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }
        timerComponents.push(
            <div className="bg-white rounded-full flex flex-col justify-center items-center w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20" key={interval}>
                <p className="font-semibold">{timeLeft[interval]}</p>
                <p className="text-xs xl:text-base">{interval}</p>
            </div>
        );
    });

    return (
        <div className="bg-black w-[92%] 2xl:w-full h-[500px] rounded flex">
            <div className="h-full w-1/2 flex flex-col gap-10 justify-center items-start ml-5 lg:ml-16 text-white">
                <p className="text-green-500 font-medium">Categories</p>
                <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl">Enhance Your <br /> Music Experience</h1>
                <div className="flex items-center gap-2 text-black">
                    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                </div>
                <button className="bg-green-500 text-white py-5 px-10 rounded">Buy Now!</button>
            </div>
            <div className="flex items-start mt-32 md:mt-16 lg:items-center lg:justify-center lg:mt-0">
                <img src={Box} alt="Box" className="drop-shadow-xl shadow-white" />
            </div>
        </div>
    );
}