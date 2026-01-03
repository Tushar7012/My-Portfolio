import React from 'react';
import { motion } from 'framer-motion';

// Experience data
const experienceData = [
  {
    role: 'AI Engineer',
    company: 'Naada Technology',
    date: 'July 2025 - Present',
    type: 'Full-time',
    description: [
      'Architected and deployed scalable MLOps pipelines on AWS, reducing model deployment time by 40%',
      'Developed and fine-tuned deep learning models for computer vision tasks, achieving 95% accuracy',
      'Collaborated with cross-functional teams to integrate AI features into flagship products',
      'Optimized data processing workflows, resulting in 30% improvement in handling efficiency',
    ],
    skills: ['PyTorch', 'AWS', 'MLOps', 'Computer Vision'],
    current: true,
  },
  {
    role: 'Python Developer Intern',
    company: 'Preplabs',
    date: 'August 2023 - September 2023',
    type: 'Internship',
    description: [
      'Developed and maintained RESTful APIs using Flask for front-end application features',
      'Created automation scripts to streamline data processing and operational tasks',
      'Assisted in database management and schema design with PostgreSQL',
      'Collaborated with senior developers on backend feature development and bug fixes',
    ],
    skills: ['Python', 'Flask', 'PostgreSQL', 'REST APIs'],
    current: false,
  },
];

// Timeline dot component
const TimelineDot = ({ current }) => (
  <div className="relative">
    <div className={`w-4 h-4 rounded-full border-2 ${current
      ? 'bg-cyber-purple-500 border-cyber-purple-400 shadow-lg shadow-cyber-purple-500/50'
      : 'bg-cyber-dark border-white/20'
      }`} />
    {current && (
      <div className="absolute inset-0 w-4 h-4 rounded-full bg-cyber-purple-500 animate-ping opacity-50" />
    )}
  </div>
);

// Experience Card
const ExperienceCard = ({ experience, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="relative flex gap-6 md:gap-8"
  >
    {/* Timeline Line and Dot */}
    <div className="flex flex-col items-center">
      <TimelineDot current={experience.current} />
      {!isLast && (
        <div className="w-0.5 h-full bg-gradient-to-b from-white/10 to-transparent min-h-[200px]" />
      )}
    </div>

    {/* Content Card */}
    <div className="flex-1 pb-12">
      <div className="glass-card glass-card-hover p-6 md:p-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {experience.current && (
                <span className="px-2 py-0.5 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
                  Current
                </span>
              )}
              <span className="text-sm text-white/50">{experience.type}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white">
              {experience.role}
            </h3>
            <p className="text-cyber-purple-400 font-medium">{experience.company}</p>
          </div>
          <span className="text-sm text-white/50 bg-white/5 px-3 py-1.5 rounded-lg">
            {experience.date}
          </span>
        </div>

        {/* Description */}
        <ul className="space-y-2 mb-6">
          {experience.description.map((item, i) => (
            <li key={i} className="flex gap-3 text-white/70 text-sm md:text-base">
              <span className="text-cyber-purple-400 mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-xs font-medium bg-cyber-purple-500/10 border border-cyber-purple-500/30 text-cyber-purple-300 rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyber-purple-400 font-medium text-sm uppercase tracking-wider">
            My Journey
          </span>
          <h2 className="section-title gradient-text-purple mt-2">
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={index}
              experience={exp}
              index={index}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>

        {/* Education / Additional Info (Optional) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 glass-card p-6 text-center"
        >
          <div className="flex items-center justify-center gap-4 text-white/60">
            <span className="text-2xl">🎓</span>
            <div>
              <p className="text-white font-medium">Continuous Learner</p>
              <p className="text-sm">Always exploring the latest in AI/ML research and technologies</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyber-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
