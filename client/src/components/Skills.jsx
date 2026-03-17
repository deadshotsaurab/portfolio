import { useEffect, useRef, useState } from 'react';

const skillCategories = [
    {
        title: 'Languages',
        icon: '💻',
        skills: [
            { name: 'JavaScript', level: 90 },
            { name: 'Python', level: 85 },
            { name: 'C / C++', level: 75 },
        ],
    },
    {
        title: 'Frontend',
        icon: '🎨',
        skills: [
            { name: 'React.js', level: 90 },
            { name: 'HTML5 / CSS3', level: 92 },
            { name: 'REST APIs', level: 85 },
        ],
    },
    {
        title: 'Backend',
        icon: '⚙️',
        skills: [
            { name: 'Node.js', level: 88 },
            { name: 'Express.js', level: 88 },
            { name: 'MongoDB', level: 82 },
            { name: 'MySQL', level: 75 },
        ],
    },
    {
        title: 'AI / ML',
        icon: '🧠',
        skills: [
            { name: 'Scikit-learn', level: 78 },
            { name: 'NumPy / Pandas', level: 80 },
            { name: 'LLaMA / Ollama', level: 72 },
        ],
    },
    {
        title: 'Tools & DevOps',
        icon: '🛠️',
        skills: [
            { name: 'Git / GitHub', level: 90 },
            { name: 'VS Code', level: 92 },
            { name: 'Postman', level: 85 },
            { name: 'Linux', level: 78 },
        ],
    },
];

const Skills = () => {
    const [animated, setAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimated(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="skills section" id="skills" ref={sectionRef}>
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-label">My Skills</span>
                    <h2 className="section-title">Technologies I Work With</h2>
                    <p className="section-subtitle">
                        A diverse toolkit spanning frontend, backend, AI/ML, and DevOps
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, catIdx) => (
                        <div
                            key={category.title}
                            className="skill-category-card glass-card animate-on-scroll"
                            style={{ animationDelay: `${catIdx * 0.1}s` }}
                        >
                            <div className="skill-category-icon">{category.icon}</div>
                            <h3 className="skill-category-title">{category.title}</h3>
                            <div className="skill-items">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="skill-item">
                                        <span className="skill-item-name">{skill.name}</span>
                                        <div className="skill-bar-wrapper">
                                            <div
                                                className={`skill-bar ${animated ? 'animated' : ''}`}
                                                style={{ width: animated ? `${skill.level}%` : '0%' }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
