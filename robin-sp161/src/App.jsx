import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="site-container">
            {/* Navigation */}
            <nav className="site-nav">
                <div className="nav-logo">
                    <a href="/">ROBIN CHIAM</a>
                </div>
                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <h1>Robin's Journey of Growth and Discovery</h1>
                        <p className="hero-subtitle">System Engineer</p>
                        <p className="hero-description">
                        <b>Welcome to Robin's World—where personal stories meet heartfelt moments. 
                        Dive into a collection of experiences that inspire, connect, and celebrate life's journey.
                        </b>
                        </p>
                        <div className="hero-cta">
                            <a href="#work" className="primary-button">View My Work</a>
                            <a href="#contact" className="secondary-button">Get In Touch</a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="https://cdn.discordapp.com/attachments/1352302334327394365/1352303988120354896/82fa257fe7cfa5bcb808502921b72e1df0e015d1.png?ex=67dd86bb&is=67dc353b&hm=8498853199670940964647320331dc7efbff53a780b5d7e9edb15b4a82ef118a&" alt="Robin Chiam" />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section">
                <div className="section-header">
                    <h2>About Me</h2>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            With over 5 years of experience in product design and development, I specialize in creating 
                            user-centric digital experiences that solve real problems. My approach combines strategic 
                            thinking with aesthetic sensibility to deliver products that are both beautiful and functional.
                        </p>
                        <p>
                            I believe in simplicity, attention to detail, and continuous learning. When I'm not designing 
                            or coding, you can find me exploring new technologies, reading design journals, or hiking in nature.
                        </p>
                    </div>
                    <div className="skills-container">
                        <div className="skill-category">
                            <h3>Design</h3>
                            <ul>
                                <li>User Experience</li>
                                <li>Interface Design</li>
                                <li>Prototyping</li>
                                <li>Design Systems</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <h3>Development</h3>
                            <ul>
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Node.js</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work Section */}
            <section id="work" className="work-section">
                <div className="section-header">
                    <h2>Selected Work</h2>
                </div>
                <div className="projects-grid">
                    {[1, 2, 3].map(i => (
                        <div className="project-card" key={i}>
                            <div className="project-image"></div>
                            <div className="project-info">
                                <h3>Project Title {i}</h3>
                                <p>UX Design • Development</p>
                                <p className="project-description">A brief description of this project and the problems it solves.</p>
                                <a href="#" className="view-project">View Project →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section">
                <div className="section-header">
                    <h2>Get In Touch</h2>
                </div>
                <div className="contact-content">
                    <p>Interested in working together? Feel free to reach out for collaborations or just a friendly hello.</p>
                    <a href="mailto:hello@robinchiam.com" className="contact-email">hello@robinchiam.com</a>
                    <div className="social-links">
                        <a href="#" className="social-link">LinkedIn</a>
                        <a href="#" className="social-link">Twitter</a>
                        <a href="#" className="social-link">Dribbble</a>
                        <a href="#" className="social-link">GitHub</a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="site-footer">
                <p>&copy; {new Date().getFullYear()} Robin Chiam. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;