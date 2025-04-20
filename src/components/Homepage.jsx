import { useState, useEffect, useRef } from "react";
import "../assets/Homepage.css";
import Switch from "./LightMode";
import CustomScrollbar from "./CustomScrollbar";
import Contact from "./Contact";
import ProjectCard from "./ProjectCard";
import project1Video from "/projects/project1.mp4";
import project2Video from "/projects/project2.mp4";
import project3Video from "/projects/project3.mp4";
import Dropdown from "./Team";
import project1thumbnail from "/projectThumbnails/project1.png";
import project2thumbnail from "/projectThumbnails/project2.png";
import project3thumbnail from "/projectThumbnails/project3.png";

// Add this projects data array before the Homepage component
const projectsData = [
  {
    cardTitle: "Shoes Website",
    thumbnail: project1thumbnail,
    cardDescription: "Landing page for a shoes website",
    title: "A shoes website",
    author: "",
    videoSrc: project1Video,
  },
  {
    cardTitle: "Nike Website",
    cardDescription: "Landing page for a Nike website",
    thumbnail: project2thumbnail,
    title: "Nike",
    videoSrc: project2Video,
  },
  {
    cardTitle: "E-commerce Website",
    cardDescription: "A full stack e-commerce website",
    title: "E-commerce",
    author: "Made by Naman Sharma",
    videoSrc: project3Video,
    thumbnail: project3thumbnail,
  },
  
  // Add more projects as needed
];

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const laptopContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isFullyScrolled, setIsFullyScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle scroll animation
  const handleScroll = () => {
    if (!laptopContainerRef.current) return;

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const laptopElement = laptopContainerRef.current;
    const laptopRect = laptopElement.getBoundingClientRect();

    // Calculate how much of the laptop is visible in the viewport
    const visibleHeight =
      Math.min(windowHeight, laptopRect.bottom) - Math.max(0, laptopRect.top);

    // Calculate progress based on visibility and scroll position
    const maxScroll = windowHeight * 0.6; // Adjust this value to control zoom speed
    const progress = Math.min(Math.max(scrollPosition / maxScroll, 0), 1);

    setScrollProgress(progress);
    setIsFullyScrolled(progress >= 0.95);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Initial calculation
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle video loading
  useEffect(() => {
    const video = document.getElementById("laptop-video");
    if (video) {
      video.playbackRate = 0.75; // Slow down the video slightly
    }
  }, []);

  const laptopStyle = {
    transform: `
      perspective(2000px)
      rotateX(${15 - scrollProgress * 15}deg)
      scale(${0.8 + scrollProgress * 0.8})
      translateY(${scrollProgress * -20}vh)
    `,
    transition: "transform 0.3s ease-out",
  };

  const screenStyle = {
    transform: `translateY(${scrollProgress * -2}%)`,
    borderRadius: `${20 - scrollProgress * 20}px ${
      20 - scrollProgress * 20
    }px 0 0`,
    transition: "transform 0.3s ease-out, border-radius 0.3s ease-out",
  };

  const contentStyle = {
    opacity: isFullyScrolled ? 1 : 0,
    visibility: isFullyScrolled ? "visible" : "hidden",
    transition: "opacity 0.5s ease-out, visibility 0.5s ease-out",
    marginTop: "100vh",
  };

  const progressBarStyle = {
    width: `${Math.min(scrollProgress * 100, 100)}%`,
    transition: "width 0.1s ease-out",
  };

  const [progress, setProgress] = useState(0);
  const labels = [
    "Initializing Nexura.Code...",
    "Injecting creativity.js...",
    "Debugging innovation.exe...",
    "Testing Prototype...",
    "Execution complete ✅"
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0; // Reset to 0% after reaching 100%
        } else {
          return prev + 25; // Increment by 25%
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const labelIndex = progress / 25; // For 0%, 25%, 50%, 75%, and 100%


  return (
    <div className="homepage">
      <CustomScrollbar />
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={progressBarStyle}></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div
          className="laptop-container"
          ref={laptopContainerRef}
          style={laptopStyle}
        >
          <div className="laptop-frame">
            <div className="laptop-screen" style={screenStyle}>
              <div className="laptop-content">
                {/* Video Background */}
                <div className="video-background">
                  <video id="laptop-video" autoPlay muted loop playsInline>
                    <source
                      src={import.meta.env.BASE_URL + "laptop_bg.mov"}
                      type="video/mp4"
                    />
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
                      <span>&lt; Nexura &gt;</span>
                      Error 404:
                      <span>Limits Not Found </span>
                    </h1>
                    <p>Turning caffeine into code and ideas into impact</p>
                    <div className="cta-buttons">
                      <button className="primary-btn">Learn More</button>
                    </div>
                  </div>
                  <div className="laptop-metrics">
                  <div className="analyzing-text">
        {labels[labelIndex]} {/* Dynamically show the correct label */}
        <span className="percentage"> {progress}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            transition: progress === 0 ? "none" : "width 1s ease-in-out"
          }}
        ></div>
                    </div>
                    <div className="experience-boost">EXPERIENCE BOOST</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-base"></div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div
          className={`scroll-down-indicator ${
            scrollProgress > 0.1 ? "fade-out" : ""
          }`}
        >
          <div className="scroll-arrow"></div>
          <div className="scroll-text">Scroll to Fetch</div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>WHY US?</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Mentorship That Matters</h3>
            <p>
              Learn from experienced developers who guide you through every
              challenge.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Hands-On Experience</h3>
            <p>
              Build real-world projects, join hackathons, and go beyond just
              theory.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Community & Collaboration</h3>
            <p>Connect, code, and create with like-minded tech enthusiasts.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Trust & Reliability</h3>
            <p>
              Whether for college projects or professional freelancing, we
              prioritize transparency, security, and quality in every project.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>
            For GEEKS <span className="small">(Developers)</span>
          </h2>
          <p>
            Whether you're a frontend fanatic, a backend wizard, or a full-stack
            explorer, Nexura is your playground to build, learn, and innovate.
          </p>
          <p>
            Work on real-world projects, collaborate with fellow developers, and
            push your coding skills to the next level. Plus, with our dedicated
            UI/UX team, your creations won't just work seamlessly—they'll look
            stunning too. Join us and turn your ideas into interactive
            experiences!
          </p>
        </div>
        <div className="about-image">
          <div className="placeholder-image"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="open-source" className="services">
        <h2>Our Niche</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>MERN Stack Development</h3>
            <p>
              Build dynamic, full-stack web applications using MongoDB, Express,
              React, and Node.js.
            </p>
          </div>
          <div className="service-card">
            <h3>SQL & Database Management</h3>
            <p>
              Master relational databases to store, manage, and optimize data
              efficiently.
            </p>
          </div>
          <div className="service-card">
            <h3>Website Designing</h3>
            <p>
              Create visually stunning and user-friendly interfaces with our
              dedicated design team.
            </p>
          </div>
          <div className="service-card">
            <h3>Scalable & Modern Web Solutions</h3>
            <p>
              Develop high-performance applications that are fast, responsive,
              and future-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="projects" className="services">
        <h2>Our Projects</h2>
        <div className="services-container">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              cardTitle={project.cardTitle}
              cardDescription={project.cardDescription}
              thumbnail={project.thumbnail}
              title={project.title}
              description={project.description}
              videoSrc={project.videoSrc}
              author={project.author}
            />
          ))}
        </div>
      </section>
      <section id="Team" className="services">
        <h2>Brains Behind the Code</h2>
        <Dropdown />
      </section>
      <Contact />

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
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#features">Projects</a>
                </li>
                <li>
                  <a href="#open-source">About Us</a>
                </li>
                <li>
                  <a href="#Team">Team</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Quick links</h3>
              <ul>
                <li>
                  <a href="#">Main Website</a>
                </li>
                <li>
                  <a href="#">Join Us</a>
                </li>
                <li>
                  <a href="#">Website Designing Team</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Connect</h3>
              <ul className="social-links">
                <li>
                  <a href="https://github.com/NexuraRGPV">GitHub</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/nexura_rgpv/">Instagram</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
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
