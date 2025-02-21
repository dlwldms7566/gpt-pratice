import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { CgSearch } from "react-icons/cg";
import { RiOpenaiFill } from "react-icons/ri";
import sidebarIcon from "../assets/sidebar-icon-op.png";
import sidebarIconActive from "../assets/sidebar-icon-cl.png";
import { LuRepeat2 } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 170);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
      {scrolled ? (
    <RiOpenaiFill className="rotate-logo" />
  ) : (
    <img src={logo} alt="Logo" className="logo" />
  )}
      </div>
      <div className="header-actions">
        <div className="search-icon">
          <CgSearch />
        </div>
        <button className="login-button" onClick={() => navigate("/login")}>Log in</button>
      </div>
    </header>
  );
}

export function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><a href="https://openai.com/research/index/">Research</a><IoIosArrowForward className="menu-icon" /></li>
          <li><a href="https://openai.com/safety/">Safety</a><IoIosArrowForward className="menu-icon" /></li>
          <li><a href="https://openai.com/chatgpt/overview/">ChatGPT</a><IoIosArrowForward className="menu-icon" /></li>
          <li><a href="https://openai.com/sora/">Sora</a><IoIosArrowForward className="menu-icon" /></li>
          <li><a href="https://openai.com/api/">API Platform</a><IoIosArrowForward className="menu-icon" /></li>
          <li><a href="https://openai.com/business/">For Business</a></li>
          <li><a href="https://openai.com/stories/">Stories</a></li>
          <li><a href="#https://openai.com/about/">Company</a><IoIosArrowForward className="menu-icon" /></li>
          <li><a href="https://openai.com/news/">News</a></li>
        </ul>
        <div className="sidebar-icon-container">
         <LuRepeat2 className="sidebar-bottom-icon" />
        </div>
      </div>

      <button 
        className="sidebar-toggle" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src={isOpen ? sidebarIcon : sidebarIconActive}    
          alt="Sidebar Toggle" 
          className="sidebar-icon" 
        />
      </button>
    </div>
  );
}