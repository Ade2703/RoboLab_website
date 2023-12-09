import React, { useRef } from 'react';
import { Canvas} from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const CustomModel = () => {
  const modelRef = useRef();

  const gltf = useLoader(GLTFLoader, "./src/images/earth.glb");
  if (gltf && modelRef.current) {
    modelRef.current.position.set(0, 0, 0); // Set position
    modelRef.current.rotation.set(0, Math.PI, 0); // Set rotation
    modelRef.current.scale.set(0.5, 0.5, 0.5); // Set scale
  }
  // Animation logic that moves the model along the x-axis based on scroll position
  useFrame(() => {
    const scrollY = window.scrollY;
    if (modelRef.current) {
      modelRef.current.position.x = scrollY * 0.1; // Adjust the speed of movement as needed
    }
  });

  return (
    <mesh ref={modelRef}>
      <primitive object={gltf.scene} ref={modelRef} />
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={0xff0000} />
    </mesh>
  );
};

const ThreeDScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CustomModel />
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDScene;
