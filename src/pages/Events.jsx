import React, { useEffect, useState, useRef } from "react";
import Flagship from "../components/Flagship";
import CardSkeleton from "../components/CardSkeleton";
import { api } from "../api/auth";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

// Updated gradient color to avoid white
const gradientColor = "linear-gradient(135deg, #1c2127, #0b385f, #3373b0, #8abbd9, #1e8fb4)";

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)", onClick }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`card-spotlight ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '2px solid #3373b0',
        transition: 'box-shadow 0.3s ease',
        background: gradientColor
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 80%)`,
        pointerEvents: 'none'
      }} />
    </motion.div>
  );
};

const DockDepartment = ({ name, onClick }) => {
  return (
    <SpotlightCard className="flex flex-col justify-center items-center h-40 cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-2xl font-bold" style={{ color: "#ffffff" }}>{name}</h2>
      <button 
        className="mt-4 px-4 py-2 bg-white/20 rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
        style={{ color: "#ffffff" }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        See More
      </button>
    </SpotlightCard>
  );
};

const Events = () => {
  const [flagShipEvents, setFlagShipEvents] = useState([]);
  const [flagshipLoading, setFlagshipLoading] = useState(true);
  const check = useMediaQuery("(min-width:750px)");
  const departments = ["CSE", "IT", "CSBS", "DS"];

  const handleDepartmentClick = (dept) => {
    window.location.href = `/events/${dept.toLowerCase()}`;
  };

  useEffect(() => {
    setFlagshipLoading(true);
    api.get("event/getFlagshipEvents")
      .then((result) => {
        setFlagShipEvents(Array.isArray(result.data) ? result.data : []);
      })
      .catch((err) => {
        console.error("Error fetching flagship events:", err);
      })
      .finally(() => {
        setFlagshipLoading(false);
      });
  }, []);

  return (
    <div className="py-5 px-9 flex flex-col gap-8" style={{ backgroundColor: "#e0f2fe" }}>
      

      <div className="w-full justify-start">
        <h1 className="font-semibold text-xl sm:text-3xl">Departments</h1>
        <div className="mt-9 grid sm:grid-cols-2 md:grid-cols-4 gap-9 w-full items-center justify-center">
          {departments.map((dept, i) => (
            <DockDepartment key={i} name={dept} onClick={() => handleDepartmentClick(dept)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
