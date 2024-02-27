import Coursecart from "./Coursecart";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Courses = ({courses}) => {
    useEffect(() => {
        AOS.init();
    },[])

    return (
        <div data-aos="fade-right" className="max-w-6xl mx-auto mt-10  mb-10" >
            <h1 className="text-[#072f60] text-center text-3xl md:text-5xl font-heebo font-semibold mt-6">Join Our Course</h1>
            <div data-aos="zoom-out" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-x-5 gap-y-12">
               {
                courses?.map(course => <Coursecart key={course.id} course={course}></Coursecart>)
               }
            </div>
        </div>
    );
};


// proTypes error
Courses.propTypes ={
    courses: PropTypes.array
}

export default Courses;