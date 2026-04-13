// src/pages/Projects.tsx

import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BubbleBackground from '../bubblebackground';
import { fetchReposForUser } from '../api/fetchprojects'; // Make sure path is correct
import { projectList } from '../data/projects';

const Projects = () => { 
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchAllProjects = async () => {
            try {
                // Fetch all configured repositories and keep route metadata on each project.
                const projectData = await Promise.all(
                    projectList.map(async p => {
                        const [repoData] = await fetchReposForUser(p.owner, [p.repo]);

                        if (!repoData) {
                            return null;
                        }

                        return {
                            ...repoData,
                            owner: p.owner,
                            repo: p.repo,
                            demoImages: p.demoImages ?? [],
                        };
                    })
                );

                setProjects(projectData.filter(Boolean));
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
                    <h1 className="text-5xl font-semibold font-playfair text-center mb-12" style={{color: '#000000'}}>Projects</h1>
                    
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