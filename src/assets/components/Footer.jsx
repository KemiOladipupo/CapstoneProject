import { useState } from "react";
import { BsInstagram, BsTelephone, BsEnvelope } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[var(--main-color)] text-white px-[16px]">
      

        {/* BOTTOM BAR */}
        <div className="p-8 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} Toriah Daisy Events. All rights reserved.
        </div>

    </footer>
  );
}

export default Footer;