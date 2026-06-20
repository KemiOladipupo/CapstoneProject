import aboutImg from "../images/proposal.jpg";

function About() {
  return (
    <>
      <section className="px-[16px] md:px-[60px] lg:px-[100px] py-[50px] md:py-[100px] bg-[var(--by)]">
        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
         {/* Text */}
          <div className="text-center lg:text-start">
            <p className="text-[var(--tertiary-color)] uppercase font-medium tracking-widest text-sm md:text-lg lg:text-xl">
              About Us
            </p>
            

            <h1 className="text-xl md:text-4xl lg:text-6xl font-semibold uppercase leading-tight  mt-4 text-[var(--textColor)]">
              Redefining Event Decoration
            </h1>

            <p className="text-base leading-[1.8] text-gray-700 mt-4 text-justify">
              At Toriah Daisy Events, we specialize in transforming ordinary
              spaces into extraordinary experiences. From intimate celebrations
              to grand occasions, we create beautiful event decorations tailored
              to your unique style and vision. Our attention to detail,
              creativity, and commitment to excellence ensure that every event
              becomes a memorable experience.
            </p>
          </div>

          <img
            src={aboutImg}
            alt="About Toriah Daisy Events"
            className="w-full h-full sm:h-[300px] md:h-[500px] lg:h-[450px] object-cover rounded-2xl shadow-md"
          />
        </div>
      </section>
    </>
  );
}
export default About;
