// src/components/ProjectCard.tsx

import React from "react";
import { Users, CodeXml } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  if (!project) return null; // Or a loading skeleton

  return (
    <motion.div
      className="flex flex-col md:flex-row rounded-2xl shadow-lg shadow-red-500/10 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease:"easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Image Section (Left Side) */}
      <div className="md:w-1/2 flex flex-col items-center justify-center p-8 bg-white min-h-[300px]">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
          {project.avatar ? (
            <motion.img src={project.avatar} alt={project.name} className="w-full h-auto max-h-[16rem] object-contain" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }} />
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <Users size={48} strokeWidth={1.5} className="text-red-800/70" />
              <div className="relative bg-white w-64 h-36 rounded-lg shadow-md flex items-center justify-center">
                <CodeXml size={72} className="text-gray-800" />
                <div className="absolute -bottom-2 w-72 h-3 bg-gray-300 rounded-b-md"></div>
              </div>
              <span className="text-3xl font-semibold text-red-800/80 tracking-wider mt-2">CodeCollab</span>
            </div>
          )}
        </a>
      </div>

      {/* Text Section (Right Side) */}
      <div className="md:w-1/2 flex flex-col items-start justify-center p-8 bg-white">
        <h3 className="text-3xl font-bold font-playfair text-gray-800 mb-3">{project.name}</h3>
        <p className="text-lg text-gray-600 mb-6">{project.description}</p>
        {project.language && (
          <p className="text-md text-gray-500 mb-6">
            <span className="font-semibold text-gray-600">Built with:</span> {project.language}
          </p>
        )}
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <span className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors">View Project →</span>
        </a>
      </div>
    </motion.div>
  );
}