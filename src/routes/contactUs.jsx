// src/pages/Contact.tsx

import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import BubbleBackground from '../bubblebackground';
import { Mail, MapPin, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const ContactUs = () => { 
    return ( 
        <div className="relative overflow-hidden">
            {/* Background and Navigation */}
            <BubbleBackground />
            <Navbar />
            
            <section className="min-h-screen px-6 py-16 relative z-20 flex items-center justify-center">
                <div className="max-w-4xl mx-auto w-full">
                    <h1 className="text-5xl font-semibold text-center mb-12 text-black">
                        Get In Touch
                    </h1>
                    
                    {/* Main Content Card */}
                    <div className="bg-white/60 backdrop-blur-sm border border-red-100 rounded-2xl shadow-xl shadow-red-500/10 p-8 md:p-12">
                        
                        <p className="text-center text-lg text-gray-700 mb-10">
                            Have questions, ideas, or want to collaborate? We'd love to hear from you! Reach out through any of our channels below.
                        </p>

                        {/* Contact Information Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
                            
                            {/* General Email */}
                            <div className="flex flex-col items-center">
                                <Mail className="w-10 h-10 mb-3 text-red-700" />
                                <h3 className="text-xl font-semibold text-gray-800">Email Us</h3>
                                <a href="mailto:placeholder@umass.edu" className="text-blue-600 hover:underline">
                                    [CodeCollab Email]
                                </a>
                            </div>

                            {/* Location */}
                            <div className="flex flex-col items-center">
                                <MapPin className="w-10 h-10 mb-3 text-red-700" />
                                <h3 className="text-xl font-semibold text-gray-800">Find Us</h3>
                                <p className="text-gray-600">
                                    [Meeting Room #, Meeting Room]<br/>
                                    [Other Address Line #]<br/>
                                </p>
                            </div>

                            {/* Social Media */}
                            <div className="flex flex-col items-center">
                                <Instagram className="w-10 h-10 mb-3 text-red-700" />
                                <h3 className="text-xl font-semibold text-gray-800">Follow Us</h3>
                                <a href="https://www.instagram.com/umasscodecollab/" className="text-blue-600 hover:underline">
                                    @CodeCollabUMass
                                </a>
                            </div>

                        </div>

                        {/* Mailing List Call-to-Action */}
                        <div className="bg-red-50 border-t-2 border-red-200 rounded-b-lg text-center py-8 px-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">Join Our Mailing List!</h2>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Be the first to know about our upcoming workshops, events, and opportunities by signing up for our newsletter.
                            </p>
                            <a 
                                href="https://docs.google.com/forms/d/e/1FAIpQLSeRVfrgun_Qt9ujKHxDlqMNDkUViwXq42QTWUMc34b6FCtfHw/viewform?usp=dialog"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105"
                            >
                                Sign Up Now
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    )
}

export default ContactUs;