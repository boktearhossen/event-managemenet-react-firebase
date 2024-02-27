import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Courses from "../../components/Courses/Courses";
import Featured from "../../components/Featured/Featured";
import Instractor from "../../components/Instractor/Instractor";


const Home = () => {

    const courses = useLoaderData()
//   console.log(courses);

    return (
        <div>
           <Banner></Banner>
           <Courses courses={courses}></Courses>
           <Featured></Featured>
           <Instractor></Instractor>
        </div>
    );
};

export default Home;