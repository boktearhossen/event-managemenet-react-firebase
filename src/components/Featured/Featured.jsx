import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";


const Featured = () => {

   const [featuredData, setFeaturedData] = useState([])
   useEffect(() => {
         fetch('/featured.course.json')
         .then(res => res.json())
         .then(data => setFeaturedData(data))
   },[])
   console.log(featuredData);

    return (
        <div className="max-w-6xl mx-auto ">
            <div className="mx-4 lg:mx-0 mt-10 md:mt-20 mb-20">
                <h1 className="text-2xl  text-center md:text-start md:text-3xl  lg:text-4xl font-heebo font-bold text-[#072F60]">Featured topics by category</h1>
                 <div className="grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-4 my-10">
                    
                         {
                            featuredData?.map(featured => <FeaturedCard key={featured.id} featured={featured}></FeaturedCard> )
                         }
                     
                 </div> 
            </div>
        </div>
    );
};

export default Featured;