import banner from "../../assets/hero1.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Banner = () => {
  useEffect(() => {
    AOS.init();
  },[])


  return (
   

    <div className="bg-[#F6F7F9]">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:h-screen lg:h-[86nvh] mx-auto items-center max-w-6xl px-4 lg:p-0">
        {/* left  content*/}
        <div className="text-center md:text-start " data-aos="fade-right">
            <h4 className="text-[#3bbca7] mt-10  font-heebo font-semibold text-lg">DEVELOPED BY TO TEACHERS</h4>
            <h1 className="text-[#072f60] text-5xl font-heebo font-semibold mt-6">Experience a learning platform that take you next level</h1>
            <p className="#666666 mt-4">World-class training and development programs <br/> developed by top teachers</p>
            <button className="btn border-none text-[#072f60] hover:text-[#3bbca7]  hover:bg-[#072f60] btn-primary bg-[#3bbca7] mt-7">Explore All Course</button>
        </div>
        {/* right voontent */}
        <div className="pl-0 md:pl-5" data-aos="fade-left">
          <img className="w-full h-full" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

