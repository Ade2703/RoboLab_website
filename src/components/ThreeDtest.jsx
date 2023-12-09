import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import "../styling/ThreeDtest.css";

function ThreeDtest() {
  const cubeRef = useRef(); // Create a ref for the cube object

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY || window.pageYOffset;

      // Update the rotation of the cube based on the scroll position
      if (cubeRef.current) {
        cubeRef.current.rotation.y = scrollY * 0.001; // Adjust rotation based on scrollY
      }
    };

    // Attach event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run this effect only once, similar to componentDidMount

  return (
    <>
      <div id="canvas-container">
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="yellow" position={[0, 0, 5]} />
          <mesh ref={cubeRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial />
          </mesh>
        </Canvas>
      </div>
    </>
  );
}

export default ThreeDtest;
