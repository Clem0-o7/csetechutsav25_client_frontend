import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Particles from "../components/Particles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3373B0",
    },
  },
});

export default function MainLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#32383F] font-poppins relative overflow-hidden">
      
      {/* Particles Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleCount={150}
          particleSpread={10}
          speed={0.1}
          particleColors={["#ffffff", "#a2d2ff", "#bde0fe"]}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={1}
          cameraDistance={20}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-5 relative z-10">
        <h1 className="text-xl sm:text-3xl text-[#E7F1FB] text-center">
          Loading....
        </h1>
        <div className="flex gap-3 items-center w-80 sm:w-[30rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-[#BED4E9]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <ThemeProvider theme={theme}>
            <Box sx={{ width: "100%" }}>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                  height: 12, 
                  borderRadius: 6,
                  backgroundColor: "#E7F1FB",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#3373B0",
                  },
                }}
              />
            </Box>
          </ThemeProvider>
          <div className="flex items-center">
            <p className="text-[#BED4E9]">/</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-[#BED4E9]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>

        <h1
          className="text-2xl sm:text-4xl text-[#E7F1FB] text-center"
          style={{
            textShadow: "0px 0px 5px rgba(231, 241, 251, 0.5)",
          }}
        >
          INNOHACKS '25
        </h1>
      </div>
    </div>
  );
}