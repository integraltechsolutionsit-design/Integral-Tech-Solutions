"use client";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import ContactForm from "../_components/ContactForm";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#f3f3f2] pt-24"
    >
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Page Heading */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#4a4a43] tracking-tighter md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
            Fill out the form below, and our expert team will get back to you
            within 24 hours.
          </p>
        </div>

        {/* Main Section: Form and Info */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column: Contact Form */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-1 md:gap-16 bg--300">
            {/* Left Column: Contact Form */}
           <ContactForm/>
          </div>

          {/* Right Column: Contact Info & Map */}
          <div className="flex flex-col gap-8">
            {/* Contact Information Card */}
            <div className="rounded-xl  hover:shadow-xl shadow border-gray-200 bg-white p-6">
              <h3 className="text-lg font-bold text-[#4a4a43] mb-4">
                Contact Information
              </h3>
              <div className="space-y-4 text-gray-500">
                <div className="flex items-start gap-4">
                  <FiMapPin className="text-primary mt-1" size={24} />
                  <p>
                    Sector 28/ Plot 299 Pradhikaran 
                    <br />
                    Nigdi Pune -411044
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <FiPhone className="text-primary mt-1" size={24} />
                  <p>+91 9850799482</p>
                </div>

                <div className="flex items-start gap-4">
                  <FiMail className="text-primary mt-1" size={24} />
                  <p>integraltechsolutions.it@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden aspect-[16/9] border border-gray-200">
              <iframe
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.1210712519633!2d73.76632627609109!3d18.658562264942912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b93213084973%3A0x61cebb5002b5341e!2sgayatrree%20Veg%20Restaurant!5e0!3m2!1sen!2sin!4v1763233535928!5m2!1sen!2sin"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
