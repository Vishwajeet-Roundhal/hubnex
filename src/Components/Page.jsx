import React, { useState } from 'react';
import { ChevronRight } from "lucide-react";
import { ChevronDown, ArrowRight } from "lucide-react";

import "../styles/page.css";

function Page() {
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isCommunityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  return (
    <div>
      <header className="header">
        <img
          src="https://www.hubnex.in/logo.png"
          alt="Logo"
          className="logo"
        />
        <nav className="nav">
          <ul className="nav-menu">
            <li className="nav-item">
              <button
                className="nav-link dropdown-toggle"
                onClick={() => setServicesDropdownOpen(!isServicesDropdownOpen)}
              >
                Explore Services <span className="arrow"><ChevronDown size={16} color="black" /></span>
              </button>
              {isServicesDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#">Emerging Technologies</a></li>
                  <li><a href="#">Data and Cloud</a></li>
                  <li><a href="#">Software Development</a></li>
                  <li><a href="#">Marketing</a></li>
                  <li><a href="#">Staff augmentation</a></li>
                  <li><a href="#">Artificial Intelligence</a></li>
                  <li><a href="#">Blockchain</a></li>
                  <li><a href="#">Robotic automation</a></li>
                  <li><a href="#">Internet of things</a></li>
                  <li><a href="#">cyber security</a></li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <button
                className="nav-link dropdown-toggle"
                onClick={() => setCommunityDropdownOpen(!isCommunityDropdownOpen)}
              >
                Community <span className="arrow"><ChevronDown size={16} color="black" /></span>
              </button>
              {isCommunityDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#">Work with us</a></li>
                  <li><a href="#">Apply as a partner</a></li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <button
                className="nav-link dropdown-toggle"
                onClick={() => setResourcesDropdownOpen(!isResourcesDropdownOpen)}
              >
                Resources <span className="arrow"><ChevronDown size={16} color="black" /></span>
              </button>
              {isResourcesDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#">Case Studies</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
          </ul>
          <a href="#" className="button button-primary">
            Connect Sales <ArrowRight  size={16} color="white" />
          </a>
        </nav>
      </header>

      <div className="hero-background">
        <section className="hero">
          <div className="partner-pill">
            <span>Be our partner</span>
              Check out to invest in our success
            
          </div>

          <h1 className="hero-title">
            High-performing remote teams.
            <br />
            The future of work.
          </h1>

          <p className="hero-description">
            Powerful, self-serve team engagement tools and analytics. Supercharge your managers & keep employees engaged
            from anywhere.
          </p>

          <div className="rating">
            <div className="stars">{"★".repeat(5)}</div>
            4.5 (from 200+ reviews)
          </div>

          <div className="cta-buttons">
            <a href="#" className="button button-primary">
              Connect us <ArrowRight  size={16} color="white" />
            </a>
            <a href="#" className="button button-outline">
              Join Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
