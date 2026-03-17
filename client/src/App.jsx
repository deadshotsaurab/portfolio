import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import './App.css';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // Re-observe after each render to catch dynamically added elements
    useEffect(() => {
        const timer = setTimeout(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                },
                { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
            );

            document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach((el) => {
                observer.observe(el);
            });

            return () => observer.disconnect();
        }, 100);

        return () => clearTimeout(timer);
    });

    return (
        <div className={`app ${isLoaded ? 'loaded' : ''}`}>
            <ParticleBackground />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
