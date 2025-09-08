import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import MemberCard from '../components/MemberCard';
import BubbleBackground from '../bubblebackground';

const Members = () => { 
    const memberFiles = import.meta.glob('/content/members/*.mdx', { eager: true });

    const membersData = Object.entries(memberFiles).map(([path, module]) => {
        const { frontmatter, default: Content } = module;
        const slug = path.split('/').pop().replace(/\.mdx?$/, ''); // get username for slug
        return {
            slug,
            name: frontmatter.name,
            role: frontmatter.role,
            avatar: frontmatter.avatar,
            github: frontmatter.github,
        };
    });
    
    return ( 
        <div className="relative overflow-hidden">
            {/* Bubble Background */}
            <BubbleBackground />
            
            {/* Navbar */}
            <Navbar />
            
            <section className="min-h-screen px-6 py-16 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-5xl font-semibold text-center mb-12" style={{color: '#000000'}}>Members</h1>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {membersData.map((member) => (
                            <MemberCard 
                                key={member.slug}
                                slug={member.slug}
                                name={member.name}
                                role={member.role}
                                avatar={member.avatar}
                                github={member.github}
                            />
                        ))}
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    )
}

export default Members;