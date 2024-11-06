import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import ReactDOM from "react-dom/client";
import Theaters from "./pages/Theaters";
import Winners from "./pages/Winners";
import AboutUs from './pages/AboutUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="winners" element={< Winners/>} />
          <Route path="theaters" element={<Theaters />} />
          <Route path="aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
