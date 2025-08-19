
import React from 'react';
import { motion } from 'framer-motion';

// --- Main Experience Component ---
export default function Experience() {
  const experienceData = [
    {
      role: 'AI Engineer',
      company: 'Naada Technology',
      date: 'August 2025 - Present',
      description: [
        'Architected and deployed scalable MLOps pipelines on AWS, reducing model deployment time by 40%.',
        'Developed and fine-tuned deep learning models for computer vision tasks, achieving a 95% accuracy rate.',
        'Collaborated with cross-functional teams to integrate AI features into flagship products, impacting over 1 million users.',
        'Optimized data processing workflows, resulting in a 30% improvement in data handling efficiency.',
      ],
    },
    {
      role: 'Python Developer Intern',
      company: 'Preplabs',
      date: 'August 2023 - September 2023',
      description: [
        'Developed and maintained RESTful APIs using Flask to support front-end application features.',
        'Wrote automation scripts to streamline data processing and daily operational tasks.',
        'Assisted in database management and schema design with PostgreSQL.',
        'Collaborated with senior developers on backend feature development and bug fixes.',
      ],
    },
  ];

  return (
    <section id="experience" className="w-full bg-black text-white py-20 px-6 md:px-12">
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
            Work Experience
          </span>
        </motion.h2>

        {/* --- Experience Timeline --- */}
        <div className="relative max-w-3xl mx-auto">
          {/* The vertical line */}
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-white/10"></div>
          
          {experienceData.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative pl-12 md:pl-0 mb-12"
            >
              <div className="md:absolute md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-black border-2 border-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto md:text-left'}`}>
                <p className="text-purple-400 font-semibold">{job.date}</p>
                <h3 className="text-2xl font-bold mt-1">{job.role}</h3>
                <p className="text-white/80 font-medium text-lg">{job.company}</p>
                <ul className="list-disc list-inside text-white/70 mt-4 space-y-2">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
