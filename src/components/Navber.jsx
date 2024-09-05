
import { IoBagOutline } from "react-icons/io5";
const Navber = () => {
    const navlinks=<>
                <li><a>Home</a></li>
              <li><a className="bg-gray-100">Products</a></li>
              <li><a>Categories</a></li>
              <li><a>Custom</a></li>
              <li><a>Blog</a></li>
    </>
    return (
        <div className="navbar bg-base-100 px-[200px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {navlinks}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <div className="flex items-center gap-[6px]">
                <img className="w-[38px] h-[38px]" src="https://cdn-icons-png.flaticon.com/512/6646/6646465.png" alt="" />
                <p className="text-[20px] font-[700] leading-[24.2px]">Furni<span className="text-[#1E99F5]">Flex</span></p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-[500]">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-[24px]">
          <IoBagOutline className="w-[33px] h-[34px]" />
          <img className="h-[40px] w-[40px] rounded-full bg-gray-300" src="" alt="10*10" />
        </div>
      </div>
    );
};

export default Navber;