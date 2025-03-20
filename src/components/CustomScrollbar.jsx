import React, { useEffect, useState } from "react";
import styles from "../assets/CustomScrollbar.module.css";
import Switch from "./LightMode";

const CustomScrollbar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        (document.documentElement.scrollHeight || document.body.scrollHeight) -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(scrolled);

      // Update active section based on scroll position
      const sections = ["home", "features", "about", "open-source", "pricing"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>Nexura.Code</div>
      
      <div className={styles.navLinks}>
        <div 
          className={`${styles.navLink} ${activeSection === "home" ? styles.active : ""}`}
          onClick={() => scrollToSection("home")}
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
          {isHovering ? "172.0.0.0" : "Home"}
        </div>
        <div 
          className={`${styles.navLink} ${activeSection === "features" ? styles.active : ""}`}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </div>
        <div 
          className={`${styles.navLink} ${activeSection === "open-source" ? styles.active : ""}`}
          onClick={() => scrollToSection("Team")}
        >
          Team
        </div>
        <div 
          className={`${styles.navLink} ${activeSection === "pricing" ? styles.active : ""}`}
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </div>
        <div className={styles.switchContainer}>
          <Switch />
        </div>
      </div>
      
      <div className={styles.scrollContainer}>
        <div
          className={styles.scrollBar}
          style={{ height: `${scrollPercentage}%` }}
        >
          <div
            className={styles.bug}
            style={{ top: `calc(${scrollPercentage}% - 15px)` }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            🪲
            {showTooltip && (
              <div className={styles.tooltip}>
                I'm not a bug,<br />I'm a feature!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomScrollbar;
