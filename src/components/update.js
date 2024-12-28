import React from "react";

function MYform() {
  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJLyzZhxLV1U6b_Uf1hfbWBebvFcdvXtnj99o2wB2UW27Boh67G2M-GSwZFhi5jPmJWo&usqp=CAU')",
        }}
      >
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
          {/* Update Button */}
          <button
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300 mb-4 w-full"
          >
            Update
          </button>

          {/* Delete Button */}
          <button
            className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300 w-full"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default MYform;
