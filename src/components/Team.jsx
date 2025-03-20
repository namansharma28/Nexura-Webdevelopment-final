import React, { useState } from "react";
import styles from "../assets/TeamSection.module.css"; 
import TeamMember from "./membercards";
import Mradul from "/Mradul.jpg";
import NamanPhoto from "/NamanSharma.jpg";
import Astha from "/Astha.jpg";
import Sameer from "/Sameer.jpg";
import PS1 from "/PS1.jpg";
import Sudele from "/Sudele.jpg";
import Shubhanshu from "/Shubhanshu.jpg";
import Yashi from "/Yashi.jpg";

import Aryan from "/Aryan Singh.jpg";
import Yamya from "/Yamya Patel.jpg";
import kashish from "/Kashish Bhuriya.png";
import Vaidika from "/Vaidika Purohit.jpg";
import ishika from "/ishika.jpg";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const members = [
    {
      image1: Aryan,
      name1: "Aryan Singh",
      image2: Yashi,
      name2: "Yashi Trivedi",
    },
    {
      image1: kashish,
      name1: "Kashish Bhuriya",
      image2: Vaidika,
      name2: "Vaidika Purohit",
    },
    {
      image1: ishika,
      name1: "Ishika Purohit",
      image2: "",
      name2: "Your Spot?",
    },
  ]
  return (
    <div className={styles.dropdown}>
      <div className={styles.mainMembers}>
      <TeamMember 
            image1= {Astha}
            name1="Astha Pawar" 
            image2={Mradul}
            name2="Mradul Shivhare" 
          />
          <TeamMember 
            image1= {Sameer}
            name1="Sameer Nawab" 
            image2={PS1} 
            name2="Prakhar Sahu"
          />
          <TeamMember 
            image1= {NamanPhoto}
            name1= "Naman Sharma"
            image2= {Sudele}
            name2= "Prakhar Sudele" 
          />  
          <TeamMember 
            image1={Shubhanshu} 
            name1="Shubhanshu" 
            image2={Yamya}
            name2="Yamya Patel"
          />  
          </div>
          <button
        className={styles.button}
        onClick={() => setIsOpen(!isOpen)}
        id="btn"
      >
        {isOpen ? "Show Less" : "Show All Members"}
      </button>
          {isOpen && (
            <div className={styles.content}>
              {members.map((member, index) => (
                <TeamMember 
                  key={index}
                  image1={member.image1}
                  name1={member.name1}
                  image2={member.image2}
                  name2={member.name2}
                />
              ))}
              {/* Add more members as needed */}
            </div>
          )}
    </div>
  );
};

export default DropDown;
