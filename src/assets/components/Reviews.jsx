import { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import userMan from "../images/user-man.jpg";
import daisy from "../images/daisy.jpg";
import { motion } from "framer-motion";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const data = {
      reviews: [
        {
          id: 1,
          name: "Mrs Bello",
          text: "The decoration for my wedding was absolutely stunning. Everything was perfect!",
          rating: 5,
          image: user1,
          variant: "default",
        },
        {
          id: 2,
          name: "Mr & Mrs Ade",
          text: "Very professional service. Our event looked magical and well-coordinated.",
          rating: 5,
          image: userMan,
          variant: "default",
        },
        {
          id: 3,
          name: "Miss Chika",
          text: "Beautiful setup for my birthday. I absolutely loved every detail!",
          rating: 4,
          image: user2,
          variant: "default",
        },
        {
          id: 4,
          name: "Miss Naomi",
          text: "Beautiful setup for my mum's birthday. Toriah is very detailed and thorough",
          rating: 4,
          image: user3,
          variant: "default",
        },
      ],
    };

    setReviews(data.reviews);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat px-[16px] md:px-[60px] lg:px-[100px] py-[50px] md:py-[100px]"
      style={{ backgroundImage: `url(${daisy})` }}
    >
      <div className="absolute inset-0 bg-[var(--textColor)]/70"></div>
      <div className="max-w-6xl mx-auto flex flex-col gap-10 ">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center space-y-3 z-10"
        >
          <p className="text-[var(--tertiary-color)] uppercase tracking-widest text-sm md:text-lg font-medium z-10">
            Testimonials
          </p>

          <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold uppercase leading-tight text-[var(--by)]">
            What Our Clients Say
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base">
            Real experiences from clients who trusted us to bring their events
            to life.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 md:place-self-center">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay:0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`group relative flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-xl md:max-w-[400px]
              ${
                review.variant === "purple"
                  ? "bg-[var(--main-color)] text-white"
                  : "bg-white text-[var(--textColor)] border-[var(--main-color)]"
              } animate-fadeUp`}
              style={{
                animationDelay: 500,
              }}
            >
              {/* image */}
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover mb-3 z-10"
              />

              {/* stars */}
              <div className="flex gap-1 text-[var(--tertiary-color)] z-10">
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <BsStarFill key={i} />
                  ))}
              </div>

              {/* TEXT */}
              <p
                className={`mt-4 text-sm leading-[1.6] z-10 ${
                  review.variant === "purple"
                    ? "text-gray-200"
                    : "text-gray-500"
                }`}
              >
                {review.text}
              </p>

              {/* NAME */}
              <h3 className="mt-4 font-semibold text-lg z-10">{review.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Reviews;
