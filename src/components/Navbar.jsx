import React, { useState } from "react";
import { Link } from "react-scroll";
import { api } from "../api/auth";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = ({ authenticated }) => {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();

  // Dark theme colors
  const theme = {
    eerieBlack: "#1C2127",
    berkeleyBlue: "#0B385F",
    uclaBlue: "#3373B0",
    columbiaBlue: "#BED4E9",
    aliceBlue: "#E7F1FB"
  };

  const Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "EVENTS", link: "events" },
    { name: "FAQs", link: "faq" },
    { name: "CONTACT", link: "contact" },
  ];

  return (
    <div className="w-full top-0 left-0 sticky z-40">
      <div 
        className="lg:flex items-center flex justify-between py-3 lg:px-10 px-9 shadow-md" 
        style={{ 
          backgroundColor: theme.eerieBlack,
          borderBottom: `1px solid ${theme.uclaBlue}`
        }}
      >
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-30}
            className="transition-transform hover:scale-105"
            onClick={() => setActiveLink("home")}
          >
            <img src={logo} alt="TCE" className="max-h-12" />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer lg:hidden flex items-center h-[5vh]"
          style={{ color: theme.aliceBlue }}
        >
          {open ? (
            <button className="transition-all duration-300 hover:text-uclaBlue" style={{ color: theme.columbiaBlue, hover: { color: theme.uclaBlue } }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button className="transition-all duration-300 hover:text-uclaBlue" style={{ color: theme.columbiaBlue }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
          )}
        </div>

        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-9 absolute lg:static md:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
          style={{ 
            backgroundColor: theme.eerieBlack
          }}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:ml-8 text-xl lg:my-0 my-7 cursor-pointer"
            >
              <Link
                onClick={() => {
                  setActiveLink(link.link);
                  open ? setOpen(!open) : setOpen(open);
                }}
                to={link.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="font-semibold text-base tracking-wider px-4 py-2 rounded-md transition-all duration-300 relative"
                style={{ 
                  color: activeLink === link.link ? theme.uclaBlue : theme.columbiaBlue,
                  borderBottom: activeLink === link.link ? `2px solid ${theme.uclaBlue}` : 'none'
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="cursor-pointer ml-0 lg:ml-8 lg:mt-0 mt-7">
            {authenticated ? (
              <button
                onClick={() => {
                  api
                    .get("auth/logout")
                    .then((res) => {
                      sessionStorage.removeItem("name");
                      sessionStorage.removeItem("email");
                      sessionStorage.removeItem("college");
                      sessionStorage.removeItem("paid");
                      sessionStorage.removeItem("department");
                      sessionStorage.removeItem("transactionNumber");
                      sessionStorage.removeItem("phone");
                      window.location.reload();
                    })
                    .catch((err) => {
                      // console.log(err);
                    });
                }}
                className="px-7 py-2 rounded-md transition-all duration-300 font-medium"
                style={{ 
                  backgroundColor: isLoginHovered ? theme.uclaBlue : 'transparent',
                  color: isLoginHovered ? theme.aliceBlue : theme.uclaBlue,
                  border: `2px solid ${theme.uclaBlue}`,
                }}
                onMouseEnter={() => setIsLoginHovered(true)}
                onMouseLeave={() => setIsLoginHovered(false)}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => {
                  api
                    .get("profile/getProfile")
                    .then((res) => {
                      navigate("/login");
                    })
                    .catch((err) => {
                      navigate("/login");
                    });
                }}
                className="px-7 py-2 rounded-md transition-all duration-300 font-medium"
                style={{ 
                  backgroundColor: isLoginHovered ? theme.uclaBlue : 'transparent',
                  color: isLoginHovered ? theme.aliceBlue : theme.uclaBlue,
                  border: `2px solid ${theme.uclaBlue}`,
                }}
                onMouseEnter={() => setIsLoginHovered(true)}
                onMouseLeave={() => setIsLoginHovered(false)}
              >
                Profile
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;