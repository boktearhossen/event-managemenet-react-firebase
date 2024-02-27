import instractor1 from "../../assets/ins1.jpeg"
import instractor2 from "../../assets/ins2.jpeg"
import instractor3 from "../../assets/ins3.jpg"
import instractor4 from "../../assets/ins4.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Instractor = () => {
  useEffect(() => {
    AOS.init();
   },[])




  return (
    <div className="max-w-6xl mx-auto">
      <div className="mx-4 lg:mx-0 my-10 lg:mt-20">
        <h1 className="text-2xl  text-center md:text-start md:text-3xl  lg:text-4xl font-heebo font-bold text-[#072F60]">
          Our Instractor
        </h1>
        {/* instractor cart */}
        <div data-aos="fade-left" className="grid grid-cols-2 lg:grid-cols-4 mt-7 gap-6">
          


          {/* card one */}
          <div  className="cursor-pointer flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className=" overflow-hidden  ">
              <img className="w-full rounded-t-lg" src={instractor1}/>
            </div>
            <div className="p-4">
              <h4 className="text-[#072F60] font-heebo text-xl font-semibold  ">
               Tim Burton
              </h4>
              <p className="font-heebo text-base text-[#3bbca7]">
              Digital Marketing expert
              </p>
            </div>
          </div>



          {/* card two */}
          <div className="cursor-pointer flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className=" overflow-hidden  ">
              <img className="w-full rounded-t-lg" src={instractor2}/>
            </div>
            <div className="p-4">
              <h4 className="text-[#072F60] font-heebo text-xl font-semibold  ">
              Devon Koss
              </h4>
              <p className="font-heebo text-base text-[#3bbca7]">
              Web Developer
              </p>
            </div>
          </div>
          {/* card three */}
          <div className="cursor-pointer flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className=" overflow-hidden  ">
              <img className="w-full rounded-t-lg" src={instractor3}/>
            </div>
            <div className="p-4">
              <h4 className="text-[#072F60] font-heebo text-xl font-semibold  ">
              Fred Hyman
              </h4>
              <p className="font-heebo text-base text-[#3bbca7]">
              App Developer
              </p>
            </div>
          </div>
          {/* card four */}
          <div className="cursor-pointer flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className=" overflow-hidden  ">
              <img className="w-full rounded-t-lg" src={instractor4}/>
            </div>
            <div className="p-4">
              <h4 className="text-[#072F60] font-heebo text-xl font-semibold  ">
              Athels
              </h4>
              <p className="font-heebo text-base text-[#3bbca7]">
              Health and Cooking
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Instractor;
