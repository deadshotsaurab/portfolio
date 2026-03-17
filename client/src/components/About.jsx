import profilePic from '../assets/saurabhpic1.jpeg';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-label">About Me</span>
                    <h2 className="section-title">Turning Ideas Into Reality</h2>
                    <p className="section-subtitle">
                        A passionate developer who loves turning complex problems into simple, beautiful solutions.
                    </p>
                </div>

                <div className="about-grid">
                    <div className="about-image-wrapper animate-on-scroll">
                        <div className="about-image-card">
                            <div className="about-image-placeholder">
                                <img src={profilePic} alt="Saurabh Tiwari" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--border-radius)' }} />
                            </div>
                            <div className="about-stats">
                                <div className="about-stat">
                                    <div className="about-stat-number">3+</div>
                                    <div className="about-stat-label">Projects</div>
                                </div>
                                <div className="about-stat">
                                    <div className="about-stat-number">5+</div>
                                    <div className="about-stat-label">Technologies</div>
                                </div>
                                <div className="about-stat">
                                    <div className="about-stat-number">2+</div>
                                    <div className="about-stat-label">Years Coding</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-content animate-on-scroll">
                        <p className="about-text">
                            I'm <strong>Saurabh Tiwari</strong>, an MCA student at <strong>Pondicherry University</strong> with
                            a deep passion for <strong>Full-Stack Development</strong> and <strong>Machine Learning</strong>.
                            I specialize in building scalable web applications using the <strong>MERN stack</strong> —
                            MongoDB, Express.js, React.js, and Node.js.
                        </p>
                        <p className="about-text">
                            My journey spans from developing robust <strong>RESTful APIs</strong> and alumni portals to
                            crafting <strong>AI-powered chatbots</strong> with LLaMA and building predictive ML models.
                            I believe in writing clean, maintainable code that makes a difference.
                        </p>

                        <div className="about-info-grid">
                            <div className="about-info-item">
                                <span className="info-icon">📍</span>
                                <div>
                                    <div className="info-label">Location</div>
                                    <div className="info-value">Varanasi, India</div>
                                </div>
                            </div>
                            <div className="about-info-item">
                                <span className="info-icon">🎓</span>
                                <div>
                                    <div className="info-label">Degree</div>
                                    <div className="info-value">MCA (2024–Present)</div>
                                </div>
                            </div>
                            <div className="about-info-item">
                                <span className="info-icon">📧</span>
                                <div>
                                    <div className="info-label">Email</div>
                                    <div className="info-value" style={{ fontSize: '0.78rem' }}>saurabhkumartiwari516@gmail.com</div>
                                </div>
                            </div>
                            <div className="about-info-item">
                                <span className="info-icon">💼</span>
                                <div>
                                    <div className="info-label">Focus</div>
                                    <div className="info-value">MERN & ML</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                            <a href="#contact" className="btn-primary" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                Let's Connect
                            </a>
                            <a
                                href="https://github.com/deadshotsaurab"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline"
                            >
                                View GitHub
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
