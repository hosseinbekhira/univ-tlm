import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Books from "./components/Books";
import Expo from "./components/Expo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="expo" element={<Expo />} />
        <Route path="books" element={<Books />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
