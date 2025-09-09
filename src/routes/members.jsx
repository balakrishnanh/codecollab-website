// src/pages/Members.tsx

import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import MemberCard from '../components/MemberCard';
import BubbleBackground from '../bubblebackground';

const Members = () => { 
    const memberFiles = import.meta.glob('/content/members/*.mdx', { eager: true });

    const membersData = Object.entries(memberFiles).map(([path, module]) => {
        const { frontmatter } = module;
        const slug = path.split('/').pop().replace(/\.mdx?$/, '');
        
        // Extract all the data
        return {
            slug,
            name: frontmatter.name,
            avatar: frontmatter.avatar,
            github: frontmatter.github,
            role: frontmatter.role,
            position: frontmatter.position,
            year: frontmatter.year,
            major: frontmatter.major,
            minors: frontmatter.minors,
        };
    });
    
    return ( 
        <div className="relative overflow-hidden">
            <BubbleBackground />
            <Navbar />
            
            <section className="min-h-screen px-6 py-16 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl font-semibold text-center mb-12" style={{color: '#000000'}}>Members</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {membersData.map((member) => (
                            <MemberCard key={member.slug} member={member} />
                        ))}
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    )
}

export default Members;