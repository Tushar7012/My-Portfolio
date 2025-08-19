// src/components/Hero.jsx

import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, Points, PointMaterial, Bounds } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

// 🔹 Nebula Background Particles
function Nebula() {
  const pointsRef = useRef();
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });
  const count = 7000;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 18;
  }
  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#FFA500"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={1.0}
      />
    </Points>
  );
}

// 🔹 3D Model with Animation
function Model(props) {
  const { scene, animations } = useGLTF("/models/optimus.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    console.log("--- AVAILABLE ANIMATIONS ---", Object.keys(actions));
    
    // --- IMPORTANT ---
    // Find an animation that looks like a dance.
    // Check your browser console for names like "Dance", "Idle_Dance", "Victory_Dance".
    const animationToPlay = "Dance"; // <-- REPLACE WITH YOUR ACTUAL ANIMATION NAME

    if (actions[animationToPlay]) {
      const action = actions[animationToPlay];
      action.reset().play();
      action.setLoop(THREE.LoopRepeat); // Set the animation to loop forever
    } else {
      console.warn(`Animation "${animationToPlay}" not found!`);
      // Fallback to the first available animation
      const firstAnimation = Object.keys(actions)[0];
      if (firstAnimation) {
        actions[firstAnimation].play();
      }
    }
  }, [actions]);

  return <primitive object={scene} {...props} />;
}


export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-black text-white grid md:grid-cols-2 gap-8 items-center px-6 md:px-12"
    >
      {/* LEFT: Headline + sub + CTAs */}
      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          From <span className="text-[#A020F0]">algorithms</span> to impact —<br />
          building <span className="text-[#A020F0]">AI</span> that matters.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/70 max-w-xl text-lg"
        >
          As an <span className="font-semibold text-white">Architect of Intelligence</span>, I design, build, and deploy clean, scalable, and ethical AI systems that transform complex data into tangible, real-world value.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex gap-3"
        >
          <a href="#projects" className="px-5 py-3 rounded-xl bg-[#A020F0] text-black font-semibold hover:opacity-90 transition">
            View My Work
          </a>
          <a href="#contact" className="px-5 py-3 rounded-xl border border-[#A020F0]/60 hover:border-[#A020F0] transition">
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* RIGHT: 3D Model + Nebula */}
      <div className="relative h-[360px] md:h-[480px] rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <Suspense fallback={null}>
            <Nebula />
            <Bounds fit clip observe margin={1.5}>
              <group scale={1.5} position={[0, -2.8, 0]}>
                <Model />
              </group>
            </Bounds>
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
        </Canvas>

        {/* --- Greeting text has been removed --- */}
        
      </div>
    </section>
  );
}
