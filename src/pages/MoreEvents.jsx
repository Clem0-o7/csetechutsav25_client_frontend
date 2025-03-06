import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

import "../css/entire.css";

const workshopData = [
  {
    id: 1,
    title: "AI & ML Workshop",
    image: "/images/event1.jpg",
    description: "Explore AI & ML fundamentals with hands-on projects.",
    venue: "Auditorium Hall A",
    time: "10:00 AM - 2:00 PM",
    teamSize: "Up to 3 members",
    prerequisites: "Basic Python knowledge",
    eligibility: "Open to all students and professionals",
    fullDescription:
      "This workshop introduces AI and ML concepts, including supervised and unsupervised learning, neural networks, and practical applications.",
  },
  {
    id: 2,
    title: "Cybersecurity Bootcamp",
    image: "/images/event2.jpg",
    description: "Learn ethical hacking and cybersecurity techniques.",
    venue: "Lab 5, IT Block",
    time: "11:00 AM - 3:00 PM",
    teamSize: "Individual only",
    prerequisites: "Basic networking knowledge",
    eligibility: "Students with IT background preferred",
    fullDescription:
      "Understand cybersecurity threats, penetration testing, and ethical hacking techniques. Learn how to secure networks and protect data.",
  },
  {
    id: 3,
    title: "Blockchain Seminar",
    image: "/images/event3.jpg",
    description: "Dive into blockchain and cryptocurrency applications.",
    venue: "Seminar Hall 2",
    time: "1:00 PM - 4:00 PM",
    teamSize: "Up to 4 members",
    prerequisites: "Basic understanding of databases",
    eligibility: "Open to all",
    fullDescription:
      "Learn the fundamentals of blockchain technology, its security aspects, and real-world applications in finance and beyond.",
  },
  {
    id: 4,
    title: "AR/VR Innovation Summit",
    image: "/images/event4.jpg",
    description: "Explore the future of Augmented and Virtual Reality.",
    venue: "Innovation Lab",
    time: "3:00 PM - 6:00 PM",
    teamSize: "Up to 5 members",
    prerequisites: "None",
    eligibility: "Tech enthusiasts welcomed",
    fullDescription:
      "This summit showcases AR/VR technologies, industry trends, and hands-on experience with cutting-edge immersive tools.",
  }
];

const theme = {
  eerieBlack: "#1C2127",
  berkeleyBlue: "#0B385F",
  uclaBlue: "#3373B0",
  columbiaBlue: "#BED4E9",
  aliceBlue: "#E7F1FB"
};

const MoreEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-light-blue-50 text-gray-800">
      <Navbar />

      <div className="text-center py-6 " style={{backgroundColor : theme.aliceBlue}} >
        <h1 className="text-4xl font-bold tracking-wide bg-gradient-to-r from-[#3373b0] to-[#1da1f2] bg-clip-text text-transparent">
          Techutsav 2025 Events
        </h1>
      </div>

      <div className="relative flex items-center justify-center w-full h-screen">
        {/* Background Image */}
        <motion.img
          key={workshopData[currentIndex].id}
          src={workshopData[currentIndex].image}
          alt={workshopData[currentIndex].title}
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
          initial={{ opacity: 0.5, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Event Details Box */}
        <motion.div
          className="absolute bottom-10 left-10 bg-white bg-opacity-80 p-6 rounded-xl max-w-lg backdrop-blur-lg shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{backgroundColor: theme.aliceBlue}}
        >
          <h2 className="text-3xl font-bold " style={{color: theme.uclaBlue}}>{workshopData[currentIndex].title}</h2>
          <p className="text-lg mt-2">{workshopData[currentIndex].description}</p>
          <p className="mt-2"><strong>📍 Venue:</strong> {workshopData[currentIndex].venue}</p>
          <p><strong>🕒 Time:</strong> {workshopData[currentIndex].time}</p>

          <button
            className="mt-4 px-6 py-2 bg-gradient-to-r from-[#83d6f1] to-[#00b0ff] rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300"
            onClick={() => setModalOpen(true)}
          >
            More Details
          </button>
        </motion.div>

        {/* Thumbnails */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
          {workshopData.map((event, index) => (
            <motion.img
              key={event.id}
              src={event.image}
              alt={event.title}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                index === currentIndex ? "border-4 border-[#1da1f2] scale-110" : "border-2 border-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Modal for More Details */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-gray-800 p-8 rounded-xl max-w-xl w-full shadow-2xl relative backdrop-blur-xl border border-gray-300"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              style={{backgroundColor:theme.aliceBlue}}
            >
              <h2 className="text-2xl font-bold text-blue-600">{workshopData[currentIndex].title}</h2>
              <p className="mt-2">{workshopData[currentIndex].fullDescription}</p>
              <p className="mt-3"><strong>👥 Team Size:</strong> {workshopData[currentIndex].teamSize}</p>
              <p><strong>📚 Prerequisites:</strong> {workshopData[currentIndex].prerequisites}</p>
              <p><strong>🎓 Eligibility:</strong> {workshopData[currentIndex].eligibility}</p>

              <div className="flex justify-between mt-5" >
                <button
                  className="px-5 py-2 bg-gradient-to-r from-[#83d6f1] to-[#00b0ff] rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300"
                >
                  Register Now
                </button>
                <button
                  className="px-4 py-2 bg-red-600 rounded-lg text-white hover:bg-red-800 transition-all duration-300"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default MoreEvents;
