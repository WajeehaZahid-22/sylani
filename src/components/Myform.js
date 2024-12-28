import React, { useState, useEffect, useRef } from "react";
import NoteForm from "./Noteform"; // Import your NoteForm component

function MYform() {
  // State to control the visibility of the NoteForm and MYform
  const [showNoteForm, setShowNoteForm] = useState(false);

  // Reference to MYform container
  const myFormRef = useRef(null);

  const handleAddNoteClick = () => {
    // Show the NoteForm and hide MYform when the button is clicked
    setShowNoteForm(true);
  };

  // Handle clicks outside of the MYform or NoteForm to hide them
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (myFormRef.current && !myFormRef.current.contains(event.target)) &&
        !event.target.closest(".note-form")
      ) {
        setShowNoteForm(false); // Hide NoteForm if click is outside
      }
    };

    // Add event listener for document clicks
    document.addEventListener("click", handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJLyzZhxLV1U6b_Uf1hfbWBebvFcdvXtnj99o2wB2UW27Boh67G2M-GSwZFhi5jPmJWo&usqp=CAU')",
      }}
    >
      {/* Conditionally render MYform */}
      {!showNoteForm && (
        <div
          ref={myFormRef} // Attach the ref here
          className="bg-green-950 bg-opacity-80 p-8 rounded-lg shadow-lg text-center max-w-sm w-full"
        >
          <h1 className="text-2xl font-bold text-white mb-4">Welcome To My Note</h1>

          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
            onClick={handleAddNoteClick} // Handle the button click
          >
            Add note
          </button>
        </div>
      )}

      {/* Show NoteForm when showNoteForm is true */}
      {showNoteForm && <NoteForm />}
    </div>
  );
}

export default MYform;
