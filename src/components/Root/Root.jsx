import { Outlet } from "react-router-dom";
import NavBar from "../Layout/NavBar";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;