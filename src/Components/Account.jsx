import { useState } from 'react';
import { motion } from 'framer-motion';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin
      ? 'http://localhost:5000/api/auth/login'
      : 'http://localhost:5000/api/auth/register';

    const payload = isLogin
      ? {
          email: formData.email,
          password: formData.password,
        }
      : formData;

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || 'Something went wrong');
        return;
      }

      alert(data.message || (isLogin ? 'Login Successful' : 'Registered Successfully'));
      console.log('✅ Backend response:', data);

      // Optional: Reset form
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.error('❌ Error:', err);
      alert('Server Error');
    }
  };

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
          <div className="absolute w-72 h-72 bg-pink-400/10 rounded-full -bottom-16 -right-16 blur-3xl animate-spin-slow" />
        </div>

        {/* Right Side (Form Section) */}
        <div className="p-10 bg-white">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            {isLogin ? 'Login to Your Account' : 'Create a New Account'}
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-700 focus:outline-none transition"
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-700 focus:outline-none transition"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-700 focus:outline-none transition"
            />
            {!isLogin && (
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
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

          {isLogin && (
            <p className="text-sm text-center mt-4 text-gray-600">
              Forgot your password?{' '}
              <a href="#" className="text-purple-700 font-semibold hover:underline">
                Reset
              </a>
            </p>
          )}

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
