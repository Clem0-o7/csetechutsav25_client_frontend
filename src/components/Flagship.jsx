import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import EventLogo from "../assets/event-logo.png";

const Flagship = () => {
  const [isHovered, setIsHovered] = useState(false);
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", "rgba(255, 255, 255, 0.2)");
  };

  return (
    <div className="flex flex-col h-screen bg-[#E7F1FB] pb-16">
      <div className="container mx-auto px-4">
        {/* Updated Events Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold text-[#278092] text-left mb-4">EVENTS</h1>
      </div>
      <div className="flex justify-center items-center flex-grow mb-12">
        <div
          ref={divRef}
          onMouseMove={handleMouseMove}
          className="relative p-4 md:w-1/2 flex flex-col gap-4 items-center cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-95 text-center overflow-hidden"
          style={{
            borderRadius: "2rem",
            border: "3px dashed transparent",
            backgroundColor: "#bed4e9",
            background: "radial-gradient(circle, rgba(179, 229, 252, 0.5), rgba(67, 148, 247, 0.3), rgba(10, 52, 94, 0.2))",
            borderImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><polygon fill=\"none\" stroke=\"#3373b0\" stroke-width=\"4\" points=\"50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35\"/></svg>') 1",
          }}
        >
          <img src={EventLogo} alt="Event" className="w-1/2 md:w-1/3 mb-4" />
          <h1 className="font-bold text-2xl text-[#1c2127]">Workshop</h1>
          <p className="text-start text-[#0b385f]">
            The metaverse is driving innovation across industries, from immersive entertainment experiences and revolutionary education methods to transformative healthcare applications. Companies leveraging virtual environments in retail, architecture, and real estate are reducing costs and accelerating decision-making. As the metaverse evolves, businesses must adapt to stay competitive and unlock new growth opportunities.
          </p>
          <Link
            to="/events/Workshop"
            className={`px-6 py-2 flex items-center gap-2 bg-[#003262] text-white font-semibold rounded-2xl transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ${
              isHovered ? 'pl-3 pr-6' : ''
            } animate-pulse hover:animate-none`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="text-lg">See more</span>
            <span className="text-2xl">&gt;</span>
          </Link>
          <div
            className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500"
            style={{
              background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(179, 229, 252, 0.6), transparent 80%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Flagship;