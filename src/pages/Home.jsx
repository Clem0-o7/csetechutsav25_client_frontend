import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/button.css";
import CountdownTimer from "../components/CountdownTImer";
import Particles from "../components/Particles";

const Home = ({ authenticated }) => {
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [welcomeData, setWelcomeData] = useState({ 
    welcomeText: "", 
    userName: "" 
  });
  const fullText = "Decoding the Digital: Unveiling the future of tech.";
  const isDesktop = useMediaQuery("(min-width:900px)");
  const navigate = useNavigate();

  // Fetch welcome data from backend
  useEffect(() => {
    const fetchWelcomeData = async () => {
      try {
        const response = await axios.get('/api/welcome');
        setWelcomeData({
          welcomeText: response.data.welcomeText || "Welcome to INNOHACKS'25, where innovation meets technology!",
          userName: response.data.userName || ""
        });
      } catch (error) {
        console.error("Error fetching welcome data:", error);
        // Set default values in case of error
        setWelcomeData({
          welcomeText: "Welcome to INNOHACKS'25, where innovation meets technology!",
          userName: ""
        });
      }
    };

    fetchWelcomeData();
  }, []);

  // Typing effect for the tagline
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Navigation handlers
  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div 
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #f8fcff, #e0f2fe)",
      }}
    >
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleColors={["#1e3a8a", "#3b82f6", "#0f172a"]}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={150}
          sizeRandomness={1.5}
          cameraDistance={20}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center max-w-6xl w-full py-20 px-6 relative z-10">
        <div 
          className="mb-8 p-2 px-6 rounded-full backdrop-blur-md shadow-lg" 
          style={{ backgroundColor: "rgba(180, 210, 240, 0.2)", border: "1px solid rgba(180, 210, 240, 0.5)" }}
        >
          <p className="text-sm lg:text-lg tracking-widest font-semibold text-blue-900">
            THIAGARAJAR COLLEGE OF ENGINEERING PRESENTS
          </p>
        </div>

        {/* INNOHACKS'25 Title */}
        <h1 className="font-bold lg:text-7xl md:text-6xl text-5xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]">
          INNOHACKS'25
        </h1>

        <div className="mt-6">
          <CountdownTimer targetDate="2025-03-20T00:00:00" />
        </div>

        <p className="text-xl lg:text-2xl mt-4 text-blue-700">
          {typedText}
        </p>
        
        {/* Welcome text with conditional rendering for userName */}
        <div 
          className="mt-10 max-w-3xl backdrop-blur-sm p-6 rounded-xl shadow-lg animate-fade-in"
          style={{ 
            backgroundColor: "rgba(180, 210, 240, 0.15)", 
            border: "1px solid rgba(180, 210, 240, 0.4)"
          }}
        >
          {authenticated ? (
            <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-blue-900">
              Welcome, {sessionStorage.getItem("name")}!
            </h3>
          ) : (
            welcomeData.userName && (
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-blue-900">
                Hello, {welcomeData.userName}!
              </h3>
            )
          )}
          <p className="text-lg lg:text-xl text-blue-800 leading-relaxed">
            {welcomeData.welcomeText}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button 
            className="px-8 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 relative overflow-hidden"
            style={{ 
              background: "linear-gradient(135deg, #1e3a8a, #3b82f6)",
              border: "2px solid rgba(255, 255, 255, 0.2)"
            }}
            onClick={handleProfileClick}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(59, 130, 246, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(59, 130, 246, 0.3)";
            }}
          >
            <span className="relative z-10">Explore Profile</span>
            <div 
              className="absolute -inset-full h-full w-1/2 z-5 animate-card-shine"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                transform: "rotate(25deg)"
              }}
            ></div>
          </button>
          
          <button 
            className="px-8 py-3 rounded-full font-semibold transition-all duration-300 relative overflow-hidden"
            style={{ 
              background: "rgba(255, 255, 255, 0.7)",
              border: "2px solid rgba(59, 130, 246, 0.3)",
              color: "#1e3a8a"
            }}
            onClick={handleRegisterClick}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(59, 130, 246, 0.3)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(59, 130, 246, 0.2)";
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.7)";
            }}
          >
            <span className="relative z-10">Register Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;