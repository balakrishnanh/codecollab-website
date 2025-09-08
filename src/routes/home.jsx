import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BubbleBackground from '../bubblebackground';

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
                    <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-black">
                        Welcome to{" "}
                        <span className="text-[#d18495]">
                            CodeCollab
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
                className="min-h-screen px-6 py-16 relative z-20"
            >
                <div>
                    <h2 className="text-5xl font-semibold text-center mb-12" style={{color: '#000000'}}>About CodeCollab</h2>
                    <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
                        <div className="bg-[#f5f1f1] p-6 md:p-8 max-w-xl text-left font-mono text-sm shadow-md ml-18">
                            <p style={{color: '#000000'}}>
                                CodeCollab is a student-led initiative at UMass where you actually build real tech projects in teams. 
                                We provide the support, mentorship, and resources you need to grow as a developer.
                            </p>
                            <p className="mt-4" style={{color: '#000000'}}>
                                Whether you're just starting out or looking to build something amazing, 
                                we're here to help you turn your ideas into reality.
                            </p>
                        </div>

                        <img
                            src="/codeLogo.png"
                            alt="CodeCollab Logo"
                            className="w-72 h-auto rounded-md shadow-md"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home;
