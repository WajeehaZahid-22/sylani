import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      email,
      password,
    };

    axios.post('http://localhost:5000/user/login', payload)
      .then((res) => {
        toast.success("Login successful");
        setLoading(false);
        console.log("Login Done", res.data.data);
        localStorage.setItem('token', JSON.stringify(res.data.token));
        localStorage.setItem('name', JSON.stringify(res.data.data.name));
        localStorage.setItem('email', JSON.stringify(res.data.data.email));
        localStorage.setItem('_id', JSON.stringify(res.data.data._id));




        navigate('/')
      })
      .catch((err) => {
        toast.error("Invalid credentials");
        setLoading(false);
        console.log("Error while logging in", err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-800 to-pink-600">
      <div className="relative w-full max-w-md p-6 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-30 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-300"
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
              className="mt-1 block w-full px-4 py-2 bg-white bg-opacity-30 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-300"
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
          Don't have an account? <a href="/" className="text-blue-200 underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login