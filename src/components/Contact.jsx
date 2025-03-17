import React, { useState } from "react";
import styles from "../assets/Contact.module.css";
import PS1 from "../../public/PS1.jpg";
import NamanSharma from "../../public/NamanSharma.jpg";
import PS0 from "../../public/PS0.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", formData);
    if (formData.name === "69" && formData.email === "69" && formData.message === "69") {
      setShowEasterEgg(true);
      console.log("Easter egg triggered!");
    } else {
      alert("Message Sent!");
    }
  };

  const handleImageError = () => {
    console.error("Failed to load image");
    setImageError(true);
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>Get In Touch</h2>
      <div className={styles.contactContainer}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>

        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <h3>Email</h3>
            <p>info@nexura.com</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Support</h3>
            <p>support@nexura.com</p>
          </div>
          <div className={styles.infoItem}>
            <h3>GitHub</h3>
            <p>github.com/nexura</p>
          </div>
        </div>
      </div>

      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <div className={styles.easterEggModal}>
          <div className={styles.modalContent}>
            <h3>People who actually made this website</h3>
            <div className={styles.team}>
              <div className={styles.card}>
                <img src={PS1} alt="Prakhar sahu" className={styles.cardImage} />
                <h4>Prakhar sahu</h4>
                <p>The badass lead</p>
              </div>

              <div className={styles.card}>
                <img src={PS0} alt="Prakhar Sudele" className={styles.cardImage} />
                <h4>Prakhar Sudele</h4>
                <p>"Too good to write about myself"</p>
              </div>

              <div className={styles.card}>
                <img src={NamanSharma} alt="Naman Sharma" className={styles.cardImage} />
                <h4>Naman Sharma</h4>
                <p>The Kool guy</p>
              </div>

              <div className={styles.card}>
                <img 
                  src={`${window.location.origin}/Shubhanshu Choudhary .jpg`}
                  alt="Shubhanshu Choudhary" 
                  className={styles.cardImage}
                  onError={(e) => {
                    console.error("Failed to load Shubhanshu's image");
                    e.target.onerror = null;
                    e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="40">SC</text></svg>`;
                  }}
                />
                <h4>Shubhanshu Choudhary</h4>
                <p>The DevOps Guru</p>
              </div>

            </div>
            <button className={styles.closeBtn} onClick={() => setShowEasterEgg(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
