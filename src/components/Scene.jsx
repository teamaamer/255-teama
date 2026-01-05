"use client";

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense, useRef, useState } from "react";
import { useProgress, Html, Sparkles, OrbitControls } from "@react-three/drei";

export default function Scene() {
  const scalingFactor = window.innerWidth / 1300;

  const computeCamPosition = () => {
    if (scalingFactor < 0.5) {
      return [18, 18, 18];
    } else if (scalingFactor < 0.8) {
      return [13, 13, 13];
    } else {
      return [8, 8, 8];
    }
  };

  const computeFog = () => {
    if (scalingFactor < 0.5) {
      return [25];
    } else if (scalingFactor < 0.8) {
      return [20];
    } else {
      return [15];
    }
  };

  const camPosition = computeCamPosition();
  const fogNear = computeFog();
  const controlsRef = useRef();
  const [isAutoRotate, setAutoRotate] = useState(true);
  const delayTime = 10000; // Delay in milliseconds
  let timer = useRef();

  const handleStart = () => {
    setAutoRotate(false); // Disable auto-rotate when interacting
    if (timer.current) clearTimeout(timer.current); // Clear any existing timers
  };

  const handleEnd = () => {
    timer.current = setTimeout(() => setAutoRotate(true), delayTime); // Re-enable auto-rotate after delay
  };

  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{
        position: camPosition,
        fov: 25,
      }}
      className="relative h-svh"
    >
      <fog
        attach="fog"
        color={"#ff5100"}
        near={fogNear}
        far={fogNear * 2}
        density={0.4}
      />
      <directionalLight position={[30, 20, 5]} intensity={4} />
      <ambientLight intensity={0.5} />
      <OrbitControls
        ref={controlsRef}
        autoRotate={isAutoRotate}
        onStart={handleStart}
        onEnd={handleEnd}
        autoRotateSpeed={0.4}
        enablePan={false}
        minDistance={8}
        maxDistance={25}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2.3}
      />

      <Suspense fallback={<Loader />}>
        <Sparkles count={1000} scale={15} size={10} speed={0.5} color={"#fff"} />
        <Model />
      </Suspense>
    </Canvas>
  );
}

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <h2 className="text-4xl font-bold w-[300px] text-center text-background">
        Entering 255! {progress.toFixed(1)}%
      </h2>
    </Html>
  );
}

function Annotation({ children, ...props }) {
  return (
    <Html {...props} transform occlude="blending">
      <div className="annotation" onClick={() => console.log("Annotation clicked")}>
        {children}
      </div>
    </Html>
  );
}
