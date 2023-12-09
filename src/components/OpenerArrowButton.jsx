import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../styling/OpenerArrowButton.css";

class OpenerArrowButton extends React.Component {
  scrollToSection = () => {
    scroll.scrollTo(this.props.target, {
      duration: 1000,
      smooth: "easeInOutQuart", // You can adjust the scrolling behavior
    });
  };

  render() {
    return (
        <Link
          activeClass="active"
          to={this.props.target}
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as per your need
          duration={1000}
        >
          <div
            className="scroll"
            onClick={this.scrollToSection}
            aria-label="\/"
          >
            <svg
              className="circle"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
            >
              <circle cx="16" cy="16" r="15"></circle>
            </svg>
            <svg
              className="circle_container"
              width="32px"
              height="32px"
              viewBox="0 0 32 32"
            >
              <circle cx="16" cy="16" r="15"></circle>
            </svg>
            <svg
              className="arrow"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 16 16"
            >
              <g>
                <path
                  fill="#000000"
                  d="M8.001,14c0.326,0,0.632-0.159,0.819-0.427l7-10c0.214-0.305,0.238-0.704,0.068-1.035 C15.715,2.207,15.374,2,15.001,2H0.999C0.626,2,0.285,2.207,0.112,2.538c-0.17,0.331-0.146,0.73,0.068,1.035l7,10 C7.367,13.841,7.673,14,7.999,14C8,14,8,14,8.001,14C8,14,8,14,8.001,14z"
                ></path>
              </g>
            </svg>
          </div>
        </Link>
    );
  }
}

export default OpenerArrowButton;
