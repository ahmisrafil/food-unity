import { Outlet } from "react-router-dom";
import NavBar from "../Layout/NavBar";
import Footer from "../Layout/Footer";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;