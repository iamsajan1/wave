import Section from "./Section";
import Heading from "./Heading";
import { Gradient } from "./design/Services";

import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactMe = () => {
  return (
    <Section id="ContactMe">
      <div className="container">
        <Heading
          title="Feel Free to Contact Me"
          text="I am always available for you. You can contact me anytime."
        />

        <div className="relative">
          <div className="relative z-1 flex flex-col lg:flex-row items-center h-auto mb-5 p-6 sm:p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            {/* Left Side - Image */}
            <div className="w-full lg:w-1/2">
              <img
                className="w-full h-auto rounded-2xl"
                width={500}
                height={730}
                alt="User Image"
                src="/Santosh.jpeg"
              />
            </div>

            {/* Right Side - Contact Form */}
            <div className="relative z-1 w-full lg:w-1/2 p-4 sm:p-6 bg-n-8 rounded-2xl shadow-lg mt-6 lg:mt-0">
              <form className="w-full">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 mb-4 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 mb-4 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 mb-4 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full p-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-80 transition"
                >
                  Send Message
                </button>

                {/* Contact Options Below Form */}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 text-center mt-4">
                  {/* Call Me */}
                  <a
                    href="tel:+918957924272"
                    className="flex flex-col items-center p-3 sm:p-4 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                  >
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                    <span className="text-white mt-2 text-xs sm:text-sm">
                      Call Me
                    </span>
                  </a>

                  {/* Email Me */}
                  <a
                    href="mailto:kumarsantosh.iict06a@gmail.com"
                    className="flex flex-col items-center p-3 sm:p-4 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                  >
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                    <span className="text-white mt-2 text-xs sm:text-sm">
                      Email Me
                    </span>
                  </a>

                  {/* WhatsApp Me */}
                  <a
                    href="https://wa.me/+918957924272"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 sm:p-4 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                  >
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" />
                    <span className="text-white mt-2 text-xs sm:text-sm">
                      WhatsApp
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default ContactMe;