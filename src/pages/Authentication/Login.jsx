import React, { useState } from "react";
import EyeClose from "../../components/EyeClose.jsx";
import EyeOpen from "../../components/EyeOpen.jsx";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useNavigate } from "react-router-dom";
import SnackbarContent from "@mui/material/SnackbarContent";
import Particles from "../../components/Particles.jsx"; // Import Particles
import { api } from "../../api/auth.js";

const Login = () => {
  const button =
    "font-semibold bg-white/50 px-5 py-2 rounded-md tracking-wide hover:bg-black hover:text-white duration-150";
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incomplete, setIncomplete] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messageBack, setMessageBack] = useState("green");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="w-full h-screen flex items-center bg-sky-50 justify-center relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Particles
          particleColors={["#ffffff", "#7dd3fc"]} // White & Sky Blue 300
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
      </div>

      {/* Login Form */}
      <Paper
        elevation={2}
        className="bg-white/50 flex flex-col justify-center rounded-xl gap-9 p-9 hover:shadow-2xl z-10"
      >
        <h1 className="text-4xl font-bold">TECHUTSAV 2025</h1>
        <h2 className="font-semibold text-3xl text-center">LOGIN</h2>
        <form className="flex flex-col gap-9">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <label
                htmlFor=""
                className="tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
              >
                Email Address
              </label>
              <input
                type="text"
                placeholder="Enter email address"
                className="focus:outline-sky-200 rounded-lg w-5/6 p-2"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor=""
                className="tracking-wider after:content-['*'] after:text-red-600 after:pl-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "password" : "text"}
                  placeholder="Enter password"
                  className="focus:outline-sky-200 rounded-lg w-5/6 p-2"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-4"
                  onClick={() => {
                    setPasswordVisible(!passwordVisible);
                  }}
                >
                  {passwordVisible ? <EyeClose /> : <EyeOpen />}
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-evenly">
            <Link className={button} to="/">
              Back
            </Link>
            <button
              className={button}
              onClick={async (event) => {
                setLoading(true);
                setMessage("Submitting...");
                setMessageBack("green");
                handleClick();
                event.preventDefault();
                if (!password || !email) {
                  setIncomplete(true);
                  setMessage("Complete all details");
                  setMessageBack("red");
                  return;
                }
                setIncomplete(false);

                if (!emailRegex.test(email)) {
                  setIsValidEmail(!emailRegex.test(email));
                  setMessage("Enter valid mail");
                  setMessageBack("red");
                  return;
                }
                setIsValidEmail(!emailRegex.test(email));

                api
                  .post("auth/login", { email, password })
                  .then((res) => {
                    setLoading(false);
                    setError(false);
                    navigate("/");
                  })
                  .catch((err) => {
                    console.log(err.response.data.errors);
                    if (err.response.data.errors.email !== "") {
                      setMessage(err.response.data.errors.email);
                      setMessageBack("red");
                    } else if (err.response.data.errors.password !== "") {
                      setMessage(err.response.data.errors.password);
                      setMessageBack("red");
                    } else {
                      setError(true);
                      setMessage("Check your Internet Connection");
                      setMessageBack("red");
                    }
                    setLoading(false);
                  });
              }}
            >
              Login
            </button>
          </div>
        </form>
      </Paper>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={open}
        autoHideDuration={10000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <SnackbarContent
          message={message}
          sx={{ backgroundColor: messageBack }}
          action={action}
        />
      </Snackbar>
    </div>
  );
};

export default Login;