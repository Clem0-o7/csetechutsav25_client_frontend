import React, { useEffect, useRef, useState } from "react";
import tce from "../assets/tce1.png";
import Lottie from "react-lottie";
import animationData from "../lotties/meeting.json";
import { useMediaQuery } from "@mui/material";
import Particles from "../components/Particles";

const theme = {
  eerieBlack: "#1C2127",
  berkeleyBlue: "#0B385F",
  uclaBlue: "#3373B0",
  columbiaBlue: "#BED4E9",
  aliceBlue: "#E7F1FB"
};

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

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${theme.aliceBlue} 0%, ${theme.columbiaBlue} 100%)`,
      }}
    >
      <div className="absolute inset-0 opacity-30 z-0">
        <Particles
          particleCount={150}
          particleSpread={8}
          speed={0.05}
          particleColors={[theme.berkeleyBlue, theme.uclaBlue, theme.columbiaBlue]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.5}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.5}
          cameraDistance={15}
          disableRotation={true}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
        <h1 
  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight"
  style={{
    background: `linear-gradient(to right, ${theme.eerieBlack}, ${theme.berkeleyBlue})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
  ABOUT US
</h1>

          <div 
            className="h-1 w-32 mx-auto mt-4 rounded-full"
            style={{ background: `linear-gradient(to right, ${theme.uclaBlue}, ${theme.columbiaBlue})` }}
          ></div>
        </div>

        <div ref={sectionRef} className="space-y-12">
          <div 
            className={`flex flex-col lg:flex-row items-center gap-12 p-8 rounded-2xl shadow-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              background: `linear-gradient(145deg, ${theme.aliceBlue} 0%, white 100%)`,
              boxShadow: `0 10px 30px -10px ${theme.berkeleyBlue}40`
            }}
          >
            <div className="lg:w-1/2 relative group">
              <div 
                className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"
              ></div>
              <img 
                src={tce} 
                alt="TCE" 
                className="relative rounded-xl shadow-lg transform transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="lg:w-1/2 text-lg text-gray-700 leading-relaxed">
              Founded in 1957 by philanthropist and industrialist late Shri karumuthu Thiagarajan Chettiar, <strong>Thiagarajar College Of Engineering(TCE)</strong> is an institution affliction to Anna university and situated in Madurai, the Temple city. The college is funded by central & state Governments and Management. The courses offered in TCE are approved by the All India council for Technical Education, New Delhi. TCE was granted Autonomy in the year 1987 and the programmes have been accredited by the National Board of Accreditation (NBA).
            </div>
          </div>

          <div 
            className={`flex flex-col lg:flex-row-reverse items-center gap-12 p-8 rounded-2xl shadow-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              background: `linear-gradient(145deg, ${theme.aliceBlue} 0%, white 100%)`,
              boxShadow: `0 10px 30px -10px ${theme.berkeleyBlue}40`
            }}
          >
          <div className="lg:w-1/2 w-full relative">
  <Lottie 
    options={defaultOptions} 
    style={{ width: '100%', height: 'auto' }} 
  />
</div>

            <div className="lg:w-1/2 text-lg text-gray-700 leading-relaxed">
              <strong>TECHUTSAV</strong> is a prestigious National Level Symposium organized annually by TCE . This event brings together experts, innovators, and students to explore the latest advancements in cybersecurity,system administration, networking and more. The symposium features a wide array of workshops and events designed to provide hands-on learning experiences and foster collaboration. Participants can engage with cutting-edge research and innovations from fields like engineering, computer science, and engineering technology management. TECHUTSAV serves as a platform for knowledge exchange, networking, and the celebration of technological progress, making it a must-attend event for technology enthusiasts and professionals alike.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;