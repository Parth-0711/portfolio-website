import React from 'react'
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setMessage("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      setMessage("Failed to send message.");
    }

    setLoading(false);
  };

  return (
  <section id="contact" className="py-28">
    <SectionWrapper>

      <div className="max-w-4xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
          Contact Me
        </h2>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          ref={form}
          onSubmit={sendEmail}
          className="
            bg-white
            shadow-lg
            rounded-3xl
            p-10
          "
        >

          <div className="mb-5">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-5
                py-4
                focus:outline-none
                focus:ring-2
                focus:ring-green-400
              "
            />
          </div>

          <div className="mb-5">
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-5
                py-4
                focus:outline-none
                focus:ring-2
                focus:ring-green-400
              "
            />
          </div>

          <div className="mb-5">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-5
                py-4
                focus:outline-none
                focus:ring-2
                focus:ring-green-400
              "
            />
          </div>

          <div className="mb-6">
            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              required
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-5
                py-4
                focus:outline-none
                focus:ring-2
                focus:ring-green-400
              "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-green-500
              text-white
              py-4
              rounded-xl
              font-semibold
              hover:bg-green-600
              transition
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {message && (
            <p className="mt-5 text-center text-green-700 font-medium">
              {message}
            </p>
          )}

        </motion.form>

      </div>

    </SectionWrapper>
  </section>
);
};

export default Contact;
