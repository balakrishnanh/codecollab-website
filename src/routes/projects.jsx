// src/pages/Projects.tsx

import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BubbleBackground from '../bubblebackground';
import { fetchReposForUser } from '../api/fetchprojects'; // Make sure path is correct

// Define the list of projects you want to display
const projectList = [
    { username: "ptajwani", repo: "Financial-News-Sentiment-Analysis-Stock-Movement-Prediction" },
    { username: "mishtigala19", repo: "weather-event-notifier" },
    { username: "mishtigala19", repo: "codecollab-website" },
    { username: "supriyaahejib", repo: "personal-portfolio-template" },
    { username: "rbose21-05", repo: "PersonalPortfolio_CodeCollab" },
    { username: "Romaisafatima1", repo: "Cryptocurrency-Time-Series-Forecasting-Volatility-Modeling" },
];

const Projects = () => { 
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchAllProjects = async () => {
            try {
                // Use Promise.all to fetch all repositories concurrently for efficiency
                const projectData = await Promise.all(
                    projectList.map(p => fetchReposForUser(p.username, [p.repo]))
                );
                // The API returns an array for each call, so we flatten the result
                setProjects(projectData.flat());
            } catch (error) {
                console.error("Failed to fetch project data:", error);
            }
        };

        fetchAllProjects();
    }, []); // Empty dependency array ensures this runs only once on mount

    return ( 
        <div className="relative overflow-hidden">
            <BubbleBackground />
            <Navbar />
            
            <section className="min-h-screen px-6 py-16 relative z-20">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl font-semibold text-center mb-12" style={{color: '#000000'}}>Projects</h1>
                    
                    {/* The grid now maps over the state and renders the simple ProjectCard */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    )
}

export default Projects;