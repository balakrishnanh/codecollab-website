import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BubbleBackground from '../bubblebackground';
import { Typewriter } from "react-simple-typewriter"

const Home = () => { 
    return ( 
        <div className="relative overflow-hidden">
            {/* Bubble Background */}
            <BubbleBackground />
            
            {/* Navbar */}
            <Navbar />

            {/* Landing Page Section */}
            <section
                id="home"
                className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10"
            >
                <div>
                    <h1 className="text-6xl font-extrabold font-playfair mb-6 tracking-tight text-black">
                        Welcome to{" "}
                        <span className="text-[#d18495]">
                            <Typewriter
                                words={[
                                "CodeCollab",
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>
                </div>

                {/* Arrow */}
                <div className="mt-24">
                    <a href="#about" className="animate-bounce text-3xl text-[#a3747e]">
                        ↓
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="bg-white text-[#2d2d2d] min-h-screen px-6 py-16 relative z-20"
            >
                <div>
                    <h2 className="text-5xl font-semibold font-playfair text-center mb-12" style={{color: '#000000'}} id="about">About CodeCollab</h2>
                    <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
                        <div className="bg-[#f5f1f1] p-6 md:p-8 max-w-xl text-left font-mono text-sm shadow-md ml-18">
                            <p style={{color: '#000000'}}>
                                A student-led initiative at UMass Amherst <br></br>
                                🤝 Build hands-on coding projects in small teams <br></br>
                                🎯 Designed for all skill levels — beginner, intermediate, and advanced <br></br>
                                <strong>📈 Focused on: </strong>
                            </p>
                                <ul className="list-disc list-inside space-y-1 text-black">
                                    <li>Technical skill-building</li>
                                    <li> Resume development</li>
                                    <li> Peer collaboration</li>
                                    <li> Project-based learning</li>
                                </ul>

                        </div>

                        <img
                            src="/assets/codeLogo.png"
                            alt="CodeCollab Logo"
                            className="w-72 h-auto rounded-md shadow-md"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl mx-auto py-16">
                        {/* Why we started */}
                        <div className="flex flex-col items-center flex-1">
                            <h3 className="font-semibold font-playfair text-3xl text-center m-4">
                            Why we Started CodeCollab?
                            </h3>
                            <div className="bg-[#f5f1f1] p-6 md:p-8 max-w-xl text-left font-mono text-sm shadow-md rounded-2xl">
                                {/* <strong>We noticed a gap:</strong> */}
                                <ul className="list-disc list-inside space-y-1 text-black">
                                    <li>Students often struggle to start projects on their own</li>
                                    <li>Lack of structure makes it hard to stay motivated</li>
                                    <li>Intimidating to work solo or without guidance</li>
                                </ul>
                            </div>
                        </div>

                        {/* What do we do */}
                        <div className="flex flex-col items-center flex-1">
                            <h3 className="font-semibold font-playfair text-3xl text-center m-4">
                            What do we do?
                            </h3>
                            <div className="bg-[#f5f1f1] p-6 md:p-8 max-w-xl text-left font-mono text-sm shadow-md rounded-2xl">
                            <ul className="list-disc list-inside space-y-1 text-black">
                                <li>Offer pre-scoped, beginner-friendly project ideas</li>
                                <li>Provide structure, timelines, and team support</li>
                                <li>Help you complete something real, not just start it</li>
                            </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home;
