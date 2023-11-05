import Box from "@mui/material/Box";
import logo from "../images/logoscrittanobg.png";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styling/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("hidden");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      height: 32,
      width: 32,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 60,
      width: 60,
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      mixBlendMode: "difference",
    },
    logo: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      mixBlendMode: "difference",
    },
    hidden: {
      height: 0,
      width: 0,
    },
  };
  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen === true) {
      setCursorVariant("hidden");
    } else {
      setCursorVariant("default");
    }
  };
  const textEnter = () => {
    if (isMenuOpen === true) {
      setCursorVariant("text");
    }
  };
  const logoEnter = () => {
    if (isMenuOpen === true) {
      setCursorVariant("logo");
    }
  };
  const textLeave = () => {
    if (isMenuOpen === true) {
      setCursorVariant("default");
    }
  };
  const smallheight = "calc(100vh - 105.25px)";
  const bigheight = "calc(100vh - 132.39px)";
  return (
    <>
      <div className="desktopPage">
        <Box
          className={`headerContainer ${isMenuOpen ? "-open" : ""}`}
          sx={{
            height: {
              xs: isMenuOpen ? 105.25 : 55.25,
              md: isMenuOpen ? 132.39 : 82.39,
            },
          }}
        >
          <Box
            onMouseEnter={logoEnter}
            onMouseLeave={textLeave}
            className={`logoBox ${isMenuOpen ? "-open" : ""}`}
            sx={{ width: { xs: 120, md: 184 } }}
          >
            <img className="logo" src={logo} alt="ROBOLAB" />
          </Box>
          <Box
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            onClick={handleButtonClick}
            className={`button ${isMenuOpen ? "-menu-open" : ""}`}
            sx={{ mr: 1.5, width: { xs: 50, md: 80 } }}
          >
            <svg
              width="48px"
              height="48px"
              viewBox="0 0 48 48"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className={`svg ${isMenuOpen ? "-menu-open" : ""}`}
            >
              <g className={`gfirst-child ${isMenuOpen ? "-menu-open" : ""}`}>
                <line
                  x1="0"
                  y1="17"
                  x2="48"
                  y2="17"
                  strokeWidth="1"
                  className={`line ${
                    isMenuOpen ? "gfirst-childlinefirst-child -menu-open" : ""
                  }`}
                />
                <line
                  x1="0"
                  y1="31"
                  x2="48"
                  y2="31"
                  strokeWidth="1"
                  className={`line ${
                    isMenuOpen ? "gfirst-childlinelast-child -menu-open" : ""
                  }`}
                />
              </g>

              <g className={`glast-child ${isMenuOpen ? "-menu-open" : ""}`}>
                <line
                  x1="0"
                  y1="24"
                  x2="48"
                  y2="24"
                  strokeWidth="1"
                  className={`line ${
                    isMenuOpen ? "glast-childlinefirst-child -menu-open" : ""
                  }`}
                />
                <line
                  x1="0"
                  y1="24"
                  x2="48"
                  y2="24"
                  strokeWidth="1"
                  className={`line ${
                    isMenuOpen ? "glast-childlinelast-child -menu-open" : ""
                  }`}
                />
              </g>
            </svg>
          </Box>
        </Box>
        <Box sx={{ width: 1 / 1, height: { xs: smallheight, md: bigheight } }}>
          <motion.div
            variants={variants}
            className={`cursor ${isMenuOpen ? "-open" : ""}`}
            animate={cursorVariant}
          />
          <nav className={`menu ${isMenuOpen ? "-open" : ""}`}>
            <ul>
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                Projects
              </li>
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                About
              </li>
              <li onMouseEnter={textEnter} onMouseLeave={textLeave}>
                Contacts
              </li>
            </ul>
          </nav>
        </Box>
      </div>
    </>
  );
}
export default Header;
