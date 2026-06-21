import { BsInstagram, BsTelephone, BsEnvelope } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Enter a valid email";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.eventType) newErrors.eventType = "Select an event type";
    if (!form.message.trim()) newErrors.message = "Tell us about your event";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Submitted:", form);
    }
  };

  const contacts = [
    {
      id: 1,
      icon: BsEnvelope,
      text: "toriahdaisy.events@gmail.com",
    },
    {
      id: 2,
      icon: BsTelephone,
      text: "+2347010101010",
    },
    {
      id: 3,
      icon: FaWhatsapp,
      text: "Chat with us on WhatsApp",
    },
    {
      id: 4,
      icon: BsInstagram,
      text: "@toriahdaisy_events",
    },
  ];

  return (
    <motion.section 
    initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="px-[16px] md:px-[60px] lg:px-[100px] py-[50px] md:py-[100px] bg-[var(--by)]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* LEFT SIDE */}
        <motion.div 
        initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        className="flex flex-col lg:text-start">
          <p className="text-[var(--tertiary-color)] uppercase font-medium tracking-widest text-sm md:text-lg lg:text-xl text-center lg:text-start">
            Contact Us
          </p>

          <h1 className="text-xl md:text-4xl lg:text-6xl font-semibold uppercase leading-tight  mt-4 text-[var(--textColor)] text-center lg:text-start">
            Let's talk today
          </h1>

          <p className="text-base leading-[1.8] text-gray-500 mt-4 text-justify">
            Have an event coming up? Weddings, birthdays, proposals, or special
            celebrations,  we are here to
            bring your vision to life with elegance and creativity.
          </p>
          <div className="flex flex-col gap-4 mt-6 text-gray-500 justify-center item-center">
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.id}
              initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: item * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
              className="flex items-center gap-3">
                <Icon className="text-sm lg:text-lg text-[var(--tertiary-color)]" />
                <p className="text-sm md:text-base cursor-pointer hover:text-[var(--tertiary-color)]">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
        </motion.div>
        

        {/* form card */}
        <motion.div 
        initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        className="w-full max-w-[500px] mx-auto lg:mx-0 bg-white rounded-xl p-5 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-3 text-gray-600">
            {/* Name */}
            <div>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                className={`w-full border rounded-md p-2.5 outline-none transition
                ${errors.name ? "border-red-500" : "border-gray-100 focus:border-[var(--tertiary-color)]"} text-sm`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`w-full border rounded-md p-2.5 outline-none transition
                ${errors.email ? "border-red-500" : "border-gray-100 focus:border-[var(--tertiary-color)]"} text-gray-400 text-sm`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className={`w-full border rounded-md p-2.5 outline-none transition
                ${errors.phone ? "border-red-500" : "border-gray-100 focus:border-[var(--tertiary-color)]"} text-gray-400 text-sm`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Event Type */}
            <div>
              <select
                name="eventType"
                value={form.eventType}
                onChange={handleChange}
                className={`w-full border rounded-md p-2.5 outline-none transition
                ${errors.eventType ? "border-red-500" : "border-gray-100 focus:border-[var(--tertiary-color)]"} text-gray-400 text-sm `}
              >
                <option value="">Select Event Type</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday</option>
                <option value="corporate">Corporate Event</option>
                <option value="proposal">Proposal</option>
              </select>
              {errors.eventType && (
                <p className="text-red-500 text-xs mt-1">{errors.eventType}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your event..."
                className={`w-full border rounded-md p-2.5 outline-none resize-none transition
                ${errors.message ? "border-red-500" : "border-gray-100 focus:border-[var(--tertiary-color)]"} text-gray-400 text-sm`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[var(--main-color)] text-white text-sm p-3 rounded-md transition font-medium hover:bg-[var(--tertiary-color)] transition-all delay-1 duration-300 ease-in-out"
            >
              Submit Request
            </button>
           
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Contact;
