import React from 'react';
import { motion } from 'framer-motion';

// Project data from GitHub repos
const projectsData = [
  {
    id: 1,
    title: 'The Neural Navigator',
    description: 'A multi-modal neural network that takes a 128x128 RGB map image combined with text commands (e.g., "Go to the Red Circle") and predicts a sequence of 10 (x,y) coordinates representing the navigation path.',
    longDescription: 'Built from scratch implementing CNN for visual feature extraction and text embeddings for command understanding, achieving precise coordinate predictions for autonomous navigation tasks.',
    tags: ['PyTorch', 'CNN', 'Multi-Modal AI', 'Computer Vision', 'NLP'],
    github: 'https://github.com/Tushar7012/The-Neural-Navigator',
    featured: true,
    icon: '🧭',
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    id: 2,
    title: 'DebateAI',
    description: 'A real-time debate platform featuring User vs User and User vs AI debates with WebRTC for audio/video/text communication, LLM-generated counterarguments, and custom debate rooms.',
    longDescription: 'Contributed to AOSSIE open-source organization. Features structured debate formats (opening, cross-exam, closing), real-time WebSocket communication, and intelligent AI opponents that adapt to user arguments.',
    tags: ['WebRTC', 'WebSockets', 'LLM', 'React', 'MongoDB', 'Node.js'],
    github: 'https://github.com/Tushar7012/DebateAI',
    featured: true,
    icon: '🎭',
    gradient: 'from-cyan-500 to-purple-500',
  },
  {
    id: 3,
    title: 'Voice-First Government Assistant',
    description: 'A Hindi voice-first assistant helping citizens discover government schemes. Features an agentic workflow with Planner-Executor-Evaluator loop and smart scheme matching.',
    longDescription: 'Built with Sarvam AI for STT/TTS, Groq for LLM inference. Implements rule-based eligibility engine combined with vector search for semantic retrieval, with multi-turn conversation memory.',
    tags: ['LangGraph', 'Sarvam AI', 'Groq', 'STT/TTS', 'Agentic AI', 'Hindi NLP'],
    github: 'https://github.com/Tushar7012/Cred_Voice-Assistant',
    featured: true,
    icon: '🇮🇳',
    gradient: 'from-orange-500 to-pink-500',
  },
  {
    id: 4,
    title: 'Leave Assistant Agent',
    description: 'A multi-agent HR assistant with three specialized AI agents (Data, Policy, Email) working together via LangGraph orchestration for intelligent leave management.',
    longDescription: 'Features a modern Next.js 14 frontend with streaming support, glassmorphism UI design, and real-time chat interface. Agents coordinate to handle complex HR queries autonomously.',
    tags: ['LangGraph', 'Next.js 14', 'Multi-Agent', 'FastAPI', 'Streaming'],
    github: 'https://github.com/Tushar7012/Leave-Assistant-Agent',
    featured: false,
    icon: '📋',
    gradient: 'from-green-500 to-cyan-500',
  },
  {
    id: 5,
    title: 'Visa Prediction MLOps',
    description: 'An end-to-end MLOps pipeline for visa certification prediction featuring modular Python packages, DVC for data versioning, MLflow for experiment tracking, and Docker containerization.',
    longDescription: 'Complete production-ready ML system with automated training pipelines, model versioning, API deployment via FastAPI/Streamlit, and cloud deployment configurations for AWS.',
    tags: ['Docker', 'MLflow', 'DVC', 'AWS', 'FastAPI', 'Streamlit'],
    github: 'https://github.com/Tushar7012/Visa_Prediction_MLOperation',
    featured: false,
    icon: '✈️',
    gradient: 'from-blue-500 to-indigo-500',
  },
];

// GitHub icon
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

// External link icon
const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

// Featured Project Card (larger)
const FeaturedProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative glass-card overflow-hidden"
  >
    {/* Gradient top border */}
    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg`}>
            {project.icon}
          </div>
          <div>
            <span className="px-2 py-1 text-xs font-medium bg-cyber-purple-500/20 text-cyber-purple-400 rounded-full">
              Featured
            </span>
            <h3 className="text-2xl font-display font-bold text-white mt-1 group-hover:text-cyber-purple-400 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-cyber-purple-500/50 hover:bg-cyber-purple-500/10 transition-all duration-300"
        >
          <GithubIcon />
        </a>
      </div>

      {/* Description */}
      <p className="text-white/70 leading-relaxed mb-4">
        {project.description}
      </p>
      <p className="text-white/50 text-sm leading-relaxed mb-6">
        {project.longDescription}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-lg text-white/70 hover:border-cyber-purple-500/30 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-cyber-purple-400 font-medium hover:text-cyber-purple-300 transition-colors group/link"
      >
        <span>View on GitHub</span>
        <ExternalLinkIcon />
      </a>
    </div>

    {/* Hover glow effect */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${project.gradient} blur-3xl -z-10`} style={{ opacity: 0.05 }} />
  </motion.div>
);

// Regular Project Card
const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group glass-card glass-card-hover p-6 flex flex-col h-full"
  >
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-xl`}>
        {project.icon}
      </div>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all duration-300"
      >
        <GithubIcon />
      </a>
    </div>

    {/* Title */}
    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-cyber-purple-400 transition-colors">
      {project.title}
    </h3>

    {/* Description */}
    <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
      {project.description}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-1.5 mb-4">
      {project.tags.slice(0, 4).map((tag) => (
        <span
          key={tag}
          className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded text-white/60"
        >
          {tag}
        </span>
      ))}
      {project.tags.length > 4 && (
        <span className="px-2 py-1 text-xs text-white/40">
          +{project.tags.length - 4}
        </span>
      )}
    </div>

    {/* Link */}
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm text-cyber-purple-400 font-medium hover:text-cyber-purple-300 transition-colors"
    >
      <span>View Project</span>
      <ExternalLinkIcon />
    </a>
  </motion.div>
);

export default function Projects() {
  const featuredProjects = projectsData.filter(p => p.featured);
  const otherProjects = projectsData.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyber-purple-400 font-medium text-sm uppercase tracking-wider">
            My Work
          </span>
          <h2 className="section-title gradient-text-purple mt-2">
            Featured Projects
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            A collection of AI/ML projects showcasing my expertise in building intelligent systems,
            from multi-modal neural networks to production-ready MLOps pipelines.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-xl font-display font-semibold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-cyber-cyan rounded-full" />
            More Projects
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Tushar7012?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <GithubIcon />
            <span>View All Projects on GitHub</span>
          </a>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
