import { Link } from "react-router-dom";
import bgFlower from "../images/bg-flower.jpg";
import birthday from "../images/birthday.jpg";
import { BsArrowRight } from "react-icons/bs";

function Services() {
  const Cards = [
    { id: 1, image: bgFlower, title: "Weddings" },

    { id: 2, image: birthday, title: "Birthdays" },
  ];
  return (
    <section className="px-[16px] md:px-[60px] lg:px-[100px] py-[50px] md:py-[100px] bg-[var(--main-color)] h-full">
      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
        {/* text  */}
        <div className="flex flex-col w-full lg:w-[40%] lg:order-2 text-center lg:text-start">
          <div>
            <p className="text-[var(--tertiary-color)] uppercase font-medium tracking-widest text-sm md:text-lg">
              Our Services
            </p>

            <p className="text-sm md:text-base leading-[1.8] text-gray-200 mt-4 text-justify">
              At Toriah Daisy Events, we specialize in transforming ordinary
              spaces into extraordinary experiences. From intimate celebrations
              to grand occasions, we create beautiful event decorations tailored
              to your unique style and vision.
            </p>
          </div>

          <Link
            to="/"
            className="hidden lg:inline-flex mt-4 items-center gap-2 text-gray-100 text-sm hover:text-md hover:text-md hover:font-semibold transition-all duration-300 ease-in-out text-gray-100 hover:text-[var(--tertiary-color)]"
          >
            See more <BsArrowRight className="size-3" />
          </Link>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-[60%] lg:order-1 ">
          {Cards.map((card) => (
            <Link
              to="/services"
              key={card.id}
              className="group flex flex-col h-full items-center justify-between overflow-hidden transition-all duration-500 hover:-translate-y-2 animate-fadeUp"
            >
              {/* image */}
              <div className="relative w-full overflow-hidden rounded-2xl ">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-[260px] transition-all duration-300 group-hover:scale-[1.02] hover:-translate-y-2 hover:shadow-xl"
                />

                {/* overlay on sm and large screen */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-all duration-300"></div>

                <div className="lg:hidden absolute inset-0 bg-black/50 transition-all duration-300"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-lg p-4 lg:hidden z-10">
                  <span className="text-white uppercase text-lg font-medium">
                    {card.title}
                  </span>
                </div>
              </div>

              {/* card title on lg screen */}

              <div className="mt-4 hidden lg:flex group-hover:scale-[1.04] py-2">
                <span className="relative uppercase text-sm inline-block transition-all duration-300 text-[var(--by)] tracking-widest py-2">
                  {/* top line */}
                  <span className="absolute left-0 w-full -top-1 h-[2px] bg-[var(--by)] group-hover:bg-[var(--tertiary-color)] opacity-100 transition-all duration-300"></span>

                  {card.title}

                  {/* bottom line */}
                  <span className="absolute left-0 -bottom-0 w-full h-[2px] bg-[var(--by)] group-hover:bg-[var(--tertiary-color)] opacity-100 transition-all duration-300"></span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* mobile link to see more */}
        <Link
          to="/gallery"
          className="inline-flex lg:hidden justify-center mt-2 items-center gap-2 text-gray-100 text-sm md:text-base hover:text-md hover:text-md hover:font-semibold transition-all duration-300 ease-in-out text-gray-100 hover:text-[var(--tertiary-color)] hover:-translate-y-2"
        >
          See more <BsArrowRight className="size-3" />
        </Link>
      </div>
    </section>
  );
}

export default Services;
