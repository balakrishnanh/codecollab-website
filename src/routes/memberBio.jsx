import React from 'react';
import { useParams } from '@tanstack/react-router';
import { MDXProvider } from '@mdx-js/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BubbleBackground from '../bubblebackground';

const memberFiles = import.meta.glob('/content/members/*.mdx', { eager: true });

const membersData = Object.entries(memberFiles).map(([path, module]) => {
    const { frontmatter, default: Content } = module;
    const slug = path.split('/').pop().replace(/\.mdx?$/, ''); // get username for slug
    return {
        slug,
        name: frontmatter.name,
        role: frontmatter.role,
        avatar: frontmatter.avatar,
        github: frontmatter?.github,
    };
});

const MemberBio = () => {
    const { slug } = useParams();
    const member = membersData.find(m => m.slug === slug);

    if (!member) {
        return (
            <div className="relative overflow-hidden">
                <BubbleBackground />
                <Navbar />
                <section className="min-h-screen px-6 py-16 relative z-20">
                    <div className="max-w-6xl mx-auto text-center text-2xl" style={{color: '#000000'}}>
                        Member not found.
                    </div>
                </section>
                <Footer />
            </div>
        );
    }

    const { name, role, avatar, github } = member;

    return (
        <div className="relative overflow-hidden">
            {/* Bubble Background */}
            <BubbleBackground />
            
            {/* Navbar */}
            <Navbar />
            
            <section className="min-h-screen px-6 py-16 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-[#f5f1f1] p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
                        <div className="flex flex-col items-center mb-6">
                            {avatar && (
                                <img
                                    src={avatar}
                                    alt={`${name}'s avatar`}
                                    className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
                                />
                            )}
                            <h1 className="text-4xl font-bold mb-1" style={{color: '#000000'}}>{name}</h1>
                            <p className="text-xl" style={{color: '#000000'}}>{role}</p>
                            {github && (
                                <a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg text-[#a3747e] hover:underline mt-2"
                                >
                                    GitHub Profile
                                </a>
                            )}
                        </div>
                        <div className="prose max-w-none" style={{color: '#000000'}}>
                            <MDXProvider>
                                <BioContent />
                            </MDXProvider>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default MemberBio;