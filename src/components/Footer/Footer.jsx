import { BsFacebook, BsInstagram, BsTelephoneXFill, BsTwitter } from "react-icons/bs";
import { BiLogoGmail} from "react-icons/bi";
import { MdLocationOn} from "react-icons/md";
import logo from "../../assets/logo.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Footer = () => {
    useEffect(() => {
        AOS.init();
    },[])



    return (
        <div data-aos="zoom-in">
            
<footer className="pt-16 pb-10 bg-gray-100 px-4 lg:px-0">
    <div className="border-b-2 pb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {/* first */}
        <div>
         <img className="w-[150px] md:w-[200px]" src={logo} alt="" />
          <p className="text-[#666666] mt-6 font-medium font-heebo ml-3">We support programs <br /> that create advancement <br /> for people</p>
          <div className="flex gap-4 mt-4 p-3 rounded-full">
            <div className="border border-[#3bbca7] hover:bg-[#3bbca7] text-[#666666] hover:text-[#072f60] p-3 rounded-full">
            <BsFacebook className="text-lg "></BsFacebook>
            </div>
            <div className="border border-[#3bbca7] hover:bg-[#3bbca7] text-[#666666] hover:text-[#072f60] p-3 rounded-full">
            <BsTwitter className="text-lg"></BsTwitter>
            </div>
            <div className="border border-[#3bbca7] hover:bg-[#3bbca7] text-[#666666] hover:text-[#072f60] p-3 rounded-full">
            <BsInstagram className="text-lg"></BsInstagram>
            </div>
          
          
          </div>
        </div>
        {/* second */}
        <div>
           <h3 className="text-2xl font-heebo font-bold mb-6 text-[#072f60]">Useful links</h3>
           <ul>
            <li className="text-[#666666] mt-4 text-base hover:text-[#3bbca7]  font-medium font-heebo"><a href="#">About Us</a></li>
            <li className="text-[#666666] mt-4 text-base hover:text-[#3bbca7]  font-medium font-heebo"><a href="#">Privacy Policy</a></li>
            <li className="text-[#666666] mt-4 text-base hover:text-[#3bbca7]  font-medium font-heebo"><a href="#">Terms and Conditions</a></li>
            <li className="text-[#666666] mt-4 text-base hover:text-[#3bbca7]  font-medium font-heebo"><a href="#">Student Spotlight</a></li>
           </ul>
        </div>
        {/* Third */}
        <div>
           <h3 className="text-2xl font-heebo font-bold mb-6 text-[#072f60]">Learning</h3>
           <ul>
            <li className="text-[#666666] mt-4 text-base hover:text-[#3bbca7]  font-medium font-heebo"><a href="#">Business Tradegy</a></li>
            <li className="text-[#666666] mt-4 text-base hover:text-[#3bbca7]  font-medium font-heebo"><a href="#">Become a Teacher</a></li>
            <li className="text-[#666666] mt-4 text-base hover:text-[#3bbca7]  font-medium font-heebo"><a href="#">Project Management</a></li>
            <li className="text-[#666666] mt-4 text-base hover:text-[#3bbca7]  font-medium font-heebo"><a href="#">Membership</a></li>
           </ul>
        </div>
        {/* fourth */}
        <div>
            <h2 className="text-2xl font-heebo font-bold mb-6 text-[#072f60]">Contact Us</h2>
            <div className="flex gap-4 items-center">
                <BsTelephoneXFill></BsTelephoneXFill>
                <p className="text-[#666666] font-medium font-heebo">8801844903265</p> 
            </div>
            <div className="flex gap-4 items-center mt-4">
                <BiLogoGmail ></BiLogoGmail>
                <p className="text-[#666666] font-medium font-heebo">boktearhossen77@gmail.com</p> 
            </div>
            <div className="flex gap-3 items-center mt-4">
                <MdLocationOn className="text-2xl"></MdLocationOn>
                <p className="text-[#666666] font-medium font-heebo">Dhaka, Bangladesh</p> 
            </div>
             
        </div>
    </div>
  
    <div>
        <p className="text-center mt-6 font-heebo text-[#666666] font-semibold text-lg">© Copyright 2023 Pixelcurve All rights reserved.</p>
    </div>
</footer>


        </div>
    );
};

export default Footer;