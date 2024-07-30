import { useEffect, useState } from "react";

export function Timer() {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-12-31') - +new Date();
        let timeLeft: { [key: string]: number } = {};

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
    }, []);

    const timerComponents = Object.keys(timeLeft).map((interval) => {
        if (!timeLeft[interval]) {
            return null;
        }

        return (
            <div className="flex items-center gap-5 w-full font-semibold" key={interval}>
                <div className="flex flex-col">
                    <p className="text-sm">{interval}</p>
                    <h3 className="text-3xl">{timeLeft[interval]}</h3>
                </div>
                {interval !== 'Seconds' ? (
                    <p className="text-red-400 text-3xl pt-5">:</p>
                ) : (
                    <p></p>
                )}
            </div>
        );
    });

    return (
        <div className="flex items-center gap-3">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
}
