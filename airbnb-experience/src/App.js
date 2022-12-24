import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header"; 
import MainContent from "./components/MainContent";

export default function App() {
  return(
    <div>
      <Navbar />
      <Header />
      <MainContent />
    </div>
  )
}