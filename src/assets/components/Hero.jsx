import bg from "../images/bg.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
   
   <div
  className="relative h-[500px] lg:min-h-[90vh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bg})`, backgroundPositionY: -40}}
>
  <div className="absolute inset-0 bg-black/90"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white animate-fade-in">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl text-white text-center  leading-[1.2]">
          Make your Special Events Unforgettable
        </h1>

        <p className="max-w-2xl leading-[1.8] p-4 text-base md:text-lg tracking">
          We create unforgettable event experiences through stunning decorations,custom paper flowers, gift boxes, and event styling.
        </p>

       <div className="flex items-center gap-2 md:gap-8 mt-8">
        <Link
          to="/about"
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
       </div>
      </div>
    </div>
  );
}

export default Hero;
