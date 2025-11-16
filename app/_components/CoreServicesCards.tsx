"use client";
import { useState } from 'react';
import { 
  FaCloud, 
  FaShieldAlt, 
  FaCogs, 
  FaCode, 
  FaNetworkWired, 
  FaComments 
} from 'react-icons/fa';
import { motion } from "framer-motion";

const CoreServicesCards = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    { id: 'all', label: 'All Services' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'security', label: 'Security' },
    { id: 'managed', label: 'Managed IT' },
    { id: 'development', label: 'Development' },
    { id: 'network', label: 'Network' },
    { id: 'consulting', label: 'Consulting' }
  ];

  const services = [
    {
      id: 1,
      title: 'Cloud & DevOps',
      description: 'Cloud migration, CI/CD pipelines, infrastructure automation, monitoring & optimization.',
      category: 'cloud',
      icon: <FaCloud className="w-5 h-5" />
    },
    {
      id: 2,
      title: 'Cybersecurity',
      description: 'Security assessments, compliance, data protection, and vulnerability management.',
      category: 'security',
      icon: <FaShieldAlt className="w-5 h-5" />
    },
    {
      id: 3,
      title: 'Managed IT Services',
      description: 'Complete IT support, monitoring, maintenance, and helpdesk services.',
      category: 'managed',
      icon: <FaCogs className="w-5 h-5" />
    },
    {
      id: 4,
      title: 'Data & Analytics',
      description: 'BI dashboards, data engineering, predictive analytics, AI integrations.',
      category: 'development',
      icon: <FaCode className="w-5 h-5" />
    },
    {
      id: 5,
      title: 'Network Solutions',
      description: 'High-performance, secure, and stable networking for modern organizations.',
      category: 'network',
      icon: <FaNetworkWired className="w-5 h-5" />
    },
    {
      id: 6,
      title: 'IT Consulting',
      description: 'Technology roadmap, architecture consulting, digital transformation strategies.',
      category: 'consulting',
      icon: <FaComments className="w-5 h-5" />
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center mb-10 text-[#4a4a43]"
        >
          Our Core Services
        </motion.h2>

        {/* Category Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileTap={{ scale: 0.9 }}
              className={`px-4 py-1.5 cursor-pointer rounded-full font-medium transition-all text-sm ${
                activeCategory === category.id
                  ? 'bg-[#4a4a43] text-white shadow-md border-primary'
                  : 'bg-white text-[#4a4a43] border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Services Grid (NO ANIMATION NOW) */}
        <div className="flex flex-wrap justify-center gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-xl border border-gray-200 shadow-sm bg-white hover:shadow-xl hover:border-gray-400 hover:border-2 transition-all duration-300 transform hover:-translate-y-1 w-full max-w-sm"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-[#4a4a43]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#4a4a43]">{service.title}</h3>
              </div>

              <p className="text-gray-500 leading-relaxed">{service.description}</p>

              <button
                className="mt-4 flex items-center gap-2 text-sm font-medium text-[#4a4a43] hover:text-blue-500 transition-all group"
              >
                Read More
                <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No services found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoreServicesCards;
