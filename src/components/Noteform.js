import React, { useState } from "react";

function NoteForm() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    subject: "",
    createdBy: "",
    lastEditedBy: "",
    collaborators: "",
  });

  const [alert, setAlert] = useState({ type: "", message: "" });
  const [showForm, setShowForm] = useState(true); // State to control form visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/note/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setAlert({ type: "success", message: "Note saved successfully!" });
        setFormData({
          title: "",
          content: "",
          subject: "",
          createdBy: "",
          lastEditedBy: "",
          collaborators: "",
        });

        // Allow form disappearance after success
        setTimeout(() => {
          setShowForm(false);
        }, 2000);
      } else {
        setAlert({ type: "error", message: "Failed to save note. Try again." });
      }
    } catch (error) {
      setAlert({ type: "error", message: "Error connecting to the server." });
    }
  };

  return (
    <div
      className="bg-cover bg-center flex items-center justify-center px-6 py-12"
      style={{
        backgroundImage: "url('https://example.com/your-background-image.jpg')",
      }}
    >
      {showForm && (
        <div
          className="max-w-lg w-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 rounded-lg shadow-xl p-6"
        >
          <h2 className="text-3xl font-extrabold text-center text-white mb-4">
            Create a Note
          </h2>

          {alert.message && (
            <div
              className={`p-4 mb-4 rounded-lg text-white ${
                alert.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {alert.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-white mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Content */}
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-white mb-1"
              >
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            {/* Subject Dropdown */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-white mb-1"
              >
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
                <option value="English">English</option>
              </select>
            </div>

            {/* Created By */}
            <div>
              <label
                htmlFor="createdBy"
                className="block text-sm font-medium text-white mb-1"
              >
                Created By
              </label>
              <input
                type="text"
                id="createdBy"
                name="createdBy"
                value={formData.createdBy}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Last Edited By */}
            <div>
              <label
                htmlFor="lastEditedBy"
                className="block text-sm font-medium text-white mb-1"
              >
                Last Edited By
              </label>
              <input
                type="text"
                id="lastEditedBy"
                name="lastEditedBy"
                value={formData.lastEditedBy}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Collaborators */}
            <div>
              <label
                htmlFor="collaborators"
                className="block text-sm font-medium text-white mb-1"
              >
                Collaborators (comma-separated)
              </label>
              <input
                type="text"
                id="collaborators"
                name="collaborators"
                value={formData.collaborators}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default NoteForm;
