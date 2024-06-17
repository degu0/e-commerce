import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

export function Layout({ children }: any) {
    return (
        <div className="m-0 p-0">
            <Header />
            <div className="content-container">
                {children}
            </div>
            <Footer />
        </div>
    );
}
