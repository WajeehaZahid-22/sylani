import React, { useState } from "react";

function Student({ onClose }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000//user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      console.log("API Response:", result);
      alert("Form Submitted Successfully!");
      onClose(); // Close the form after submission
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative w-full max-w-md px-6 py-8">
        <img
          src="/imgs/logo_saylaniwelfare.22bf709605809177256c.png"
          alt="Logo"
          className="block mx-auto mb-6 max-w-[400px] bg-white rounded-2xl px-8"
        />
        <form
          onSubmit={handleSubmit}
          style={{
            background: "linear-gradient(to bottom,  #99CA3C, #0030B3)",
          }}
          className="w-full p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-3xl font-semibold text-white text-center mb-6">
            Register Form
          </h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="bg-slate-200 rounded-full px-8 py-2 w-full text-black mb-4"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-slate-200 rounded-full px-8 py-2 w-full text-black mb-4"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="bg-slate-200 rounded-full px-8 py-2 w-full text-black mb-4"
          />

          <button
            type="submit"
            className="w-full sm:w-48 bg-green-600 text-white py-3 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Student;
