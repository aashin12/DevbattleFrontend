import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { registerApi } from "../services/allApi";

const Register = () => {

  const [userDetails,setuserDetails] = useState({
    username:"",
    email:"",
    password:""
  })

  const navigate = useNavigate()

  console.log(userDetails);

  const handleRegister = async()=>{
    
    const {username,email,password} = userDetails

    if(!username || !email || !password){
      toast.info('Please fill the details')
    }
    else{
      const result = await registerApi({username,email,password})
      console.log(result);
      if(result.status == 200){
        toast.success("Register Successfull")
        setuserDetails({
          username:"",
          email:"",
          password:""
        })
        setTimeout(()=>{
          navigate('/login')
        },2000)
        
      }
      else if(result.status == 409){
       toast.warning(result.response.data)
       setuserDetails({
          username:"",
          email:"",
          password:""
       })
      }
      else{
        toast.error('Something went wrong')
        setuserDetails({
          username:"",
          email:"",
          password:""
       })
      }
      
    }
    
  }
  
  return (
    <>
    <div className="min-h-screen bg-[url('https://wallpaper.forfun.com/fetch/d1/d197f3d63e273b6f5c105412b799eae6.jpeg')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gray-900 text-white rounded-2xl shadow-[0_0_25px_2px_rgba(255,255,255,0.2)] border border-white/30 p-8 md:p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Create Account</h2>

        <form className="space-y-6">
          {/* Username */}
          <div className="relative">
            <input
              type="text"
              id="username"
              name="username"
              required
              className="peer w-full px-4 pt-6 pb-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder=" "
              onChange={(e)=>setuserDetails({...userDetails,username:e.target.value})}
            />
            <label
              htmlFor="username"
              className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-violet-400"
            >
              Username
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              className="peer w-full px-4 pt-6 pb-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder=" "
              onChange={(e)=>setuserDetails({...userDetails,email:e.target.value})}
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-violet-400"
            >
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              required
              className="peer w-full px-4 pt-6 pb-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder=" "
              onChange={(e)=>setuserDetails({...userDetails,password:e.target.value})}
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-violet-400"
            >
              Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            type='button'
            onClick={handleRegister}
            className="w-full py-3 bg-violet-600 hover:bg-violet-800 rounded-lg text-white font-semibold transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <Link to={'/login'}>
            <span className="text-violet-400 hover:underline cursor-pointer">
              Login
            </span>
          </Link>
        </p>
      </motion.div>
    </div>

    <ToastContainer theme="colored" position="top-center" autoClose={1500}/>
    </>
  );
};

export default Register;
