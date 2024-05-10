import { LayoutRouteProps } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout: React.FC<LayoutRouteProps> = ({children}) => {
    return(
        <div className="m-0 p-0">
            <Header />
            <div className="h-full w-full">
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;