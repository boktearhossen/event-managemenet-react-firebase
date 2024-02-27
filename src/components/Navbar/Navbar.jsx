import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useContext, useState } from "react";
import { SlMenu } from 'react-icons/sl';
import { RxCross1 } from 'react-icons/rx';
import { BiSolidUser } from 'react-icons/bi';
import { AuthContext } from "../../Pages/Provider/AuthProvider";

const Navbar = () => {
    const [open, setOpen] = useState(false)
     const {user, logOut} = useContext(AuthContext)


//log out
const handleSignOut = () => {
    logOut()
    .then()
    .catch()
}



    return (
        <div className="shadow-2xl">
           <div className="max-w-6xl mx-auto px-4 lg:px-0 flex justify-between content-center items-center py-3 ">

            {/* left */}
            <div className="w-[210px] hidden md:block">
              <img className="cursor-pointer" src={logo} alt="" />
            </div>
          
            {/* middle ==========================*/}
            <div className="items-center">
                {/* menu----------- */}

                <div onClick={( ) => setOpen(!open)} className="md:hidden cursor-pointer flex items-center ml-2 text-3xl font-heebo text-[#072f60] font-medium">
                
                {
                    open ? <SlMenu></SlMenu> : <RxCross1></RxCross1>
                }
                     {/* mobile device show logo */}
                     <img className="w-[150px] ml-6 cursor-pointer" src={logo} alt="" />
               
                </div >
               
               
               <ul className={`md:flex gap-x-6 sm:absolute md:static  bg-white md:space-y-0 ${!open ? "top-16 px-10 py-6 space-y-4 " : "hidden"}`}>
                <li className="text-xl font-heebo text-[#072f60] font-medium">
                    <NavLink className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#3bbca7] border-b-2 border-[#3bbca7]" : "" }
                     to={'/'}>Home
                     </NavLink>
                </li>
                <li className="text-xl font-heebo text-[#072f60] font-medium">
                    <NavLink className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#3bbca7] border-b-2 border-[#3bbca7]" : "" }
                      to={'/course'}>Course
                     </NavLink>
                </li>
                <li className="text-xl font-heebo text-[#072f60] font-medium">
                    <NavLink className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-[#3bbca7] border-b-2 border-[#3bbca7]" : "" }
                     to={'/blog'}>Blog
                    </NavLink>
                </li>
               </ul>
            </div>

            {/* right */}
            <div className="flex items-center">
                {
                    user && <div className="border border-[#3bbca7] mr-3 hover:bg-[#3bbca7] text-[#666666] hover:text-[#072f60] p-2 rounded-full">
                    <BiSolidUser className="text-xl"></BiSolidUser>
                    </div>
                }

                
                {
                    user ? <button  onClick={handleSignOut} className="btn border-none text-[#072f60] hover:text-[#3bbca7]  hover:bg-[#072f60] btn-primary bg-[#3bbca7] "> Sign Out</button> :
                    <NavLink className="btn border-none text-[#072f60] hover:text-[#3bbca7]  hover:bg-[#072f60] btn-primary bg-[#3bbca7] "
                     to={'/login'}>Login
                    </NavLink>
                }
               
            </div>
            </div>
        </div>
    );
};

export default Navbar;





