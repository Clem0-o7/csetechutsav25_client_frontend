import React, { useEffect, useRef, useState } from "react";
import tce from "../assets/tce1.png";
import Lottie from "react-lottie";
import animationData from "../lotties/meeting.json";
import { useMediaQuery } from "@mui/material";
import Particles from "../components/Particles"; // Import the Particles component

// Define the CSS for fade-in only
const styles = `
  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .fade-in {
    animation: fadeIn 1.5s ease-in-out forwards; /* Animation runs once */
  }
`;

// Inject the styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const mobileCheck = useMediaQuery("(min-width: 1000px)");

  // State to control fade-in animation
  const [isVisible, setIsVisible] = useState(false);

  // Ref for the section to observe
  const sectionRef = useRef(null);

  useEffect(() => {
    // Set up Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger fade-in when the section is in view
          observer.unobserve(entry.target); // Stop observing after the animation triggers
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    // Cleanup observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col mt-100 bg-sky-100 min-h-screen pb-10 overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#ffffff", "#a2d2ff", "#bde0fe"]} // Customize particle colors
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={100}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      {/* Added padding-top to create space above the heading */}
      <div className="pt-16 sm:pt-24">
        {/* ABOUT heading with glow effect */}
        <div className="relative h-24 sm:h-36 mb-4 z-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-[#278092] absolute z-10 left-8">
            ABOUT US
          </h1>
          <div className="text-4xl sm:text-6xl font-bold text-[#278092]/40 absolute z-0 left-8 blur-xl animate-pulse opacity-30">
            ABOUT US
          </div>
        </div>
      </div>

      {/* Main content section */}
      <div className="z-10" ref={sectionRef}>
        {/* Modified first paragraph section to have box styling similar to second paragraph */}
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-28 items-center justify-center lg:border-2 lg:border-black/50 rounded-xl lg:m-9 relative overflow-hidden">
          {/* Subtle glow behind the container */}
          <div className="absolute inset-0 bg-blue-400 opacity-5 blur-2xl"></div>
          
          {/* Image with blue shadow */}
          <div className="relative flex-shrink-0 my-4 lg:my-0">
            <div className="absolute inset-0 bg-blue-500 rounded-lg blur-xl opacity-30 transform scale-105 animate-pulse"></div>
            <img src={tce} alt="TCE" className="w-[400px] h-auto z-10 relative" />
          </div>

          {/* First paragraph with fade-in effect */}
          <div className={`tracking-wider leading-8 px-4 lg:pr-9 lg:w-1/2 relative z-10 ${isVisible ? "fade-in" : "opacity-0"}`}>
            Founded in 1957 by philanthropist and industrialist late Shri karumuthu Thiagarajan Chettiar, Thiagarajar College Of Engineering(TCE) is an institution afflication to Anna university and situated in Madurai,the Temple city. The college is funded by central & state Governments and Mangement.The courses offered in TCE are approved by the All India council for Technical Education,New Delhi. TCE was granted Autonomy in the year 1987 and the programmes have been accredited by the National Board of Accreditation(NBA).
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-5 lg:gap-28 items-center justify-center lg:border-2 lg:border-black/50 rounded-xl lg:m-9 relative overflow-hidden mt-8">
          {/* Subtle glow behind the container */}
          <div className="absolute inset-0 bg-blue-400 opacity-5 blur-2xl"></div>

          {/* Lottie animation with blue shadow */}
          <div className="lg:w-[500px] w-[300px] relative flex-shrink-0">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 transform scale-110 animate-pulse"></div>
            <Lottie options={defaultOptions} />
          </div>

          {/* Second paragraph with fade-in effect */}
          <div className={`tracking-wider leading-8 px-4 lg:pl-9 lg:w-1/2 relative z-10 ${isVisible ? "fade-in" : "opacity-0"}`}>
            TECHUTSAV IS A National Level Symposium Conducted by the institution every year for a conference that can celebrate different elements of cybersecurity, system administration, and networking concepts. It can also showcase innovative research projects across multiple disciplines, such as engineering, computer science, and engineering technology management.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;