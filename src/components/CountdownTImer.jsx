import React, { useState, useEffect } from "react";

// Using the same color theme as the main component
const theme = {
  eerieBlack: "#1C2127",
  berkeleyBlue: "#0B385F",
  uclaBlue: "#3373B0",
  columbiaBlue: "#BED4E9",
  aliceBlue: "#E7F1FB"
};

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isHovered, setIsHovered] = useState({
    hours: false,
    minutes: false,
    seconds: false
  });

  useEffect(() => {
    // Convert target date string to Date object if it's a string
    const targetDateTime = typeof targetDate === 'string' 
      ? new Date(targetDate) 
      : targetDate;

    const calculateTimeLeft = () => {
      const difference = targetDateTime - new Date();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Event has already started
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Calculate immediately and then set interval
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div 
      className="flex flex-col items-center mt-8 animate-fade-in"
      data-testid="countdown-timer"
    >
      <div 
        className="mb-4 p-2 px-6 rounded-full backdrop-blur-sm shadow-lg animate-pulse-subtle"
        style={{ 
          backgroundColor: `${theme.uclaBlue}20`,
          border: `1px solid ${theme.columbiaBlue}40`
        }}
      >
        <p className="text-sm lg:text-lg tracking-widest font-semibold" style={{ color: theme.berkeleyBlue }}>
          HACKATHON COUNTDOWN
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {timeLeft.days > 0 && (
          <div 
            className="flex flex-col items-center"
            onMouseEnter={() => setIsHovered(prev => ({ ...prev, days: true }))}
            onMouseLeave={() => setIsHovered(prev => ({ ...prev, days: false }))}
          >
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 relative overflow-hidden"
              style={{ 
                background: isHovered.days
                  ? `linear-gradient(135deg, ${theme.berkeleyBlue}, ${theme.uclaBlue})`
                  : `linear-gradient(135deg, ${theme.aliceBlue}, ${theme.columbiaBlue}30)`,
                border: `2px solid ${isHovered.days ? 'white' : theme.columbiaBlue}40`
              }}
            >
              {/* Animated shine effect */}
              <div 
                className={`absolute -inset-full h-full w-1/2 z-10 ${isHovered.days ? 'animate-card-shine' : 'opacity-0'}`}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                  transform: "rotate(25deg)"
                }}
              ></div>
              <span 
                className="text-3xl sm:text-4xl font-bold relative z-20 transition-all duration-300"
                style={{ color: isHovered.days ? 'white' : theme.berkeleyBlue }}
              >
                {formatNumber(timeLeft.days)}
              </span>
            </div>
            <p 
              className="mt-2 font-medium text-sm sm:text-base transition-all duration-300"
              style={{ color: theme.berkeleyBlue }}
            >
              Days
            </p>
          </div>
        )}
        
        <div 
          className="flex flex-col items-center"
          onMouseEnter={() => setIsHovered(prev => ({ ...prev, hours: true }))}
          onMouseLeave={() => setIsHovered(prev => ({ ...prev, hours: false }))}
        >
          <div 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 relative overflow-hidden"
            style={{ 
              background: isHovered.hours
                ? `linear-gradient(135deg, ${theme.berkeleyBlue}, ${theme.uclaBlue})`
                : `linear-gradient(135deg, ${theme.aliceBlue}, ${theme.columbiaBlue}30)`,
              border: `2px solid ${isHovered.hours ? 'white' : theme.columbiaBlue}40`
            }}
          >
            {/* Animated shine effect */}
            <div 
              className={`absolute -inset-full h-full w-1/2 z-10 ${isHovered.hours ? 'animate-card-shine' : 'opacity-0'}`}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                transform: "rotate(25deg)"
              }}
            ></div>
            <span 
              className="text-3xl sm:text-4xl font-bold relative z-20 transition-all duration-300"
              style={{ color: isHovered.hours ? 'white' : theme.berkeleyBlue }}
            >
              {formatNumber(timeLeft.hours)}
            </span>
          </div>
          <p 
            className="mt-2 font-medium text-sm sm:text-base transition-all duration-300"
            style={{ color: theme.berkeleyBlue }}
          >
            Hours
          </p>
        </div>
        
        <div 
          className="flex flex-col items-center"
          onMouseEnter={() => setIsHovered(prev => ({ ...prev, minutes: true }))}
          onMouseLeave={() => setIsHovered(prev => ({ ...prev, minutes: false }))}
        >
          <div 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 relative overflow-hidden"
            style={{ 
              background: isHovered.minutes
                ? `linear-gradient(135deg, ${theme.berkeleyBlue}, ${theme.uclaBlue})`
                : `linear-gradient(135deg, ${theme.aliceBlue}, ${theme.columbiaBlue}30)`,
              border: `2px solid ${isHovered.minutes ? 'white' : theme.columbiaBlue}40`
            }}
          >
            {/* Animated shine effect */}
            <div 
              className={`absolute -inset-full h-full w-1/2 z-10 ${isHovered.minutes ? 'animate-card-shine' : 'opacity-0'}`}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                transform: "rotate(25deg)"
              }}
            ></div>
            <span 
              className="text-3xl sm:text-4xl font-bold relative z-20 transition-all duration-300"
              style={{ color: isHovered.minutes ? 'white' : theme.berkeleyBlue }}
            >
              {formatNumber(timeLeft.minutes)}
            </span>
          </div>
          <p 
            className="mt-2 font-medium text-sm sm:text-base transition-all duration-300"
            style={{ color: theme.berkeleyBlue }}
          >
            Minutes
          </p>
        </div>
        
        <div 
          className="flex flex-col items-center"
          onMouseEnter={() => setIsHovered(prev => ({ ...prev, seconds: true }))}
          onMouseLeave={() => setIsHovered(prev => ({ ...prev, seconds: false }))}
        >
          <div 
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 relative overflow-hidden animate-pulse-subtle"
            style={{ 
              background: isHovered.seconds
                ? `linear-gradient(135deg, ${theme.berkeleyBlue}, ${theme.uclaBlue})`
                : `linear-gradient(135deg, ${theme.aliceBlue}, ${theme.columbiaBlue}30)`,
              border: `2px solid ${isHovered.seconds ? 'white' : theme.columbiaBlue}40`
            }}
          >
            {/* Animated shine effect */}
            <div 
              className={`absolute -inset-full h-full w-1/2 z-10 ${isHovered.seconds ? 'animate-card-shine' : 'opacity-0'}`}
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                transform: "rotate(25deg)"
              }}
            ></div>
            <span 
              className="text-3xl sm:text-4xl font-bold relative z-20 transition-all duration-300"
              style={{ color: isHovered.seconds ? 'white' : theme.berkeleyBlue }}
            >
              {formatNumber(timeLeft.seconds)}
            </span>
          </div>
          <p 
            className="mt-2 font-medium text-sm sm:text-base transition-all duration-300"
            style={{ color: theme.berkeleyBlue }}
          >
            Seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;