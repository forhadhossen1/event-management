import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink>Blog</NavLink></li>
        <li><NavLink>Contact</NavLink></li>
        <li><NavLink>About</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navLinks}
                        </ul>
                    </div>
                    <h2 className="text-5xl font-bold text-orange-700">Nic <span className="text-sm text-black">Event Agency</span></h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">                  
                    <Link to='/login' className="btn px-6 py-0 bg-orange-700 border-none">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;