import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UniversityCard from "../components/UniversityCard";
import countries from "../Data/countries";
import { motion } from "framer-motion";

const IndividualCountry = () => {
  const { countryCode } = useParams();
  const country = countries[countryCode];

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="bg-white">
      <Navbar />
      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[50vh] min-h-[300px] md:h-[60vh] lg:h-[100vh] bg-black"
        >
          <motion.img
            src={country.image}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            loading="lazy"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute inset-0 flex items-end justify-start pb-6 md:pb-12 px-4 md:px-8 lg:px-16 xl:px-24">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-2xl lg:text-[64px] xl:text-[64px] font-medium text-white text-left leading-tight md:leading-normal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {country.heroText}
            </motion.h1>
          </div>
        </motion.div>

        {/* Featured Universities Section */}
        <motion.section
          className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="flex items-center mb-4" variants={fadeInUp}>
              <div className="w-12 md:w-20 border-t border-gray-500"></div>
              <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
                Featured Universities
              </h3>
            </motion.div>
            <motion.h2
              className="text-xl md:text-2xl lg:text-[36px] text-gray-800 mb-8 md:mb-12"
              variants={fadeInUp}
            >
              Discover Universities Partnered With IGL In {country.name}
            </motion.h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {country.featuredUniversities.map((university, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <UniversityCard
                    image={university.image}
                    name={university.name}
                    id={university.id}
                    lazyLoad={true}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Why Study Here Section */}
        <motion.div
          className="bg-white px-4 sm:px-6 lg:px-8 py-8 md:py-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-12 md:w-20 border-t border-gray-500"></div>
              <h3 className="text-gray-500 text-[16px] md:text-base uppercase tracking-wide ml-2 md:ml-3">
                WHY STUDY HERE
              </h3>
            </div>
            <p className="text-base md:text-lg lg:text-[36px] text-gray-800 mb-8 md:mb-12 leading-relaxed">
              {country.whyStudyHere}
            </p>
          </div>
        </motion.div>

        {/* Popular Universities Section */}
        <motion.section
          className="px-4 sm:px-6 lg:px-8 py-8 md:py-5"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="w-12 md:w-20 border-t border-gray-500"></div>
              <h3 className="text-gray-500 text-sm md:text-base uppercase tracking-wide ml-2 md:ml-3">
                POPULAR AMONG STUDENTS
              </h3>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-[36px] text-gray-800 mb-8 md:mb-12">
              Other Universities You May Like
            </h2>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {country.popularUniversities.map((university, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <UniversityCard
                    image={university.image}
                    name={university.name}
                    id={university.id}
                    lazyLoad={true}
                  />
                </motion.div>
              ))}
            </motion.div>

            <div className="w-full flex justify-center mt-8 md:mt-12">
              <motion.button
                className="text-black py-2 px-6 md:py-3 md:px-10 border-2 border-black rounded-3xl 
                            hover:bg-black hover:text-white transition-all duration-300 text-base md:text-[16px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore More Universities
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default IndividualCountry;
