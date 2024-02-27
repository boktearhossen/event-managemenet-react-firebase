import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineClockCircle,AiFillStar } from 'react-icons/ai';
import { BsBook,BsFillPersonFill } from 'react-icons/bs';
import { MdJoinInner } from 'react-icons/md';
import { SiLevelsdotfyi } from 'react-icons/si';



const CourseDetails = () => {
   
 
    const [acourse, setACourse] = useState([])
    const [open, setOpen] = useState(false)
    const {id} = useParams()
    const courseData = useLoaderData()
    
    
 
    useEffect(()=> {
       const selectCourse = courseData?.find(course => course.id === id)
       setACourse(selectCourse)
      
    },[id, courseData])
    

    const { author_img, author_name,duretion, description, category, course_name,  enrolled,instructor, lesson,level, price,  review, thumbail, update } = acourse




    return (
        // details card=============================================
        <div className="bg-[#FCFCF2] py-8">
            <div className="max-w-6xl mx-auto gap-5 grid grid-cols-1 lg:grid-cols-3 my-6 px-5 lg-px-0 lg:my-10">
                {/* left content */}
                <div className="col-span-2 ">
                   <div className="flex items-center">
                    <span className="text-[#3bbca7] font-semibold">({review})</span>
                    <div className="text-yellow-500 flex ml-2">
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                        <AiFillStar></AiFillStar>
                    </div>
                   </div>
                   <h1 className="text-[#072f60] font-heebo font-bold text-4xl mt-7">{course_name}</h1>
                    
                    <div className="flex mt-7">
                      <span className="border-r text-[#072f60] font-heebo font-semibold text-lg border-[#072f60] p-3 pl-0 pr-8">{category}</span>
                      <span className="p-3 ml-5 text-[#072f60] font-heebo font-semibold text-lg">Last Update: <span className="text-base text-[#3bbca7]">{update}</span></span>
                   </div>
                    {/* instractor */}
                    <div className="border-b-2 border-[#3bbca7] pb-6">
                        <h2 className="text-[#072f60] font-heebo mb-5 font-bold text-2xl mt-7">Instractor</h2>
                        <div className="flex items-center">
                            <div>
                               <img className="w-[320px] rounded-full " src={author_img} alt="" />
                            </div>
                            <div className="ml-7">
                               <h2 className="text-[#072f60] font-heebo font-semibold text-lg">{author_name}</h2>
                                <p className="text">
                                {instructor}
                               </p>
                            </div>
                        </div>
                        
                    </div>

                    {/* about course */}

                   <div>
                   <h2 className="text-[#072f60] font-heebo mb-5 font-bold text-2xl mt-7">About Course</h2>
                     {
                        open ? <p>{ description.slice(0,220)} </p> : <p>{description}</p>
                     }

                    <button className="block font-bold font-heebo text-[#3bbca7] text-xl" onClick={( ) => setOpen(!open)}> 
                     {open ? "See More" : "See Less"} 
                    </button>
                     </div>

                     
                </div>
                {/* right content ==========================================*/}
                <div className="bg-white shadow-lg">
                    <img className="h-[200px] w-full object-cover" src={thumbail} alt="" />
                    <div className="px-7">
                       <div className="text-center">
                         <h2 className="text-[#072f60] font-heebo font-semibold text-2xl my-5">{price}</h2>
                         <button className="btn border-none w-full font-heebo font-bold  text-[#072f60] hover:text-[#3bbca7]  hover:bg-[#072f60] btn-primary bg-[#3bbca7]">Bye Course</button>
                        
                       </div>
                       
                       
                       {/* duretion */}
                       <div className="flex justify-between border-b mt-7">
                         <div className="flex items-center" >
                            <AiOutlineClockCircle className="font-bold text-xl"></AiOutlineClockCircle>
                            <h3 className="text-[#072f60] text-lg font-heebo font-medium ml-2 py-2">Duretion</h3>
                         </div>
                            <h3 className="text-[#072f60] text-lg font-heebo font-medium ml-2 py-2">{duretion}</h3> 
                       </div>  
                       {/* lessone */}
                       <div className="flex justify-between items-center border-b">
                         <div className="flex items-center" >
                            <BsBook className="font-bold text-lg"></BsBook>
                            <h3 className="text-[#072f60] text-lg font-heebo font-medium ml-2 py-2">Lesson</h3>
                         </div>
                          <h3 className="text-[#072f60] text-lg font-heebo font-medium ml-2 py-2">{lesson}</h3> 
                       </div> 
                        {/*enrolled  */}
                        <div className="flex justify-between border-b">
                         <div className="flex items-center" >
                            <MdJoinInner className="font-bold text-lg"></MdJoinInner>
                            <h3 className="text-[#072f60] text-lg font-heebo font-medium ml-2 py-2">Enrolled</h3>
                         </div>
                          <h3 className="text-[#072f60] text-lg font-heebo font-medium ml-2 py-2">{enrolled} </h3>
                       </div> 
                       {/* instractor */}
                       <div className="flex justify-between border-b">
                         <div className="flex items-center" >
                            <BsFillPersonFill className="font-bold text-lg"></BsFillPersonFill>
                            <h3 className="text-[#072f60] text-lg font-heebo font-medium ml-2 py-2">Instractor Name</h3>
                         </div>
                          <h3 className="text-[#072f60] text-lg font-heebo font-medium ml-2 py-2">{author_name}</h3> 
                       </div> 
                       {/* level */}
                       <div className="flex justify-between border-b">
                         <div className="flex items-center" >
                            <SiLevelsdotfyi className="font-bold text-base"></SiLevelsdotfyi>
                            <h3 className="text-[#072f60] text-lg font-heebo font-medium ml-2 py-2">Level</h3>
                         </div>
                          <h3 className="text-[#072f60] text-lg font-heebo font-medium ml-2 py-2">{level} </h3>
                       </div> 
                     </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;