import React, { useState } from 'react';
import styled from 'styled-components';

const Switch = () => {
    const [isDark, setIsDark] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    const toggleSwitch = () => {
        // First move to light mode
        setIsDark(false);
        
        // After a short delay, move back to dark mode
        setTimeout(() => {
            setIsDark(true);
            
            // Show the popup message
            setShowPopup(true);
            
            // Hide the popup after 3 seconds
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
        }, 500); // Wait 500ms before switching back
    };

    return (
        <StyledWrapper>
            <label className="switch">
                <input 
                    checked={!isDark} 
                    id="checkbox" 
                    type="checkbox"
                    onChange={toggleSwitch}
                />
                <span className="slider">
                    <div className="star star_1" />
                    <div className="star star_2" />
                    <div className="star star_3" />
                    <svg viewBox="0 0 16 16" className="cloud_1 cloud">
                        <path transform="matrix(.77976 0 0 .78395-299.99-418.63)" fill="#fff" d="m391.84 540.91c-.421-.329-.949-.524-1.523-.524-1.351 0-2.451 1.084-2.485 2.435-1.395.526-2.388 1.88-2.388 3.466 0 1.874 1.385 3.423 3.182 3.667v.034h12.73v-.006c1.775-.104 3.182-1.584 3.182-3.395 0-1.747-1.309-3.186-2.994-3.379.007-.106.011-.214.011-.322 0-2.707-2.271-4.901-5.072-4.901-2.073 0-3.856 1.202-4.643 2.925" />
                    </svg>
                </span>
            </label>

            {showPopup && (
                <Popup>💡 Light attracts Bugs!<br />Keep it Dark!?</Popup>
            )}
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;

  /* Theme Switch */
  .switch {
    font-size: 17px;
    position: relative;
    display: inline-block;
    width: 4em;
    height: 2em;
    border-radius: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #2a2a2a;
    transition: 0.4s;
    border-radius: 30px;
    overflow: hidden;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.2em;
    width: 1.2em;
    border-radius: 20px;
    left: 0.5em;
    bottom: 0.5em;
    transition: 0.4s;
    transition-timing-function: cubic-bezier(0.81, -0.04, 0.38, 1.5);
    box-shadow: inset 8px -4px 0px 0px #fff;
  }

  .switch input:checked + .slider {
    background-color: #00a6ff;
  }

  .switch input:checked + .slider:before {
    transform: translateX(1.8em);
    box-shadow: inset 15px -4px 0px 15px #ffcf48;
  }

  .star {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    width: 5px;
    transition: all 0.4s;
    height: 5px;
  }

  .star_1 {
    left: 2.5em;
    top: 0.5em;
  }

  .star_2 {
    left: 2.2em;
    top: 1.2em;
  }

  .star_3 {
    left: 3em;
    top: 0.9em;
  }

  .switch input:checked ~ .slider .star {
    opacity: 0;
  }

  .cloud {
    width: 3.5em;
    position: absolute;
    bottom: -1.4em;
    left: -1.1em;
    opacity: 0;
    transition: all 0.4s;
  }

  .switch input:checked ~ .slider .cloud {
    opacity: 1;
  }
  @media (max-width: 425px) {
    .switch {
      height: 1em;
      width: 2em;
      margin-left: -15px;
      z-index: 1000;
    }
    .star {
    height: 2.5px;
    width: 2.5px;
    }
    .slider:before {
    height: 0.8em;
    width: 0.8em;
    bottom: 0.4em;
    }
  }
`;

const Popup = styled.div`
  position: absolute;
  top: 3rem;
  left: 0%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 1s ease-in-out;
  z-index: 99999999;
`;

export default Switch;
