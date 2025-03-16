import { useState, useEffect } from 'react';
import '../assets/Homepage.css';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle video loading
  useEffect(() => {
    const video = document.getElementById('laptop-video');
    if (video) {
      video.playbackRate = 0.75; // Slow down the video slightly
    }
  }, []);

  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          <h1>Nexura</h1>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#product">Home</a></li>
            <li><a href="#features">Projects</a></li>
            <li><a href="#open-source">Team</a></li>
            <li><a href="#pricing">Contact us</a></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="laptop-container">
          <div className="laptop-frame">
            <div className="laptop-screen">
              <div className="laptop-content">
                {/* Video Background */}
                <div className="video-background">
                  <video 
                    id="laptop-video"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src={import.meta.env.BASE_URL + 'laptop_bg.mov'} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-overlay"></div>
                </div>
                
                <div className="laptop-header">
                  <div className="laptop-logo">
                    <span className="logo-dot"></span>
                     Nexura
                  </div>
                 
                </div>
                <div className="laptop-body">
                  <div className="hero-content">
                    <h1>
                      <span>&lt; WORK WITH</span>
                      YOUR CODE
                      <span>CONFIDENTLY &gt;</span>
                    </h1>
                    <p>Allow AI to become your partner in code creation.</p>
                    <div className="cta-buttons">
                      <button className="primary-btn">TRY NOW</button>
                    </div>
                  </div>
                  <div className="laptop-metrics">
                    <div className="analyzing-text">ANALYZING YOUR WAY: <span className="percentage">80%</span></div>
                    <div className="progress-bar">
                      <div className="progress-fill"></div>
                    </div>
                    <div className="experience-boost">EXPERIENCE BOOST</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-base"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Features</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>AI Code Assistance</h3>
            <p>Get intelligent code suggestions and completions as you type.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Code Security</h3>
            <p>Identify vulnerabilities and security issues in your code.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Cross-Platform</h3>
            <p>Works seamlessly across all major operating systems and IDEs.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Customizable</h3>
            <p>Tailor the AI to understand your coding style and preferences.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>For Developers</h2>
          <p>
            Nexura is designed specifically for developers who want to enhance their productivity and code quality.
            Our AI-powered platform analyzes your coding patterns and provides intelligent suggestions.
          </p>
          <p>
            Whether you're a seasoned developer or just starting out, Nexura adapts to your skill level
            and helps you write better code faster.
          </p>
        </div>
        <div className="about-image">
          <div className="placeholder-image"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="open-source" className="services">
        <h2>Open Source</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Community Driven</h3>
            <p>Join our growing community of developers contributing to the platform.</p>
          </div>
          <div className="service-card">
            <h3>Transparent Development</h3>
            <p>All our code is open source and available for review and contribution.</p>
          </div>
          <div className="service-card">
            <h3>Regular Updates</h3>
            <p>Benefit from continuous improvements and new features.</p>
          </div>
          <div className="service-card">
            <h3>Extensible</h3>
            <p>Build your own plugins and extensions to enhance functionality.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="services">
        <h2>Pricing</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Free Tier</h3>
            <p>Basic AI assistance for individual developers. Perfect for getting started.</p>
          </div>
          <div className="service-card">
            <h3>Pro</h3>
            <p>Advanced features for professional developers with higher usage limits.</p>
          </div>
          <div className="service-card">
            <h3>Team</h3>
            <p>Collaborative features for development teams with shared resources.</p>
          </div>
          <div className="service-card">
            <h3>Enterprise</h3>
            <p>Custom solutions for large organizations with dedicated support.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>info@nexura.com</p>
            </div>
            <div className="info-item">
              <h3>Support</h3>
              <p>support@nexura.com</p>
            </div>
            <div className="info-item">
              <h3>GitHub</h3>
              <p>github.com/nexura</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Nexura</h2>
            <p>Your AI partner in code creation</p>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#open-source">Open Source</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <ul className="social-links">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Discord</a></li>
                <li><a href="#">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Nexura. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
