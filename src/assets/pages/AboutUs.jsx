import Footer from "../components/Footer";
import bg from "../images/bgT.avif";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative h-[500px] min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat px-[16px] md:px-[60px] lg:px-[100px]"
        style={{ backgroundImage: `url(${bg})`, backgroundPositionY: -40 }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-[1.2]"
          >
            Crafting beautiful moments, one detail at a time.
          </motion.h1>

          <p className="mt-4 text-gray-200 max-w-2xl text-sm md:text-base">
            Where creativity meets elegance to bring unforgettable event experiences to life.
          </p>
        </motion.div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          Toriah Daisy Events is a creative event styling brand dedicated to transforming ordinary spaces into beautifully curated experiences.
          We design with intention — blending creativity, elegance, and emotion to reflect every client’s unique story.
        </p>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            What began as a passion for beautiful details has grown into a brand committed to making celebrations more meaningful and visually unforgettable.
            Every setup we create is guided by care, creativity, and a deep love for celebration.
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">What We Do</h2>

        <ul className="space-y-3 text-gray-600">
          <li>🌸 Event decoration & styling</li>
          <li>🌸 Custom themed setups</li>
          <li>🌸 Paper flowers & handcrafted decor elements</li>
          <li>🌸 Gift styling & presentation design</li>
          <li>🌸 Personalized event aesthetics</li>
        </ul>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 text-center bg-gradient-to-r from-purple-200 to-pink-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900">
            Let’s bring your vision to life 🌸
          </h2>

          <p className="mt-2 text-gray-700">
            Beautiful moments begin with thoughtful design — and we’re here to create them with you.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-6 bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutUs;