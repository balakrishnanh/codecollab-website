import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BubbleBackground from '../bubblebackground';

const Projects = () => { 
    return ( 
        <div className="relative overflow-hidden">
            {/* Bubble Background */}
            <BubbleBackground />
            
            {/* Navbar */}
            <Navbar />
            
            <section className="min-h-screen px-6 py-16 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl font-semibold text-center mb-12" style={{color: '#000000'}}>Projects</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <ProjectCard
                            username="ptajwani"
                            repos={["Financial-News-Sentiment-Analysis-Stock-Movement-Prediction"]}
                        />
                        <ProjectCard username="mishtigala19" repos={["weather-event-notifier"]} />
                        <ProjectCard username="mishtigala19" repos={["codecollab-website"]}/> 
                        <ProjectCard username="supriyaahejib" repos={["personal-portfolio-template"]} />
                        <ProjectCard username="rbose21-05" repos={["PersonalPortfolio_CodeCollab"]} />
                        <ProjectCard username="Romaisafatima1" repos={["Cryptocurrency-Time-Series-Forecasting-Volatility-Modeling"]} />
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    )
}

export default Projects;
