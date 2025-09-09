// src/components/MemberCard.tsx
import React from 'react';
import { Link } from '@tanstack/react-router';
import { Github } from 'lucide-react'; 
import { motion } from 'framer-motion';

export default function MemberCard({ member }) {
    const { slug, name, avatar, github, position, year, major, minors } = member;
    
    return (
        <motion.div 
            className="bg-white/50 backdrop-blur-sm border rounded-2xl shadow-lg shadow-red-500/5 p-6 w-full max-w-sm flex flex-col items-center text-center transition-transform transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease:"easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
        >
            
            {/* Avatar */}
            <Link to={`/members/${slug}`}>
                <img 
                    src={avatar} 
                    alt={`${name}'s avatar`} 
                    className="w-28 h-28 rounded-full object-cover mb-4 shadow-md border-2 border-white"
                />
            </Link>
            
            {/* Name */}
            <h2 className="text-2xl font-bold text-gray-800">
                <Link to={`/members/${slug}`} className="hover:text-red-700">
                    {name}
                </Link>
            </h2>
            
            {/* Position */}
            <p className="text-md font-medium text-red-600 mb-3">{position}</p>
            
            {/* Academic Info */}
            <div className="text-sm text-gray-600 border-t border-gray-200 pt-3 mt-3 w-full">
                <p>
                    <span className="font-semibold">Year:</span> {year}
                </p>
                <p>
                    <span className="font-semibold">Major:</span> {major}
                </p>
                {minors && ( // Conditionally render minors if they exist
                    <p>
                        <span className="font-semibold">Minors:</span> {minors}
                    </p>
                )}
            </div>
            
            {/* GitHub Link */}
            {github && (
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                >
                    <Github size={16} />
                    GitHub Profile
                </a>
            )}
        </motion.div>
    );
}