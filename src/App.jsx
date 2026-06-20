import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NavBar from "./assets/components/NavBar";
import Home from "./assets/pages/Home";
import ContactUs from "./assets/pages/ContactUs";
import AboutUs from "./assets/pages/AboutUs";
import OurServices from "./assets/pages/OurServices";


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col ">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/aboutUs" element={<AboutUs/>}></Route>
            <Route path="/ourServices" element={<OurServices/>}></Route>
             <Route path="/contactUs" element={<ContactUs />} />
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
