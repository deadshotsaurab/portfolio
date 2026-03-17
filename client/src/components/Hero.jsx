import { useState, useEffect } from 'react';
import profilePic from '../assets/saurabhpic2.jpeg';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const [currentRole, setCurrentRole] = useState(0);

    const roles = [
        'Full-Stack Developer',
        'MERN Stack Engineer',
        'Machine Learning Enthusiast',
        'Backend Developer',
    ];

    useEffect(() => {
        let charIndex = 0;
        let isDeleting = false;
        let currentIdx = 0;

        const type = () => {
            const current = roles[currentIdx];

            if (!isDeleting) {
                setTypedText(current.substring(0, charIndex + 1));
                charIndex++;

                if (charIndex === current.length) {
                    isDeleting = true;
                    setTimeout(type, 2000);
                    return;
                }
            } else {
                setTypedText(current.substring(0, charIndex - 1));
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    currentIdx = (currentIdx + 1) % roles.length;
                    setCurrentRole(currentIdx);
                }
            }

            setTimeout(type, isDeleting ? 50 : 100);
        };

        const timer = setTimeout(type, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-greeting">
                        <span className="wave">👋</span>
                        <span>Hello, I'm</span>
                    </div>

                    <h1 className="hero-name">
                        Saurabh{' '}
                        <span className="gradient-text">Tiwari</span>
                    </h1>

                    <div className="hero-title-wrapper">
                        <p className="hero-title">
                            <span className="typed-text">{typedText}</span>
                        </p>
                    </div>

                    <p className="hero-description">
                        MCA student with strong expertise in Full-Stack Development (MERN) and Machine Learning.
                        Experienced in building scalable web applications, RESTful APIs, and AI-powered solutions.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn-primary" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            View My Work
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="#contact" className="btn-outline" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Get In Touch
                        </a>
                    </div>

                    <div className="hero-socials">
                        <a href="https://github.com/deadshotsaurab" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/saurabh-tiwari" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="mailto:saurabhkumartiwari516@gmail.com" className="social-link" aria-label="Email">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-avatar-container">
                        <div className="hero-avatar-ring"></div>
                        <div className="hero-avatar-inner">
                            <img src={profilePic} alt="Saurabh Tiwari" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="hero-floating-badges">
                            <div className="floating-badge">
                                <span className="badge-icon">⚛️</span> React.js
                            </div>
                            <div className="floating-badge">
                                <span className="badge-icon">🟢</span> Node.js
                            </div>
                            <div className="floating-badge">
                                <span className="badge-icon">🧠</span> ML
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
