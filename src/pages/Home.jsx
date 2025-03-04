import React, { useState, useEffect } from "react";
import { Link as Alink } from "react-scroll";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import "../css/button.css";
import CountdownTimer from "../components/CountdownTImer";

// Color theme
const theme = {
  eerieBlack: "#1C2127",
  berkeleyBlue: "#0B385F",
  uclaBlue: "#3373B0",
  columbiaBlue: "#BED4E9",
  aliceBlue: "#E7F1FB"
};

const Home = ({ authenticated }) => {
  const [isRegisterHovered, setIsRegisterHovered] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Decoding the Digital: Unveiling the future of tech.";
  const isDesktop = useMediaQuery("(min-width:900px)");
  const isTablet = useMediaQuery("(min-width:600px)");
  
  // Typing effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Center content - Adjusted padding to prevent overflow */}
      <div className="flex flex-col items-center justify-center w-full py-20 px-6">
        <div className="flex flex-col items-center text-center max-w-6xl w-full">
          <div 
            className="mb-8 p-2 px-6 rounded-full backdrop-blur-sm shadow-lg animate-pulse-subtle" 
            style={{ 
              backgroundColor: `${theme.uclaBlue}20`,
              border: `1px solid ${theme.columbiaBlue}40`
            }}
          >
            <p className="text-sm lg:text-lg tracking-widest font-semibold" style={{ color: theme.berkeleyBlue }}>
              THIAGARAJAR COLLEGE OF ENGINEERING PRESENTS
            </p>
          </div>

          <div className="relative">
            <h1 className="font-bold lg:text-7xl md:text-6xl text-5xl tracking-wider relative z-20 animate-fade-in-up">
              <span className="text-transparent bg-clip-text bg-gradient-to-r animate-text-shimmer" 
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${theme.berkeleyBlue}, ${theme.uclaBlue}, ${theme.berkeleyBlue})`,
                  backgroundSize: "200% auto"
                }}
              >
                INNOHACKS'25
              </span>
            </h1>
          </div>

          <div 
            className="mt-6 px-6 py-2 rounded-full backdrop-blur-sm animate-float-enhanced shadow-md"
            style={{ 
              backgroundColor: `${theme.uclaBlue}20`,
              border: `1px solid ${theme.columbiaBlue}40`
            }}
          >
            <p className="lg:text-2xl text-xl font-medium" style={{ color: theme.berkeleyBlue }}>On 20th March</p>
          </div>

          {/* Add CountdownTimer component here */}
          <div className="mt-6 animate-fade-in">
            <CountdownTimer targetDate="2025-03-20T00:00:00" />
          </div>

          <div className="h-16 flex items-center justify-center mt-4">
            <p className="text-xl lg:text-2xl min-h-[28px]" style={{ color: theme.berkeleyBlue }}>
              {typedText}
              <span className="animate-blink">|</span>
            </p>
          </div>

          {/* Hackathon Count - Added below the "Decoding the Digital" text */}
          <div 
            className="mb-6 p-2 px-6 rounded-full backdrop-blur-sm shadow-md animate-pulse-subtle"
            style={{ 
              backgroundColor: `${theme.uclaBlue}15`,
              border: `1px solid ${theme.columbiaBlue}30`,
              marginTop: '1rem'
            }}
          >
            <p className="text-lg lg:text-xl font-bold tracking-wider" style={{ color: theme.berkeleyBlue }}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r animate-text-shimmer"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${theme.berkeleyBlue}, ${theme.uclaBlue}, ${theme.berkeleyBlue})`,
                  backgroundSize: "200% auto"
                }}
              >
                5th EDITION
              </span> • 500+ PARTICIPANTS 
            </p>
          </div>

          {authenticated ? (
            <div className="flex flex-col items-center gap-6 mt-6 animate-fade-in">
              <p className="text-2xl font-semibold filter drop-shadow-sm" style={{ color: theme.berkeleyBlue }}>
                Welcome, {sessionStorage.getItem("name")}
              </p>
              <div className="flex gap-5 flex-col sm:flex-row">
                <Alink
                  to="events"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="px-8 py-3 rounded-md text-center cursor-pointer transition-all duration-300 relative overflow-hidden shadow-md hover:shadow-lg"
                  style={{ 
                    backgroundColor: isExploreHovered ? theme.berkeleyBlue : "white",
                    color: isExploreHovered ? "white" : theme.berkeleyBlue,
                    border: `2px solid ${theme.berkeleyBlue}`
                  }}
                  onMouseEnter={() => setIsExploreHovered(true)}
                  onMouseLeave={() => setIsExploreHovered(false)}
                >
                  <span className="relative z-10">Explore</span>
                  <span 
                    className="absolute inset-0 -z-10 transition-transform duration-300 ease-in-out"
                    style={{ 
                      transform: isExploreHovered ? 'translateY(0)' : 'translateY(100%)',
                      background: `linear-gradient(45deg, ${theme.berkeleyBlue}, ${theme.uclaBlue})`
                    }}
                  ></span>
                </Alink>
                <Link
                  to="/profile"
                  className="px-8 py-3 rounded-md text-center transition-all duration-300 relative overflow-hidden shadow-md hover:shadow-lg"
                  style={{ 
                    backgroundColor: isProfileHovered ? theme.uclaBlue : "white",
                    color: isProfileHovered ? "white" : theme.uclaBlue,
                    border: `2px solid ${theme.uclaBlue}`
                  }}
                  onMouseEnter={() => setIsProfileHovered(true)}
                  onMouseLeave={() => setIsProfileHovered(false)}
                >
                  <span className="relative z-10">Profile</span>
                  <span 
                    className="absolute inset-0 -z-10 transition-transform duration-300 ease-in-out"
                    style={{ 
                      transform: isProfileHovered ? 'translateY(0)' : 'translateY(100%)',
                      background: `linear-gradient(45deg, ${theme.uclaBlue}, ${theme.columbiaBlue})`
                    }}
                  ></span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex gap-5 mt-8 sm:flex-row flex-col animate-fade-in">
              <Link
                to="/register"
                className="px-8 py-3 rounded-md text-center transition-all duration-300 relative overflow-hidden shadow-md hover:shadow-lg"
                style={{ 
                  backgroundColor: isRegisterHovered ? theme.berkeleyBlue : "white",
                  color: isRegisterHovered ? "white" : theme.berkeleyBlue,
                  border: `2px solid ${theme.berkeleyBlue}`
                }}
                onMouseEnter={() => setIsRegisterHovered(true)}
                onMouseLeave={() => setIsRegisterHovered(false)}
              >
                <span className="relative z-10">Register</span>
                <span 
                  className="absolute inset-0 -z-10 transition-transform duration-300 ease-in-out"
                  style={{ 
                    transform: isRegisterHovered ? 'translateY(0)' : 'translateY(100%)',
                    background: `linear-gradient(45deg, ${theme.berkeleyBlue}, ${theme.uclaBlue})`
                  }}
                ></span>
              </Link>
              <Link
                to="/login"
                className="px-8 py-3 rounded-md text-center transition-all duration-300 relative overflow-hidden shadow-md hover:shadow-lg"
                style={{ 
                  backgroundColor: isLoginHovered ? theme.uclaBlue : "white",
                  color: isLoginHovered ? "white" : theme.uclaBlue,
                  border: `2px solid ${theme.uclaBlue}`
                }}
                onMouseEnter={() => setIsLoginHovered(true)}
                onMouseLeave={() => setIsLoginHovered(false)}
              >
                <span className="relative z-10">Login</span>
                <span 
                  className="absolute inset-0 -z-10 transition-transform duration-300 ease-in-out"
                  style={{ 
                    transform: isLoginHovered ? 'translateY(0)' : 'translateY(100%)',
                    background: `linear-gradient(45deg, ${theme.uclaBlue}, ${theme.columbiaBlue})`
                  }}
                ></span>
              </Link>
            </div>
          )}

          {/* Event cards - Adjusted spacing to prevent overflow */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 mb-16 w-full max-w-5xl">
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
                title: "24+ Challenges",
                desc: "Ready to test your skills",
                gradient: `linear-gradient(135deg, ${theme.berkeleyBlue}10, ${theme.uclaBlue}20)`,
                delay: "0"
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "48hr Hackathon",
                desc: "Intense coding experience",
                gradient: `linear-gradient(135deg, ${theme.uclaBlue}10, ${theme.columbiaBlue}20)`,
                delay: "150"
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                title: "₹50K+ Prizes",
                desc: "Exciting rewards await",
                gradient: `linear-gradient(135deg, ${theme.columbiaBlue}10, ${theme.berkeleyBlue}20)`,
                delay: "300"
              }
            ].map((card, index) => (
              <div 
                key={index}
                className="backdrop-blur-sm p-12 rounded-xl shadow-lg border border-white/40 hover:shadow-xl transition-all duration-500 group relative overflow-hidden hover:scale-105 animate-fade-in-up-staggered"
                style={{ 
                  background: card.gradient,
                  borderColor: `${theme.columbiaBlue}30`,
                  animationDelay: `${card.delay}ms`
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${theme.columbiaBlue}30, ${theme.uclaBlue}20)`,
                    borderRadius: '0.75rem',
                  }}
                ></div>
                {/* Animated shine effect */}
                <div 
                  className="absolute -inset-full h-full w-20 opacity-50 group-hover:animate-card-shine z-10"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                    transform: "rotate(25deg)"
                  }}
                ></div>
                <div className="relative z-10">
                  <div 
                    className="flex items-center justify-center h-24 w-24 rounded-full mb-8 mx-auto group-hover:scale-110 transition-all duration-300 shadow-md animate-pulse-subtle"
                    style={{ 
                      background: `linear-gradient(135deg, white, ${theme.columbiaBlue}40)`
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-12 w-12" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke={theme.berkeleyBlue}
                    >
                      {card.icon}
                    </svg>
                  </div>
                  <p className="font-bold text-2xl lg:text-3xl mb-4" style={{ color: theme.berkeleyBlue }}>{card.title}</p>
                  <p className="text-lg lg:text-xl" style={{ color: `${theme.eerieBlack}99` }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;