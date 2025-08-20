import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ✅ Message Box Component
const MessageBox = ({ message, type, onClose }) => {
  if (!message) return null;
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-50 flex items-center justify-between ${bgColor} text-white`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 font-bold">&times;</button>
    </motion.div>
  );
};

// ✅ Forgot Password Component
const ForgotPasswordForm = ({ onBackToLogin, showMessage }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Fake delay
      showMessage(`If an account with ${email} exists, a reset link has been sent.`, 'success');
      setEmail('');
    } catch (error) {
      showMessage('Server error. Please try again later.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="p-10 bg-white"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Reset Your Password
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-purple-700 focus:outline-none transition"
          required
        />
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>

      <p className="text-sm text-center mt-4 text-gray-600">
        Remembered your password?{' '}
        <button
          onClick={onBackToLogin}
          className="text-blue-700 font-semibold hover:underline"
        >
          Back to Login
        </button>
      </p>
    </motion.div>
  );
};

// ✅ Main Account Component
const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: 'customer',
    address: { street: '', city: '', state: '', country: '', zipCode: '' }
  });
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const [loading, setLoading] = useState(false);

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage(null);
      setMessageType(null);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddressChange = (e) => {
    setFormData(prev => ({
      ...prev,
      address: { ...prev.address, [e.target.name]: e.target.value }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const endpoint = isLogin
      ? 'http://localhost:4040/auth/login'
      : 'http://localhost:4040/auth/signup';

    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          role: formData.role,
          addresses: [formData.address],
        };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        showMessage(data.message || 'Something went wrong', 'error');
        return;
      }

      showMessage(data.message || (isLogin ? 'Login Successful' : 'Registered Successfully'), 'success');

      // Save token on login
      if (isLogin && data.jwtToken) {
        localStorage.setItem('token', data.jwtToken);
      }

      // Reset form
      setFormData({
        name: '', email: '', password: '', phone: '', role: 'customer',
        address: { street: '', city: '', state: '', country: '', zipCode: '' }
      });
      if (!isLogin) setIsLogin(true);
    } catch (err) {
      showMessage('Server Error', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-30 min-h-screen bg-white flex items-center justify-center px-4 font-inter">
      <AnimatePresence>
        <MessageBox message={message} type={messageType} onClose={() => setMessage(null)} />
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-tl-full shadow-2xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden"
      >
        {/* Left Info Section */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 to-blue-600 text-white p-10 relative overflow-hidden">
          <h2 className="text-4xl font-bold mb-3">
            {showForgotPassword ? 'Need a Reset?' : (isLogin ? 'Welcome Back!' : 'Join Us!')}
          </h2>
          <p className="text-white text-center mb-6">
            {showForgotPassword
              ? 'Enter your email to receive a password reset link.'
              : (isLogin ? "Don't have an account?" : 'Already have an account?')}
          </p>
          <button
            onClick={() => {
              if (showForgotPassword) {
                setShowForgotPassword(false);
                setIsLogin(true);
              } else {
                setIsLogin(!isLogin);
              }
              setMessage(null);
            }}
            className="bg-white text-purple-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all"
          >
            {showForgotPassword ? 'Back to Login' : (isLogin ? 'Register' : 'Login')}
          </button>
        </div>

        {/* Right Form Section */}
        <AnimatePresence mode="wait">
          {showForgotPassword ? (
            <ForgotPasswordForm
              key="forgot"
              onBackToLogin={() => setShowForgotPassword(false)}
              showMessage={showMessage}
            />
          ) : (
            <motion.div
              key="auth"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="p-10 bg-white"
            >
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                {isLogin ? 'Login to Your Account' : 'Create a New Account'}
              </h2>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {!isLogin && (
                  <>
                    <input type="text" name="name" placeholder="Full Name"
                      value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg" required />

                    <input type="text" name="phone" placeholder="Phone"
                      value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg" />

                    <select name="role" value={formData.role} onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg">
                      <option value="customer">Customer</option>
                      <option value="seller">Seller</option>
                    </select>

                    {/* Address Fields */}
                    <h3 className="font-semibold text-gray-700">Address</h3>
                    {['street','city','state','country','zipCode'].map((field) => (
                      <input key={field} type="text" name={field} placeholder={field}
                        value={formData.address[field]} onChange={handleAddressChange}
                        className="w-full px-4 py-2 border rounded-lg mb-2" />
                    ))}
                  </>
                )}

                <input type="email" name="email" placeholder="Email"
                  value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg" required />

                <input type="password" name="password" placeholder="Password"
                  value={formData.password} onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg" required />

                <button
                  type="submit"
                  className="w-full bg-purple-700 text-white py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-all"
                  disabled={loading}
                >
                  {loading ? (isLogin ? 'Logging In...' : 'Registering...') : (isLogin ? 'Login' : 'Register')}
                </button>
              </form>

              {isLogin && (
                <p className="text-sm text-center mt-4 text-gray-600">
                  Forgot your password?{' '}
                  <button
                    onClick={() => { setShowForgotPassword(true); setMessage(null); }}
                    className="text-red-700 font-semibold hover:underline"
                  >
                    Reset
                  </button>
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Account;
