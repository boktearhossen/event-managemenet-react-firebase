import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';


const FeaturedCard = ({featured}) => {

    useEffect(() => {
        AOS.init();
    },[])


    const { img, name} = featured
    return (
        <div className='flex items-center bg-gray-200 p-7 cursor-pointer rounded' data-aos="fade-down">
            <img className='w-[45px] mr-6' src={img} alt="" />
            <h2 className='text-xl font-heebo text-[#072f60] font-semibold'>{name}</h2>
        </div>
    );
};


FeaturedCard.propTypes ={
    featured: PropTypes.array
}
export default FeaturedCard;