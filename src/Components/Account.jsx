import { useState } from 'react';
import { motion } from 'framer-motion';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-100 via-pink-100 to-blue-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      >
        {/* Left Side (Info Section - hidden on mobile) */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-800 to-black text-white p-10 relative overflow-hidden">
          <h2 className="text-4xl font-bold mb-3 tracking-wide animate-pulse">Welcome Back!</h2>
          <p className="text-gray-300 text-center mb-6">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 shadow-md"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>

          {/* Floating gradient circle */}
          <div className="absolute w-72 h-72 bg-pink-400/10 rounded-full -bottom-16 -right-16 blur-3xl animate-spin-slow" />
        </div>

        {/* Right Side (Form Section) */}
        <div className="p-10 bg-white">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            {isLogin ? 'Login to Your Account' : 'Create a New Account'}
          </h2>

          <form className="space-y-5">
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-700 focus:outline-none transition"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-700 focus:outline-none transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-700 focus:outline-none transition"
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-700 focus:outline-none transition"
              />
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white py-2 rounded-full font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>

          {/* Forgot Password */}
          {isLogin && (
            <p className="text-sm text-center mt-4 text-gray-600">
              Forgot your password?{' '}
              <a href="#" className="text-purple-700 font-semibold hover:underline">
                Reset
              </a>
            </p>
          )}

          {/* Mobile Toggle Button */}
          <div className="md:hidden text-center mt-6">
            <p className="text-gray-600 mb-2">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
            </p>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="bg-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-800 transition-all duration-300 shadow-md"
            >
              {isLogin ? 'Register' : 'Login'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Account;
