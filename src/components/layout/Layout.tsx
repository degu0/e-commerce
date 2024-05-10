import { LayoutRouteProps } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout: React.FC<LayoutRouteProps> = ({children}) => {
    return(
        <div className="m-0 p-0">
            <Header />
            <div className="h-screen w-max overscroll-x-none">
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;