import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar";

import Dashboard from "./components/Dashboard";
import CreateNote from "./components/CreateNote";
import Subjects from "./components/Subjects";
function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
       
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/CreateNote" element={<CreateNote />} />
          <Route path="/Subjects" element={<Subjects />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
