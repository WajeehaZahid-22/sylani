import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      name: userName,
      email,
      password,
    };

    axios.post('http://localhost:5000/user/register', payload)
      .then((res) => {
        toast.success("Registration successful");
        setLoading(false);
        console.log("User registered", res.data);
        
      })
      .catch((err) => {
        toast.error("Registration failed");
        setLoading(false);
        console.log("Error while registering", err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-blue-600">
      <div className="relative w-full max-w-md p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="userName" className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-30 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-300"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-30 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-30 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-300"
              placeholder="Enter your password"
            />
          </div>
          <button
  type="submit"
  className={`w-full py-3 px-4 font-semibold rounded-lg shadow-md focus:outline-none transition-colors ${loading ? 'bg-green-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'}`}
  disabled={loading}
>
  {loading ? 'Submitting...' : 'Sign up'}
</button>
        </form>
        <p className="text-center text-sm text-white mt-4">
          Already have an account? <a href="/login" className="text-green-200 underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Registration;