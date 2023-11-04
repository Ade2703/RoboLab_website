import Box from "@mui/material/Box";
import logo from "../images/logoscrittanobg.png";
import React, { useState } from "react";
import "../styling/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const smallheight='calc(100vh - 105.25px)';
  const bigheight='calc(100vh - 132.39px)';
  return (
    <>
      <div className="desktopPage">
        <Box
          className={`headerContainer ${isMenuOpen ? "-open" : ""}`}
          sx={{
            height: {
              xs: isMenuOpen ? 105.25 : 55.25,
              md: isMenuOpen ? 132.39 : 82.39
            }
          }}
        >
          <Box className="logoBox" sx={{ width: { xs: 120, md: 184 } }}>
            <img className="logo" src={logo} alt="ROBOLAB" />
          </Box>
          <Box
            onClick={handleButtonClick}
            className={`button ${isMenuOpen ? "-menu-open" : ""}`}
            sx={{mr:1.5, width: { xs: 50, md: 80 } }}
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
                <line x1="0" y1="17" x2="48" y2="17" stroke-width="1" className={`line ${isMenuOpen ? "gfirst-childlinefirst-child -menu-open" : ""}`}/>
                <line x1="0" y1="31" x2="48" y2="31" stroke-width="1" className={`line ${isMenuOpen ? "gfirst-childlinelast-child -menu-open" : ""}`}/>
              </g>

              <g className={`glast-child ${isMenuOpen ? "-menu-open" : ""}`}>
                <line x1="0" y1="24" x2="48" y2="24" stroke-width="1" className={`line ${isMenuOpen ? "glast-childlinefirst-child -menu-open" : ""}`} />
                <line x1="0" y1="24" x2="48" y2="24" stroke-width="1" className={`line ${isMenuOpen ? "glast-childlinelast-child -menu-open" : ""}`} />
              </g>
            </svg>
          </Box>
        </Box>
        <Box sx={{width: 1/1, height: { xs: smallheight, md: bigheight }}}>
        <nav className={`menu ${isMenuOpen ? "-open" : ""}`}>
          <ul>
            <li>Projects</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
        </nav>
        </Box>
      </div>
    </>
  );
}
export default Header;
