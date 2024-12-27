'use client';
import Image from "next/image";
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaJsSquare, FaAws, FaHtml5, FaCss3Alt, FaGit } from 'react-icons/fa'; // Java, React, JavaScript, AWS, HTML, CSS icons
import { SiPostgresql, SiSpringboot, SiNextdotjs } from 'react-icons/si'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

export default function Home() {

  // Variants for floating circles
  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0], // Moves up and down
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Hover and scaling animation for individual skill circles
  const hoverEffect = {
    whileHover: { scale: 1.1 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-800 to-gray-900 p-10 text-white">
        {/* Scattered Floating Technology Icons */}
      <motion.div
        className="absolute top-20 left-10"
        initial="initial"
        animate="animate"
        variants={floatVariants}
      >
        <FaJava size={30} className="text-white opacity-30" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/4"
        initial="initial"
        animate="animate"
        variants={floatVariants}
      >
        <FaJsSquare size={30} className="text-white opacity-30" />
      </motion.div>
      <motion.div
        className="absolute top-2/3 right-1/3"
        initial="initial"
        animate="animate"
        variants={floatVariants}
      >
        <SiPostgresql size={30} className="text-white opacity-30" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 left-20"
        initial="initial"
        animate="animate"
        variants={floatVariants}
      >
        <SiSpringboot size={30} className="text-white opacity-30" />
      </motion.div>
      <motion.div
        className="absolute top-10 left-80"
        initial="initial"
        animate="animate"
        variants={floatVariants}
      >
        <FaAws size={30} className="text-white opacity-30" />
      </motion.div>

      {/* Center-floating Icons */}
      <motion.div
        className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial="initial"
        animate="animate"
        variants={floatVariants}
      >
        <FaReact size={30} className="text-white opacity-30" />
      </motion.div>

      {/* Container for Left (Name, Social Links) and Right (Image) */}
      <div className="flex justify-between items-center">
{/* Left Section: Name and Social Links */}
      <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-5"
        >
          <h1 className="text-5xl font-bold">Ganesh Hegde</h1>

          {/* Horizontal Flex Container for Social Media Icons with Animation */}
          <div className="flex space-x-5 mt-3">
            {/* LinkedIn Icon */}
            <motion.a
              href="https://www.linkedin.com/in/ganesh-hegde-2baaa6155/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="text-white hover:text-blue-400"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </motion.a>

            {/* GitHub Icon */}
            <motion.a
              href="https://github.com/Ganesh156"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.3 }}
              className="text-white hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          className="hidden sm:block"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Use the Next.js Image component with the gif */}
          <Image
            src="/ganesh.svg" // Your gif file in the public folder
            width={500}               // Adjust width according to your gif size
            height={500}              // Adjust height according to your gif size
            alt="Profile GIF"
            className="rounded-full"
          />
          
        </motion.div>
      </div>

      <section className="mt-20">
        <h2 className="text-4xl font-semibold text-center mb-10">Skills</h2>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 lg:gap-y-6 gap-x-0 mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-screen-lg justify-center items-center"
        >
          {/* HTML */}
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-gray-900"
            {...hoverEffect}
          >
            <FaHtml5 size={50} className="text-orange-600 sm:text-40 md:text-50" />
          </motion.div>

          {/* CSS */}
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-gray-900"
            {...hoverEffect}
          >
            <FaCss3Alt size={50} className="text-blue-500 sm:text-40 md:text-50" />
          </motion.div>
          {/* JavaScript */}
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-gray-900"
            {...hoverEffect}
          >
            <FaJsSquare size={50} className="text-yellow-400 sm:text-40 md:text-50" />
          </motion.div>

          {/* React */}
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-gray-900"
            {...hoverEffect}
          >
            <FaReact size={50} className="text-blue-400 sm:text-40 md:text-50" />
          </motion.div>

          {/* Next.js */}
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-gray-900"
            {...hoverEffect}
          >
            <SiNextdotjs size={50} className="text-white sm:text-40 md:text-50" />
          </motion.div>

          {/* Java */}
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-gray-900"
            {...hoverEffect}
          >
            <FaJava size={50} className="text-red-400 sm:text-40 md:text-50" />
          </motion.div>

          {/* Spring Boot */}
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-gray-900"
            {...hoverEffect}
          >
            <SiSpringboot size={50} className="text-green-400 sm:text-40 md:text-50" />
          </motion.div>

          {/* PostgreSQL */}
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-gray-900"
            {...hoverEffect}
          >
            <SiPostgresql size={50} className="text-blue-400 sm:text-40 md:text-50" />
          </motion.div>

          {/* AWS */}
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-gray-900"
            {...hoverEffect}
          >
            <FaAws size={50} className="text-orange-400 sm:text-40 md:text-50" />
          </motion.div>

          {/* Git */}
          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center rounded-full border-4 border-white shadow-[0_0_15px_rgba(255,255,255,0.8)] bg-gray-900"
            {...hoverEffect}
          >
            <FaGit size={50} className="text-orange-600 sm:text-40 md:text-50" />
          </motion.div>

        </div>
      </section>


      {/* Projects Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-5 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center">
          <div></div>
          {/* Example Project */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black p-5 rounded-lg shadow-lg"
          >
            <Image src="/shortscan.png" width={400} height={200} alt="Project 1" />
            <h3 className="mt-3 font-bold">ShortScan</h3>
            <p className="mt-1 text-sm">URL shortener with QR Scanner and basic analytics like which location link is clicked and which device.</p>
            <a
              href="https://shortscan.site/"
              className="text-blue-500 hover:underline mt-2 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </motion.div>
          <div></div>
          {/* Add more project items */}
        </div>
      </div>
        {/* Resume Link */}
        <div className="mt-10">
          <section className="mt-12 text-center">
            <a
              href="/ganesh.pdf" // Make sure this path points to your actual resume file
              target="_blank"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              Download Resume
            </a>
          </section>
        </div>
    </div>
  );
}
