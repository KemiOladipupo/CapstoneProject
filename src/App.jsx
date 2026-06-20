import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NavBar from "./assets/components/NavBar";
import Home from "./assets/pages/Home";
import About from "./assets/components/About";
import Services from "./assets/components/Services";
import Testimonial from "./assets/components/Reviews";
import Contact from "./assets/components/Contact";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col ">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/gallery" element={<Home/>} ></Route>
            {/* <Route path="/services" element={<Services/>}></Route>
            <Route path="/testimonial" element={<Testimonial/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route> */}
          </Routes>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
