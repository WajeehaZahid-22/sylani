import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./login"; 
import Register from "./Register"; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const loginFormRef = useRef(null);
  const registerFormRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close Login Form when clicking outside
  const handleClickOutside = (e) => {
    if (loginFormRef.current && !loginFormRef.current.contains(e.target)) {
      setShowLoginForm(false);
    }
    if (registerFormRef.current && !registerFormRef.current.contains(e.target)) {
      setShowRegisterForm(false);
    }
  };

  const openLoginForm = () => setShowLoginForm(true);
  const closeLoginForm = () => setShowLoginForm(false);
  const openRegisterForm = () => setShowRegisterForm(true);
  const closeRegisterForm = () => setShowRegisterForm(false);

  // Attach click event to the document when the form is open
  useEffect(() => {
    if (showLoginForm || showRegisterForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showLoginForm, showRegisterForm]);

  // Check if token exists in localStorage to determine if user is logged in
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");


  return (
    <div>
      {/* Navbar */}
      <nav className="bg-green-600 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div>
              <Link to="/">
                <img
                  src="/imgs/logo_saylaniwelfare.22bf709605809177256c.png"
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Links */}
            <div className="hidden md:flex space-x-8">
           
              <Link to="/dashboard" className="text-white hover:underline">
                Dashboard
              </Link>
              <Link to="/CreateNote" className="text-white hover:underline">
                Create Note
              </Link>
              <div className="relative group">
                <span className="text-white hover:underline cursor-pointer">
                  Subjects
                </span>
                <div className="absolute hidden group-hover:block bg-white text-black rounded-md shadow-lg mt-2">
                  <Link
                    to="/subjects/math"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Math
                  </Link>
                  <Link
                    to="/subjects/science"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Science
                  </Link>
                  <Link
                    to="/subjects/english"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    English
                  </Link>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {!token ? (
                <>
                  <button
                    className="px-4 py-2 bg-white text-green-600 rounded-full hover:bg-gray-100"
                    onClick={openLoginForm}
                  >
                    Login
                  </button>
                  <button
                    className="px-4 py-2 bg-white text-green-600 rounded-full hover:bg-gray-100"
                    onClick={openRegisterForm}
                  >
                    Register
                  </button>
                </>
              ) : (
                <div className="relative group">
                  <img
                    src="/imgs/9815472.png"
                    alt="Profile"
                    className="h-8 w-8 rounded-full cursor-pointer"
                  />
                  <h1>{name}</h1>
                  <div className="absolute hidden group-hover:block bg-white text-black rounded-md shadow-lg mt-2">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/my-notes"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      My Notes
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Settings
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                      onClick={() => {
                        localStorage.removeItem("token");
                        window.location.reload();
                      }}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-green-600 text-white py-4 space-y-4 text-center">
              <Link to="/dashboard" className="block">
                Dashboard
              </Link>
              <Link to="/Create Note" className="block">
                Create Note
              </Link>
              <div>
                <span className="block">Subjects</span>
                <div className="pl-4">
                  <Link to="/subjects/math" className="block">
                    Math
                  </Link>
                  <Link to="/subjects/science" className="block">
                    Science
                  </Link>
                  <Link to="/subjects/english" className="block">
                    English
                  </Link>
                </div>
              </div>
              {!token ? (
                <>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                    onClick={openLoginForm}
                  >
                    Login
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                    onClick={openRegisterForm}
                  >
                    Register
                  </button>
                </>
              ) : (
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-700"
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      {showLoginForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={loginFormRef}
            className="relative w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
          >
            <Login closeLoginForm={closeLoginForm} />
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={closeLoginForm}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegisterForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={registerFormRef}
            className="relative w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
          >
            <Register closeRegisterForm={closeRegisterForm} openLoginForm={openLoginForm} />
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={closeRegisterForm}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
