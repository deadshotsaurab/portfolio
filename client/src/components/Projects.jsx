const projects = [
    {
        title: 'PU Connect',
        subtitle: 'Full-Stack Alumni Portal',
        description:
            'A comprehensive alumni portal for Pondicherry University, enabling graduates to stay connected, share opportunities, and network with peers.',
        features: [
            'Full-stack application built with MERN stack',
            'Authentication with role-based access control (RBAC)',
            'RESTful API architecture with Express.js',
            'MongoDB database with Mongoose ODM',
        ],
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST API'],
        icon: '🎓',
        github: 'https://github.com/deadshotsaurab',
    },
    {
        title: 'AI Chatbot',
        subtitle: 'Ollama + LLaMA Integration',
        description:
            'A locally-hosted AI chatbot powered by LLaMA through Ollama, designed for academic and technical queries with optimized prompt engineering.',
        features: [
            'Local LLM-powered chatbot for privacy',
            'Optimized prompts for accuracy improvement',
            '40% reduction in response latency',
            'Academic and technical query handling',
        ],
        tags: ['Python', 'Ollama', 'LLaMA', 'NLP', 'AI'],
        icon: '🤖',
        github: 'https://github.com/deadshotsaurab',
    },
    {
        title: 'Student Performance Prediction',
        subtitle: 'Machine Learning Model',
        description:
            'A machine learning system that predicts student academic performance using regression models with comprehensive data preprocessing pipelines.',
        features: [
            'Regression-based ML prediction models',
            'Data preprocessing and feature engineering',
            'Performance evaluation with multiple metrics',
            'Scikit-learn and Pandas pipeline',
        ],
        tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'ML'],
        icon: '📊',
        github: 'https://github.com/deadshotsaurab',
    },
];

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-label">My Projects</span>
                    <h2 className="section-title">Things I've Built</h2>
                    <p className="section-subtitle">
                        From full-stack web apps to AI-powered solutions — here are some highlights
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, idx) => (
                        <div key={idx} className="project-card glass-card animate-on-scroll">
                            <div className="project-card-header">
                                <div className="project-card-icon">{project.icon}</div>
                                <div className="project-card-links">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                        aria-label={`View ${project.title} on GitHub`}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                        aria-label={`View ${project.title} live`}
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17L17 7M7 7h10v10" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="project-card-body">
                                <h3 className="project-card-title">{project.title}</h3>
                                <p className="project-card-subtitle">{project.subtitle}</p>
                                <p className="project-card-description">{project.description}</p>
                                <div className="project-card-features">
                                    {project.features.map((feature, fIdx) => (
                                        <span key={fIdx} className="project-feature">{feature}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-card-footer">
                                {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
