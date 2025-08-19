// src/components/Projects.jsx

import React from 'react';
import { motion } from 'framer-motion';

// --- Custom, Attractive SVG Icons for AI/ML Projects ---
// These must be defined BEFORE the main Projects component.

const TransformerIcon = () => (
  <svg className="w-16 h-16 mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v8m-4-4h8" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.929 4.929l1.414 1.414M17.657 17.657l1.414 1.414M4.929 19.071l1.414-1.414M17.657 6.343l1.414-1.414" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12h-2M5 12H3M12 21v-2M12 5V3" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const AITripPlannerIcon = () => (
    <svg className="w-16 h-16 mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13v-6m0 6h6m-6 0L9 7m6 13l5.447 2.724A1 1 0 0021 20.382V9.618a1 1 0 00-1.447-.894L15 11m0 9v-6m0 6H9m0-6l6-4m-6 0l6 4" />
    </svg>
);

const FaceMeshIcon = () => (
  <svg className="w-16 h-16 mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18V6" />
  </svg>
);

const BookRecommenderIcon = () => (
    <svg className="w-16 h-16 mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 6V4m8 2V4m-8 16v-2m8 2v-2"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l-2-2 2-2 2 2-2 2z"></path>
    </svg>
);

const ChestCancerIcon = () => (
    <svg className="w-16 h-16 mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 12.572l-7.5 4.33-7.5-4.33m15 0V7.428l-7.5-4.33-7.5 4.33v5.144z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22v-6"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12l7.5-4.33"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 7.67L12 12"></path>
    </svg>
);

const RagIcon = () => (
    <svg className="w-16 h-16 mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10a2 2 0 002 2h12a2 2 0 002-2V7M16 7a4 4 0 00-8 0"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11h.01"></path>
    </svg>
);

const JobRecommenderIcon = () => (
    <svg className="w-16 h-16 mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
);

const VehicleInsuranceIcon = () => (
    <svg className="w-16 h-16 mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l5.318-5.318a2.25 2.25 0 013.182 0l5.318 5.318a12.02 12.02 0 00-1.382-9.04z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
);

const ZomatoChatbotIcon = () => (
    <svg className="w-16 h-16 mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 15a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h3l2-3h4l2 3h3a2 2 0 012 2z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12a3 3 0 110-6 3 3 0 010 6z"></path>
    </svg>
);


// --- Main Projects Component ---
export default function Projects() {
  const projectData = [
    {
      title: 'Transformer Model from Scratch',
      description: "A from-scratch implementation of the original Transformer model from the 'Attention Is All You Need' research paper, exploring the core mechanisms of self-attention.",
      tags: ['Python', 'TensorFlow', 'NumPy'],
      icon: <TransformerIcon />,
      link: 'https://github.com/Tushar7012/Attention-is-all-you-Need-Research-Paper-Implementation',
    },
    {
      title: 'AI-Powered Trip Planner',
      description: 'A generative AI application that creates personalized travel itineraries using Google\'s Gemini Pro, built with a modern Python backend and a React frontend.',
      tags: ['LangGraph', 'LangChain', 'Streamlit', 'FastAPI'],
      icon: <AITripPlannerIcon />,
      link: 'https://github.com/Tushar7012/AI-TRIP-PLANNER',
    },
    {
      title: 'Face Mesh Application',
      description: 'A real-time face mesh application that detects facial landmarks and applies filters using Mediapipe and OpenCV.',
      tags: ['Mediapipe', 'OpenCV', 'Computer Vision'],
      icon: <FaceMeshIcon />,
      link: 'https://github.com/Tushar7012/Facial-Detection',
    },
    {
      title: 'End-to-End Chest Cancer Classification',
      description: 'A deep learning project utilizing a CNN architecture with an end-to-end DVC pipeline for classifying chest cancer from medical images.',
      tags: ['CNN', 'DVC', 'MLflow', 'AWS'],
      icon: <ChestCancerIcon />,
      link: 'https://github.com/Tushar7012/End-to-End-Chest-Cancer-Classification-Project',
    },
    {
      title: 'AI-Powered Job Recommender System',
      description: 'An intelligent system that recommends job opportunities by leveraging Multiple Candidate Paradigms (MCP) for enhanced matching accuracy.',
      tags: ['Python', 'NLP', 'Streamlit', 'Heroku'],
      icon: <JobRecommenderIcon />,
      link: 'https://github.com/Tushar7012/AI-Powered-Job-Recommender-System-with-MCP',
    },
    {
      title: 'End-to-End RAG Application',
      description: 'A complete Retrieval-Augmented Generation (RAG) application that enhances language model responses with external knowledge.',
      tags: ['RAG', 'LLM', 'MongoDB', 'FastAPI'],
      icon: <RagIcon />,
      link: 'https://github.com/Tushar7012/End-to-End-RAG-Application',
    },
    {
      title: 'Book Recommender System',
      description: 'A collaborative filtering-based recommender system that suggests books to users based on their reading history and preferences.',
      tags: ['Python', 'Pandas', 'Scikit-learn'],
      icon: <BookRecommenderIcon />,
      link: 'https://github.com/Tushar7012/Book-Recommender-System',
    },
    {
      title: 'Vehicle Insurance MLOps Pipeline',
      description: 'An end-to-end MLOps project for predicting vehicle insurance claims, featuring a complete DVC pipeline and deployment on AWS.',
      tags: ['Docker', 'DVC', 'MLflow', 'AWS'],
      icon: <VehicleInsuranceIcon />,
      link: 'https://github.com/Tushar7012/Vehicle_Insurance_MLOps',
    },
    {
      title: 'Zomato Restaurant Chatbot',
      description: 'A conversational AI chatbot that provides restaurant recommendations, leveraging a RAG pipeline with Llama2 and Langchain for intelligent, context-aware responses.',
      tags: ['Chainlit', 'Groq'],
      icon: <ZomatoChatbotIcon />,
      link: 'https://github.com/Tushar7012/Zomato-Chatbot',
    }
  ];

  return (
    <section id="projects" className="min-h-screen w-full bg-black text-white py-20 px-6 md:px-12">
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
            My Projects
          </span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative flex flex-col p-8 bg-black/50 border border-white/10 rounded-2xl transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {project.icon}
              <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-white/70 mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-white/10 text-purple-300 text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-5 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors duration-300"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
