const educationData = [
    {
        degree: 'Master of Computer Applications (MCA)',
        institution: 'Pondicherry University',
        period: '2024 – Present',
        description: 'Specializing in Full-Stack Development, Machine Learning, and Software Engineering. Active contributor to university tech projects.',
    },
    {
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'Jeevandeep Mahavidyalaya, Varanasi',
        period: '2020 – 2023',
        description: 'Affiliated to MGKVP. Built strong fundamentals in DSA, DBMS, Operating Systems, and programming.',
    },
];

const certifications = [
    {
        title: 'Essentials of CS: Basics to Quantum',
        org: 'NIT Warangal — Aug 2025',
        icon: '🔬',
    },
    {
        title: 'Joy of Computing with Python',
        org: 'NPTEL Certification',
        icon: '🐍',
    },
    {
        title: 'VIT Hackathon 2025',
        org: 'Team Leader',
        icon: '🏆',
    },
];

const Education = () => {
    return (
        <section className="education section" id="education">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-label">Education & Certifications</span>
                    <h2 className="section-title">My Academic Journey</h2>
                    <p className="section-subtitle">
                        Building a strong foundation in computer science and continuous learning
                    </p>
                </div>

                <div className="timeline">
                    {educationData.map((edu, idx) => (
                        <div key={idx} className="timeline-item animate-on-scroll">
                            <div className="timeline-dot"></div>
                            <div className="timeline-card glass-card">
                                <span className="timeline-badge">{edu.period}</span>
                                <h3 className="timeline-title">{edu.degree}</h3>
                                <p className="timeline-institution">{edu.institution}</p>
                                <p className="timeline-desc">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cert-grid">
                    {certifications.map((cert, idx) => (
                        <div key={idx} className="cert-card glass-card animate-on-scroll">
                            <div className="cert-icon">{cert.icon}</div>
                            <div className="cert-info">
                                <h4>{cert.title}</h4>
                                <p>{cert.org}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
