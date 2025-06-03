import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { AuthContext } from "../../../context/authContecxt";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { login, session, loading } = useContext(AuthContext);
  const email = useRef(null);
  const password = useRef(null);

  const handelSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh
    const emailAuth = email.current.value;
    const passwordAuth = password.current.value;
   
    try{
      await login(emailAuth ,passwordAuth);
      alert("login successful ")
      
    }catch(err) {
      console.error("login error :" ,err.message)
    }
    //clear the input fields
    email.current.value = "";
    password.current.value = "";
   
  };

 

  

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        {/* Login Container */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6">
          {/* Header */}
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-white mb-2"
            >
              Welcome Back
            </motion.h1>
            <p className="text-gray-400">Sign in to access your dashboard</p>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              handelSubmit(e);
            }}
            className="space-y-6"
          >
            {/* Email Field */}
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                  required
                  ref={email}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="text-gray-300 text-sm font-medium mb-2 block">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-gray-700 text-white rounded-lg pl-10 pr-12 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your password"
                  required
                  ref={password}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 focus:outline-none"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-500 rounded focus:ring-blue-500 border-gray-600 bg-gray-700"
                />
                <span className="text-gray-300">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-blue-400 hover:text-blue-300 focus:outline-none"
              >
                Forgot Password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg py-3 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all"
            >
              Sign In
            </button>
          </form>

          {/* Additional Options */}
          <div className="text-center text-gray-400 text-sm">
            <p>
              Don't have an account?{" "}
              <button className="text-blue-400 hover:text-blue-300 focus:outline-none">
                Contact Admin
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export { Login };
