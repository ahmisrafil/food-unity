import { NavLink } from "react-router-dom";


const NavBar = () => {


    const navLinks = <>
        <li className="lg:text-gray-700 lg:text-base lg:font-sans  lg:mx-2">
            <NavLink to='/'>Home</NavLink>
        </li>
        <li className="lg:text-gray-700 lg:text-base lg:font-sans  lg:mx-2">
            <NavLink to='/availablefoods'>Available Foods</NavLink>
        </li>
        <li className="lg:text-gray-700 lg:text-base lg:font-sans  lg:mx-2">
            <NavLink to='/addfood'>Add Food</NavLink>
        </li>
        <li className="lg:text-gray-700 lg:text-base lg:font-sans  lg:mx-2">
            <NavLink to='/managefood'>Manage My foods</NavLink>
        </li>
        <li className="lg:text-gray-700 lg:text-base lg:font-sans  lg:mx-2">
            <NavLink to='/foodrequest'>My Food Request</NavLink>
        </li>
        <li className="lg:text-gray-700 lg:text-base lg:font-sans  lg:mx-2">
            <NavLink to='/login'>Login</NavLink>
        </li>
    </>

    return (
        <div className="navbar flex flex-col md:flex-row gap-4 bg-[#ffffff]  px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-grey-700 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex gap-4">
                    <img className="h-28" src="/src/assets/logo/logo.png" alt="foodUnity-logo" />

                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  px-1">
                    {navLinks}
                </ul>
            </div>

            {/* <div className="navbar-end flex flex-col justify-end md:flex-row">
            {
                user && <>
                    <div className="text-white flex flex-row gap-2 items-center">
                        <img className="h-[40px] w-[40px] rounded-full " src={user.photoURL} alt="" />
                        <div>
                            <p>{user.displayName}</p>
                            <span className="text-xs mr-2">{user.email}</span>
                        </div>
                    </div>
                    <button onClick={handleLogout} className="btn btn-sm">Sign Out</button></>

            }

        </div> */}
        </div>
    );
};

export default NavBar;