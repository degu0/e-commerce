import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { useEffect, useState } from "react";

export function Layout({ children }: any) {
    const [isLoading, setIsLoading] = useState(false);

    const fakeLoading = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    useEffect(() => {
        fakeLoading();
    }, []);

    return (
        <div className="m-0 p-0">
            <Header />
            <div className="content-container">
                {isLoading ? (
                    <div className="h-screen flex-col gap-4 w-full flex items-center justify-center">
                        <div className="w-24 h-24 border-8 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-red-custom rounded-full">
                        </div>
                    </div>
                ) : (
                    children
                )}
            </div>
            <Footer />
        </div>
    );
}
