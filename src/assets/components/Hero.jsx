import bg from "../images/table.avif";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div
      className="relative h-[500px] lg:min-h-[90vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white animate-fade-in"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl text-white text-center leading-[1.2]"
        >
          Make your Special Events Unforgettable
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl leading-[1.8] p-4 text-base md:text-lg tracking"
        >
          We create unforgettable event experiences through stunning
          decorations,custom paper flowers, gift boxes, and event styling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-2 md:gap-8 mt-8"
        >
          <Link
            to="/aboutUs"
            className=" bg-[var(--main-color)] text-sm font-semibold px-[20px] md:px-[40px] py-[10px] rounded-lg hover:scale-105 hover:bg-[var(--tertiary-color)] transition-all delay-1 duration-300 ease-in-out"
          >
            Learn More
          </Link>
          <Link
            to="/gallery"
            className=" bg-white text-[var(--main-color)] text-sm font-semibold px-[20px] md:px-[40px] py-[10px] rounded-lg hover:scale-105 hover:text-white hover:bg-[var(--tertiary-color)] transition-all delay-1 duration-300 ease-in-out"
          >
            View Gallery
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
