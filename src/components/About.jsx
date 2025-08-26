// src/components/About.jsx

import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile-pic.jpeg'; 

// --- Comprehensive Skill Icons ---
const PythonIcon = () => (
  <svg className="w-16 h-16 text-blue-400" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M57.981 128H28.633a10.42 10.42 0 0 1-10.42-10.42V88.233h39.768a10.42 10.42 0 0 0 10.42-10.42V10.42A10.42 10.42 0 0 1 78.821 0h19.812a10.42 10.42 0 0 1 10.42 10.42v29.348H70.285a10.42 10.42 0 0 0-10.42 10.42v38.045a10.42 10.42 0 0 1-10.42 10.42H28.633v18.907a10.42 10.42 0 0 0 10.42 10.42h18.928z"/><path fill="#FFD43B" d="M70.019 0h29.348a10.42 10.42 0 0 1 10.42 10.42v29.348H70.019a10.42 10.42 0 0 0-10.42 10.42v67.392A10.42 10.42 0 0 1 49.179 128H29.367a10.42 10.42 0 0 1-10.42-10.42V88.233h39.768a10.42 10.42 0 0 0 10.42-10.42V10.42A10.42 10.42 0 0 1 79.255 0h-9.236z"/></svg>
);
const TensorFlowIcon = () => (
    <svg className="w-16 h-16 text-orange-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.13 14.89l-2.1 2.1-5.04-5.05 2.1-2.1 2.94 2.95zm4.24-4.24l2.1-2.1-5.04-5.05-2.1 2.1 5.04 5.05zm-8.48 0l-2.1 2.1-2.9-2.9 2.1-2.1 2.9 2.9zM12 22.45l-5.04-5.04 2.1-2.1 2.94 2.94 2.94-2.94 2.1 2.1-5.04 5.04zM14.89 9.81l-2.1-2.1-2.9 2.9 2.1 2.1 2.9-2.9z"/></svg>
);
const PyTorchIcon = () => (
    <svg className="w-16 h-16 text-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.58 3.35a2.99 2.99 0 0 0-4.16 0L3.35 8.42a3 3 0 0 0 0 4.16l5.07 5.07a3 3 0 0 0 4.16 0l5.07-5.07a3 3 0 0 0 0-4.16l-5.07-5.07zM12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-3.5-3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>
);
const ScikitLearnIcon = () => (
    <svg className="w-16 h-16 text-orange-400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="48" fill="#F7931E"/><path d="M50 18.75l-17.5 10v20l17.5 10 17.5-10v-20z" fill="#fff"/><circle cx="50" cy="75" r="12.5" fill="#34A853"/></svg>
);
const LangchainIcon = () => (
    <svg className="w-16 h-16 text-yellow-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
);
const HuggingFaceIcon = () => (
    <svg className="w-16 h-16 text-yellow-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3.5-9c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm7 0c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-3.5 4c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>
);
const DockerIcon = () => (
    <svg className="w-16 h-16 text-blue-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M22.1 8.25c-.33-1.92-1.3-3.6-2.6-4.82a7.66 7.66 0 0 0-5.35-2.23H4.85c-.3 0-.55.25-.55.55v2.75c0 .3.25.55.55.55h10.45c1.65 0 3 1.35 3 3s-1.35 3-3 3H3.85c-.3 0-.55.25-.55.55v2.75c0 .3.25.55.55.55h9.9c1.65 0 3 1.35 3 3s-1.35 3-3 3H2.85c-.3 0-.55.25-.55.55V21.2c0 .3.25.55.55.55h7.3c2.05 0 3.95-.8 5.35-2.23 1.3-1.22 2.27-2.9 2.6-4.82.25-1.4.25-2.85 0-4.25zM8.85 7.2h-3V5h3v2.2zM12.4 7.2h-2.7V5h2.7v2.2zM8.85 12h-3V9.8h3V12z"/></svg>
);
const AWSIcon = () => (
    <svg className="w-16 h-16 text-orange-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.3 14.5c-1.8-1.1-3-2.6-3.8-4.3h7.1c-.2.6-.5 1.1-.9 1.6-1.1 1.2-2.5 1.8-4.4 2.7zm-2.8-5.3c.1-.2.2-.4.3-.6.8-1.3 2-2.3 3.5-2.9.2-.1.4-.1.6-.2-2.3-.2-4.4 1.1-5.5 3.1-.1.2-.2.4-.3.6h1.4zM21.9 13c-.3 1.9-1.2 3.6-2.5 4.9-1.5 1.5-3.5 2.4-5.7 2.4-2.7 0-5.1-1.3-6.6-3.4-.1-.2-.2-.4-.3-.6l1.3-.8c.1.2.2.4.4.6 1.1 1.5 2.8 2.4 4.7 2.4 1.6 0 3.1-.6 4.2-1.7s1.7-2.6 1.7-4.2c0-1.1-.3-2.1-.9-3-.4-.6-.9-1.1-1.5-1.5-1.7-1.1-3.7-1.3-5.6-.6-1.1.4-2.1 1.1-2.9 2-.5.5-.9 1.1-1.2 1.8h-.1c-.1-.3-.1-.6-.1-.9 0-2.3 1.2-4.3 3-5.5 1.6-1.1 3.5-1.5 5.4-1.2.2 0 .4 0 .6.1.2 0 .4.1.6.1 1.7.3 3.2 1.2 4.2 2.6.8 1.1 1.3 2.4 1.3 3.8 0 .3 0 .6-.1.9z"/></svg>
);
const KubernetesIcon = () => (
    <svg className="w-16 h-16 text-blue-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7zm3-4h4v2h-4z"/></svg>
);
const JenkinsIcon = () => (
    <svg className="w-16 h-16 text-gray-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
);
const DVCIcon = () => (
    <svg className="w-16 h-16 text-indigo-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
);
const FastAPIIcon = () => (
    <svg className="w-16 h-16 text-green-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
);

// --- Main About Component ---
export default function About() {
  const skills = [
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'TensorFlow', icon: <TensorFlowIcon /> },
    { name: 'PyTorch', icon: <PyTorchIcon /> },
    { name: 'Scikit-learn', icon: <ScikitLearnIcon /> },
    { name: 'Langchain', icon: <LangchainIcon /> },
    { name: 'Hugging Face', icon: <HuggingFaceIcon /> },
    { name: 'Docker', icon: <DockerIcon /> },
    { name: 'Kubernetes', icon: <KubernetesIcon /> },
    { name: 'Jenkins', icon: <JenkinsIcon /> },
    { name: 'DVC', icon: <DVCIcon /> },
    { name: 'AWS', icon: <AWSIcon /> },
    { name: 'FastAPI', icon: <FastAPIIcon /> },
  ];

  const timelineEvents = [
    { year: '2023', title: 'Beginning the Journey', description: 'Started my deep dive into computer science and Python, laying the foundation for a future in AI.' },
    { year: '2024', title: 'First AI Project', description: 'Developed a neural network for image recognition, solidifying my passion for machine learning.' },
    { year: 'Present', title: 'AI Engineer', description: 'Architecting and deploying scalable AI solutions that drive business value and solve real-world problems.' },
  ];

  return (
    <section id="about" className="min-h-screen w-full bg-black text-white py-20 px-6 md:px-12">
      <div className="container mx-auto">
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            About Me
          </span>
        </motion.h2>

        {/* Bio and Image Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-white/80"
          >
            <p>
              Hello! I'm <span className="font-bold text-white">Tushar Das</span>, an AI Engineer who architects intelligent systems that bridge the gap between raw data and tangible business impact. My expertise lies not just in developing complex machine learning models, but in the entire MLOps lifecycle—ensuring models are robust, scalable, and successfully deployed into production.
            </p>
            <p>
              My approach is grounded in a deep understanding of both software engineering principles and advanced statistical modeling. I specialize in transforming theoretical AI concepts into high-performance applications, focusing on creating systems that are not only accurate but also efficient and maintainable.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80">
              <img 
                src={profilePic} 
                alt="Tushar Das"
                className="rounded-full object-cover w-full h-full"
              />
              <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-purple-500/50 animate-pulse"></div>
            </div>
          </motion.div>
        </div>

        {/* --- UPDATED: Scrolling Tech Stack Section --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">My Tech Stack</h3>
          <div className="relative w-full overflow-hidden bg-black/50 py-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <motion.div
              className="flex gap-12"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                ease: 'linear',
                duration: 25,
                repeat: Infinity,
              }}
            >
              {/* We render the skills twice for a seamless loop */}
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center w-32">
                  {skill.icon}
                  <span className="mt-2 text-lg font-semibold text-white/80">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-white/10"></div>
          {timelineEvents.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              className={`relative mb-12 flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <p className="text-purple-400 font-semibold">{event.year}</p>
                <h3 className="text-xl font-bold mt-1">{event.title}</h3>
                <p className="text-white/70 mt-2">{event.description}</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
