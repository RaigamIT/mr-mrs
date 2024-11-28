import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import ReactDOM from "react-dom/client";
import Theaters from "./pages/Theaters";
import Winners from "./pages/Winners";
import Teams from './pages/AboutUs';
import ReviewUs from './pages/ReviewUs';
import WriteReview from './pages/WriteReview';
import ViewReview from './pages/ViewReview';
import TheaterList from './pages/TheaterList';
import ScrollToTop from './components/body/ScrollToTop';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
        <Routes>
            <Route index element={<Home />} />
            <Route path="winners" element={< Winners/>} />
            <Route path="theaters" element={<Theaters />} />
            <Route path="teams" element={<Teams />} />
            <Route path="reviewus" element={<ReviewUs />} />
            <Route path="writereview" element={<WriteReview />} />
            <Route path="viewreview" element={<ViewReview />} />
            <Route path="theaterlist" element={<TheaterList/>}/>
        </Routes>
      
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
