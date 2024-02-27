import { NavLink } from 'react-router-dom';
import loginBanner  from '../../assets/login-bg.png'
import logo from '../../assets/logo.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Register = () => {
    const {createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] =useState('')
    const [success, setSuccess] =useState('')
    useEffect(() => {
      AOS.init();
    },[])
 


    const handleRegister = e => {
        e.preventDefault()
        // const name = e.target.name.value  or
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        const checked = e.target.terms.checked
        // console.log(name, email, password);
         
             // reset error
           setRegisterError('')
          setSuccess('')


          // pasword validation
          if(password.length < 6){
            setRegisterError('password length must be 6 charecter')
            return
          }else if(!/[A-Z]/.test(password)){
             setRegisterError(' do not have a capital letter')
             return
          } else if(!/[(?=.*[!@#$%^&*()_+)]/.test(password)){
             setRegisterError(' don not have a special character')
             return
          }
          else if(!checked){
            setRegisterError('Please accept our terms and conditions')
            return
          }



        // create user with email pasword
        createUser(email, password)
        .then((result) => {
            setSuccess('user Create successfully')
            toast('User create Successfull')
            console.log(result.user)
          })
           .catch(error => {
            setRegisterError(error.message)
           })
    }




    return (
        <div className=' grid grid-cols-1 py-7 md:grid-cols-2' data-aos="zoom-out">
            {/* left content*/}
            <div className='hidden md:block'>
               <img className='h-screen object-cover' src={loginBanner} alt="" />
            </div>
            {/* right content */}
            <div className='w-full lg:max-w-[70%] mt-8 md:mt-12 px-5 lg:px-0 mx-auto'>
               <div className='flex justify-center md:justify-start'>
                   <img className='w-[170px] md:w-[200px] ' src={logo} alt="" />
               </div>
                <h2 className='text-3xl mt-2 font-heebo text-center md:text-start font-bold text-[#072f60]'>Create an account</h2>
                <p className='text-[#666666] bg text-lg font-medium font-heebo'>Setup a new account in a minute.</p>
                <div>
                   <form onSubmit={handleRegister}>
                   <input
                     className='bg-gray-200 outline-none border-0 px-4 py-2 w-full mt-6 lg:w-[90%]'
                     type="text" name="name" id="" placeholder='Name' required
                    />
                    <input
                     className='bg-gray-200 outline-none border-0 px-4 py-2 w-full mt-6 lg:w-[90%]'
                     type="email" name="email" id="" placeholder='Email' required
                    />
                    <input
                     className='bg-gray-200 outline-none border-0 px-4 py-2 w-full mt-6 lg:w-[90%]'
                     type="password" name="password" id="" placeholder='Password' required
                    />
                    <div className='flex items-center mt-4'>
                    <input className='mr-2' type="checkbox" name="terms" id="terms" />
                        <span className='font-semibold font-heebo'><p >Accept terms and contitions</p></span>
                        </div>
                    <button className="btn border-none w-full lg:w-[90%]  text-[#072f60] hover:text-[#3bbca7]  hover:bg-[#072f60] btn-primary bg-[#3bbca7] mt-7">Register</button>
                    <ToastContainer />
                   </form>
                   
                   



                 {/* show error and success text */}
                   {
                     registerError && <a className="text-red-600">{registerError}</a>
                   }
                   {
                      success && <a className="text-green-500">{success}</a>
                   }

                  {/*other login ======> facbook twiter google login */}
                  <div className='mt-5 text-center w-full lg:w-[90%]'>
                   <p className='text-base font-heebo'>or login with</p>
                  </div>
                   <div className='mt-6 flex  justify-center md:justify-start'>
                        <button className="py-1 mr-4 px-6 text-bold font-heebo duration-100 border border-[#072f60] text-[#072f60] hover:bg-[#072f60]  hover:text-[#3bbca7] ">Google</button>
                        <button className="py-1 mr-4 px-6 text-bold font-heebo duration-100 border border-[#072f60] text-[#072f60] hover:bg-[#072f60]  hover:text-[#3bbca7] ">Facebook</button>
                        <button className="py-1 px-7 text-bold font-heebo duration-100 border border-[#072f60] text-[#072f60] hover:bg-[#072f60]  hover:text-[#3bbca7] ">GitHub</button>
                    </div>
                    <div className='mt-7 text-center md:text-start'>
                        <p className='text-base font-heebo'>Already have an account? 
                        <NavLink className="text-base text-[#3bbca7]  font-heebo font-medium" to={'/login'}>Login Here</NavLink>
                        </p>
                    </div>
               </div>
            </div>
        </div>
    );
};

export default Register;