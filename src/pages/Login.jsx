import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { googleLoginApi, LoginApi } from "../services/allApi";
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from "jwt-decode";

const Login = () => {

  const [userDetails, setuserDetails] = useState({
    username:'',
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info("Please enter complete details")
    }
    else {
      const result = await LoginApi({ email, password })
      console.log(result);

      if (result.status == 200) {          //success response
        toast.success('Login Successfull')
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)


        setTimeout(() => {
          if (result.data.existingUser.email == 'devbattleadmin@gmail.com') {
            navigate('/admin')
          }
          else {
            navigate('/home')
          }
        }, 2000)

      }
      else if (result.status == 401) {
        toast.warning(result.response.data)
        setuserDetails({
          email: "",
          password: ""
        })
      }
      else if (result.status == 404) {
        toast.warning('Account does not exist..')
        setuserDetails({
          email: "",
          password: ""
        })
      }
      else {
        toast.error('Something went wrong')
        setuserDetails({
          email: "",
          password: ""
        })
      }

    }
  }

  const handleGoogleLogin = async(credentialResponse)=>{
    const details = jwtDecode(credentialResponse.credential)
    // console.log(details);

    const result = await googleLoginApi({username:details.name,email:details.email,password:'googlepswd'})
    console.log(result);
    
    if(result.status==200){
      toast.success('Login Successfull')
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)


        setTimeout(() => {
          if (result.data.existingUser.email == 'devbattleadmin@gmail.com') {
            navigate('/admin')
          }
          else {
            navigate('/home')
          }
        }, 2000)

    }
    else if (result.status == 401) {
      toast.warning(result.response.data)
      setuserDetails({
        username: "",
        email: "",
        password: ""
      })
    } else if (result.status == 404) {
      toast.error(result.response.data)
      setuserDetails({
        username: "",
        email: "",
        password: ""
      })
    } else {
      toast.error('something went wrong')
      setuserDetails({
        username: "",
        email: "",
        password: ""
      })
    }
    
  }

  return (
    <div className="min-h-screen bg-[url('https://img.freepik.com/premium-vector/creek-forest-night-illustration-with-full-moon_104785-172.jpg?semt=ais_hybrid&w=740')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gray-900 text-white rounded-2xl shadow-[0_0_25px_2px_rgba(255,255,255,0.2)] border border-white/30 p-8 md:p-10 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>

        <form className="space-y-6">
          {/* Email */}
          <div className="relative">
            <input
              onChange={(e) => setuserDetails({ ...userDetails, email: e.target.value })}
              type="email"
              id="email"
              name="email"
              required
              value={userDetails.email}
              className="peer w-full px-4 pt-6 pb-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder=" "
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
              onChange={(e) => setuserDetails({ ...userDetails, password: e.target.value })}
              type="password"
              id="password"
              name="password"
              required
              value={userDetails.password}
              className="peer w-full px-4 pt-6 pb-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder=" "
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
            onClick={handleLogin}
            type="button"
            className="w-full py-3 bg-violet-600 hover:bg-violet-800 rounded-lg text-white font-semibold transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-700" />
          <span className="mx-4 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-700" />
        </div>

        {/* Google Login */}
        <button
          onClick={() => alert("Google login action")}
          className="w-full py-3 bg-white text-gray-800 hover:bg-gray-200 font-semibold rounded-lg flex items-center justify-center gap-2 transition duration-300"
        >
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              handleGoogleLogin(credentialResponse)
            }}
            onError={() => {
              toast.error('Login Failed');
            }}
          />

        </button>

        <p className="mt-6 text-center text-gray-500 text-sm">
          Don't have an account?{" "}
          <Link to={'/register'}>
            <span className="text-violet-400 hover:underline cursor-pointer">
              Register
            </span>
          </Link>
        </p>
      </motion.div>

      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </div>
  );
};

export default Login;
