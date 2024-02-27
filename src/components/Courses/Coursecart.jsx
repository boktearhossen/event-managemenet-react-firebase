import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Coursecart = ({ course }) => {
  const {
    author_img,
    author_name,
    category,
    course_name,
    id,
    price,
    thumbail,
  } = course;

//   console.log(course);
  return (
    <div>
       <div className=" border border-gray-200 rounded-lg shadow-md ">
          <img className="rounded-t-lg" src={thumbail} alt="" />
        <div className="p-5">
            <div className='flex justify-between'>
                <h3 className='bg-[#c2e9e2] py-1 rounded text-[#3bbca7] font-heebo text-sm font-semibold px-2'>{category}</h3>
                <h4 className='text-[#072f60] font-bold text-base font-heebo'>{price}</h4>
            </div>
            <h2 className='text-[#072f60] font-heebo font-bold text-lg mt-5'>{course_name}</h2>
             <div className='flex items-center mt-3'>
                <img className=' w-[50px] h-[50px] rounded-full mr-4' src={author_img} alt="" />
                <span>
                    <p className='text-[#3bbca7] font-heebo text-sm font-semibold '>{author_name}</p>
                </span>
             </div>
             <NavLink to={`/coursedetails/${id}`}>
                <button className='btn border-none w-full mt-10 text-[#072f60] hover:text-[#3bbca7]  hover:bg-[#072f60] btn-primary bg-[#3bbca7]'>Details</button>
             </NavLink>
            
        </div>
      </div>
    </div>
  );
};



// protypes error
Coursecart.propTypes ={
    course: PropTypes.array
   
}
export default Coursecart;
