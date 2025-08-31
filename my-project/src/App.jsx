import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Pages from "./routes/Pages";
import Footer from "./components/Footer"
function App() {
  return (
    <div>
      <Navbar />
      <Pages/>
      <Footer/>
    </div>
  );
}

export default App;
