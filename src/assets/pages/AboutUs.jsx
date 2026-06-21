import About from "../components/About";
import Footer from "../components/Footer";
import bg from "../images/bgT.avif";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <>
      <motion.section
        className="relative h-[500px] lg:min-h-[90vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})`, backgroundPositionY: -40}}
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
            className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl text-white text-center  leading-[1.2]"
          >
            Crafting beautiful moments, one detail at a time.
          </motion.h1>

        </motion.div>

      </motion.section>
      <div>

      </div>

      
      <Footer />
    </>
  );
}
export default AboutUs;
