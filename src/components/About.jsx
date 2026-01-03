import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile-pic.jpeg';

// Stats data
const stats = [
  { value: '5+', label: 'Projects Shipped' },
  { value: '1', label: 'Year Experience' },
  { value: '10+', label: 'Technologies' },
];

// Skills organized by category
const skillCategories = [
  {
    title: 'AI / ML',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'OpenAI'],
  },
  {
    title: 'LLM & Agents',
    skills: ['LangChain', 'LangGraph', 'RAG', 'Fine-tuning', 'Prompt Engineering'],
  },
  {
    title: 'MLOps & Cloud',
    skills: ['Docker', 'AWS', 'MLflow', 'DVC', 'FastAPI'],
  },
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'SQL', 'Bash'],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 md:px-8">
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
            Get to know me
          </span>
          <h2 className="section-title gradient-text-purple mt-2">
            About Me
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Profile Card - Large */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass-card glass-card-hover p-8"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-cyber-purple-500/30">
                  <img
                    src={profilePic}
                    alt="Tushar Das"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-2 rounded-2xl border border-cyber-purple-500/20 animate-pulse" />
              </div>

              {/* Bio Text */}
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-display font-bold text-white">
                  Tushar Das
                </h3>
                <p className="text-white/70 leading-relaxed">
                  I'm an <span className="text-white font-medium">AI Engineer</span> who architects
                  intelligent systems that bridge the gap between raw data and tangible business impact.
                  My expertise spans the entire ML lifecycle — from developing complex models to deploying
                  robust, scalable solutions in production.
                </p>
                <p className="text-white/60 leading-relaxed">
                  I specialize in <span className="text-cyber-purple-400">LLM applications</span>,
                  <span className="text-cyber-cyan"> multi-agent systems</span>, and
                  <span className="text-cyber-magenta"> end-to-end MLOps pipelines</span>.
                  When I'm not training models, I'm exploring the latest in AI research.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card glass-card-hover p-6 flex flex-col justify-center"
          >
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-display font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid - Full Width */}
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-card glass-card-hover p-6"
            >
              <h4 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyber-purple-400 rounded-full" />
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white/80 hover:border-cyber-purple-500/50 hover:bg-cyber-purple-500/10 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* What I Do Card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass-card glass-card-hover p-6"
          >
            <h4 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-cyber-cyan rounded-full" />
              What I Bring to the Table
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-2xl mb-2">🤖</div>
                <h5 className="font-semibold text-white mb-1">AI Solutions</h5>
                <p className="text-sm text-white/60">Custom LLM applications and intelligent agents</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-2xl mb-2">🔄</div>
                <h5 className="font-semibold text-white mb-1">MLOps</h5>
                <p className="text-sm text-white/60">Production-grade pipelines and deployment</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="font-semibold text-white mb-1">Data Science</h5>
                <p className="text-sm text-white/60">Deep analysis and predictive modeling</p>
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            variants={itemVariants}
            className="glass-card glass-card-hover p-6 flex flex-col justify-center items-center text-center"
          >
            <div className="text-4xl mb-3">📍</div>
            <h4 className="text-lg font-display font-semibold text-white mb-1">Based in</h4>
            <p className="text-white/60">India</p>
            <p className="text-sm text-cyber-purple-400 mt-2">Remote Friendly</p>
          </motion.div>

        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
