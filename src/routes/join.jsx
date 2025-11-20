import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BubbleBackground from '../bubblebackground';
import { Send } from 'lucide-react';

const Join = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Background and Navigation */}
            <BubbleBackground />
            <Navbar />
            
            <section className="min-h-screen px-6 py-16 relative z-20 flex items-center justify-center">
                <div className="max-w-4xl mx-auto w-full">
                    <h1 className="text-5xl font-semibold font-playfair text-center mb-4 text-black">
                        Join the Fall Project Cycle!
                    </h1>
                    <p className="text-center text-lg text-gray-600 mb-8">
                        Apply to be a part of our collaborative projects.
                    </p>
                    
                    {/* Main Form Card */}
                    
                    <form 
                        action="https://formspree.io/f/myzpyabw" 
                        method="POST"
                        className="bg-white/60 backdrop-blur-sm border border-red-100 rounded-2xl shadow-xl shadow-red-500/10 p-8 md:p-12 w-full max-w-2xl mx-auto space-y-6"
                    >
                        <p className="block text-3xl font-medium mb-2 text-gray-700 text-center font-playfair">Google Form Closed!<br /> Check Back in Spring Semester</p>
                        {/* Name Input
                        <div className="w-full">
                            <label htmlFor="yourName" className="block text-lg font-medium mb-2 text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="yourName"
                                name="name"
                                required
                                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                                placeholder="Enter your name"
                            />
                        </div> */}

                        {/* Email Input */}
                        {/* <div className="w-full">
                            <label htmlFor="email" className="block text-lg font-medium mb-2 text-gray-700">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                                placeholder="Enter your UMass email"
                            />
                        </div> */}

                        {/* Interested Projects Radio Buttons */}
                        {/* <div className="w-full">
                            <label className="block text-lg font-medium mb-3 text-gray-700">
                                Interested Projects (Select one)
                            </label>
                            <div className="space-y-3"> */}
                                {/* Option 1 */}
                                {/* <label className="flex items-center text-base cursor-pointer p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-200 transition">
                                    <input
                                        type="radio"
                                        name="interestedProjects"
                                        value="Project Option 1"
                                        className="mr-3 h-5 w-5 accent-red-600"
                                        required
                                    />
                                    <span className="text-gray-800">Project Option 1</span>
                                </label> */}
                                {/* Option 2 */}
                                {/* <label className="flex items-center text-base cursor-pointer p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-200 transition">
                                    <input
                                        type="radio"
                                        name="interestedProjects"
                                        value="Project Option 2"
                                        className="mr-3 h-5 w-5 accent-red-600"
                                    />
                                    <span className="text-gray-800">Project Option 2</span>
                                </label> */}
                                {/* Option 3 */}
                                {/* <label className="flex items-center text-base cursor-pointer p-3 bg-gray-50 border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-200 transition">
                                    <input
                                        type="radio"
                                        name="interestedProjects"
                                        value="Project Option 3"
                                        className="mr-3 h-5 w-5 accent-red-600"
                                    />
                                    <span className="text-gray-800">Project Option 3</span>
                                </label>
                            </div>
                        </div> */}
                        
                        {/* Submit Button */}
                        {/* <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 bg-cc-maroon text-white font-semibold text-xl py-3 rounded-lg shadow-md hover:bg-cc-maroonAccent transition-transform transform hover:scale-105"
                        >
                            Submit Application
                            <Send className="w-5 h-5" />
                        </button> */}
                    </form>
                </div>
            </section>
            
            <Footer />
        </div>
    );
}

export default Join;