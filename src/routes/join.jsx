import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BubbleBackground from '../bubblebackground';

const Join = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Bubble Background */}
            <BubbleBackground />
            
            {/* Navbar */}
            <Navbar />
            
            <section className="min-h-screen px-6 py-16 relative z-20">
                <div className="max-w-6xl mx-auto flex items-center justify-center">
                    <form 
                        action="https://formspree.io/f/myzpyabw" 
                        method="POST"
                        className="bg-[#f5f1f1] p-8 rounded-xl shadow-lg w-full max-w-md flex flex-col items-center space-y-6"
                    >
                        <h1 className="text-3xl font-bold mb-4" style={{color: '#000000'}}>Join CodeCollab</h1>
                        
                        <div className="w-full">
                            <label htmlFor="yourName" className="block text-lg mb-2" style={{color: '#000000'}}>Your Name:</label>
                            <input
                                type="text"
                                id="yourName"
                                name="name"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor="email" className="block text-lg mb-2" style={{color: '#000000'}}>Your Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="w-full">
                            <label className="block text-lg mb-3" style={{color: '#000000'}}>Interested Projects:</label>
                            <div className="space-y-2">
                                <label className="flex items-center text-base cursor-pointer" style={{color: '#000000'}}>
                                    <input
                                        type="radio"
                                        name="interestedProjects"
                                        value="option1"
                                        className="mr-2 h-4 w-4"
                                        required
                                    />
                                    Option 1
                                </label>
                                <label className="flex items-center text-base cursor-pointer" style={{color: '#000000'}}>
                                    <input
                                        type="radio"
                                        name="interestedProjects"
                                        value="option2"
                                        className="mr-2 h-4 w-4"
                                    />
                                    Option 2
                                </label>
                                <label className="flex items-center text-base cursor-pointer" style={{color: '#000000'}}>
                                    <input
                                        type="radio"
                                        name="interestedProjects"
                                        value="option3"
                                        className="mr-2 h-4 w-4"
                                    />
                                    Option 3
                                </label>
                            </div>
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full bg-[#bd7581] text-[#2d2d2d] text-xl py-3 rounded-lg shadow-md hover:bg-[#a3747e] transition-colors duration-200"
                        >
                            Submit Form
                        </button>
                    </form>
                </div>
            </section>
            
            <Footer />
        </div>
    );
}

export default Join;
