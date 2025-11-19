"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    FaShieldAlt,
    FaLightbulb,
    FaUsers,
    FaLinkedin,
    FaUserTie,
    FaComments,
    FaClock,
    FaExpand,
    FaHeadset
} from 'react-icons/fa';

const AboutPage = () => {
    const features = [
        {
            id: 1,
            title: "Experienced Professionals",
            description: "Skilled engineers with years of technical expertise",
            icon: <FaUserTie className="w-6 h-6" />
        },
        {
            id: 2,
            title: "Quality & Reliability",
            description: "Secure, high-performance, and reliable solutions",
            icon: <FaShieldAlt className="w-6 h-6" />
        },
        {
            id: 3,
            title: "Transparent Communication",
            description: "Clear, honest, and consistent updates through the project",
            icon: <FaComments className="w-6 h-6" />
        },
        {
            id: 4,
            title: "On-Time Delivery",
            description: "Efficient workflow ensuring timely delivery",
            icon: <FaClock className="w-6 h-6" />
        },
        {
            id: 5,
            title: "Scalable Solutions",
            description: "Systems designed to grow with business needs",
            icon: <FaExpand className="w-6 h-6" />
        },
        {
            id: 6,
            title: "End-to-End Support",
            description: "Support from planning to deployment and maintenance",
            icon: <FaHeadset className="w-6 h-6" />
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94] // cubic-bezier equivalent for "easeOutQuad"
            }}
            className="min-h-screen bg-[#f3f3f2]"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20  pt-24">

                {/* Hero Section */}
                    <section className="my-5">
                        <div className="min-h-[400px] flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4"
                            style={{ backgroundImage: 'linear-gradient(rgba(16, 25, 34, 0.6) 0%, rgba(16, 25, 34, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-WpGh7LP0sD1AkniH5KYpdPNRdgjJgRGJh-3Woi0rYJYus8ylsTN_PMqW44hrpHE6tce3T6EGzZbrPQcwpi72R9CwiG-8zam0zQztyxZ_oOLNX5c57d_w0Tf4ckDd-c6ZjEBm1iIXPvtE0s_lPtkD_FVhEaA8FRNDlrnROFEfC_Z3R-bhSGVg-A-wQtA87OB-YMkquY7U4lLFnj2w2JMuNCuGkfSYalnk22UgZbgNJYyEKkaMMcMG8_qVMHWg9jSL9ugNPVOstLQ")' }}>
                            <div className="flex flex-col gap-2 text-center">
                                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                                    Driving Innovation Through Technology
                                </h1>
                                <h2 className="text-gray-200 text-sm font-normal leading-normal md:text-base max-w-2xl mx-auto">
                                    We are a team of passionate experts dedicated to providing cutting-edge IT solutions that empower your business to thrive in the digital age.
                                </h2>
                            </div>
                        </div>
                    </section>

                {/* Why choose us */}
                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-[#4a4a43] mb-4">
                                Why Choose Us
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Our team blends strategy, engineering, and design to deliver scalable and future-ready solutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="p-6 rounded-xl border border-gray-200 bg-white hover:bg-[#f3f3f2] hover:shadow-lg hover:border-gray-500 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="flex flex-col items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12  rounded-lg flex items-center justify-center text-[#4a4a43]">
                                            {feature.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold text-[#4a4a43] mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div> 
                    </div>
                </section>

                {/* Team Section */}
                {/* <section className="text-center">
                    <h2 className="text-[#4a4a43] text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Meet Our Experts</h2>
                    <p className="text-gray-500 px-4 pb-8 max-w-2xl mx-auto">Our team is composed of seasoned professionals with diverse expertise, dedicated to delivering exceptional results and driving your success.</p>
                </section> */}

                {/* Team Grid */}
               

                {/* CTA Section */}
                <section className="mt-16 pb-16 p-10  rounded-xl text-center">
                    <h2 className="text-3xl font-bold text-[#4a4a43] mb-2">Ready to Work With Us?</h2>
                    <p className="text-gray-500 mb-6 max-w-xl mx-auto">Let's work together to build the future of your business. Contact us to learn how our solutions can help you achieve your goals.</p>
                    <Link href="/services">
                        <button className="bg-[#4a4a43] flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:bg-[#3a3a33] transition-colors">
                            <span className="truncate">Explore Our Services</span>
                        </button>
                    </Link>
                </section>

            </div>
        </motion.div>
    );
};

export default AboutPage;




