import { useState } from "react";
import { BiArrowToRight } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { IoCall, IoLocation, IoLogoInstagram } from "react-icons/io5";
import { PiInstagramLogoBold, PiInstagramLogoFill } from "react-icons/pi";

function Contact() {
  const [name, setName] = useState("");
  return (
    <>
      <section className="px-[16px] md:px-[60px] lg:px-[100px] py-[50px] md:py-[100px] lg:py-[100px] bg-[var(--by)] flex flex-col items-center gap-10 ">
        <div className="flex gap-10 mx-auto">
          <div className="flex flex-col text-start">
            <p className="text-[var(--tertiary-color)] uppercase font-medium tracking-widest text-sm md:text-lg lg:text-xl">
              Contact Us
            </p>

            {/* <h1 className="text-xl md:text-4xl lg:text-6xl font-semibold uppercase leading-tighter  mt-4 text-[var(--textColor)] flex">
              Curating Memorable Experiences
            </h1> */}
            <div className="flex items-center gap-3">
              <FaInstagram className="text-3xl" />
              <p className="text-base md:text-md text-[var(--textColor)]">@toriahdaisy_events</p>
            </div>
          </div>

          <div className="bg-[var(--by)] p-6 rounded-lg w-xl place-self-center shadow-lg">
            <form action="POST">
              <div className="flex flex-col gap-2 ">
                <label htmlFor="Name" className="text-[var(--textColor)]">
                  Enter your name
                </label>
                <input
                  type="text"
                  placeholder="Your name goes here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border p-4 rounded-sm border-gray-200 "
                />
              </div>
              <div className="flex flex-col gap-2 mt-4 ">
                <label htmlFor="Name" className="text-[var(--textColor)]">
                  Your message
                </label>
                <input
                  type="text"
                  placeholder="Your message goes here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border p-4 rounded-sm border-gray-200 focus:outline-none"
                />
              </div>
              <button className="p-2 flex items-center justify-center bg-[var(--main-color)] w-full mt-10 rounded-sm text-white text-lg font-medium">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
