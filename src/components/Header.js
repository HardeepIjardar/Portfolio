import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const initialRole = 'Full Stack Developer';
const targetRole = 'UI/UX Designer';

function morphText(from, to, progress) {
    const maxLen = Math.max(from.length, to.length);
    let result = '';
    
    for (let i = 0; i < maxLen; i++) {
        if (progress < 0.5) {
            // First half: morph from current to random characters
            const morphProgress = progress * 2; // 0 to 1
            if (Math.random() < morphProgress) {
                result += String.fromCharCode(65 + Math.random() * 26); // Random uppercase letter
            } else {
                result += from[i] || '';
            }
        } else {
            // Second half: morph from random to target
            const morphProgress = (progress - 0.5) * 2; // 0 to 1
            if (Math.random() < morphProgress) {
                result += to[i] || '';
            } else {
                result += String.fromCharCode(65 + Math.random() * 26); // Random uppercase letter
            }
        }
    }
    return result;
}

const Header = ({ showName, layoutIdName, showHeaderName }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [roleText, setRoleText] = useState(initialRole);
    const [isMorphing, setIsMorphing] = useState(false);
    const [showingInitial, setShowingInitial] = useState(true);
    const headerNameRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Looping morph animation
        let morphTimeout;
        let morphInterval;
        let delay = 3000;
        let morphDuration = 2000;
        let morphSteps = 40;
        let from, to;
        
        function startMorph() {
            morphTimeout = setTimeout(() => {
                setIsMorphing(true);
                let step = 0;
                from = showingInitial ? initialRole : targetRole;
                to = showingInitial ? targetRole : initialRole;
                
                morphInterval = setInterval(() => {
                    step++;
                    const progress = Math.min(1, step / morphSteps);
                    setRoleText(morphText(from, to, progress));
                    
                    if (progress === 1) {
                        clearInterval(morphInterval);
                        setIsMorphing(false);
                        setTimeout(() => {
                            setShowingInitial((prev) => !prev);
                            startMorph();
                        }, 1500); // Pause before next animation
                    }
                }, morphDuration / morphSteps);
            }, delay);
        }
        
        startMorph();
        return () => {
            clearTimeout(morphTimeout);
            clearInterval(morphInterval);
        };
    }, [showingInitial]);

    const openMenu = () => {
        setIsMenuOpen(true);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div id="header" className="header" style={{
            width: '100%',
            height: '100vh',
            backgroundImage: 'url(./media/background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            paddingTop: '60px',
        }}>
            <div className="container">
                <nav className={isScrolled ? 'scrolled' : ''}>
                    <a href="#header">
                        <img src="./media/logo.png" className="logo" alt="Logo" />
                    </a>
                    <ul id="sidemenu" style={{ right: isMenuOpen ? '0' : '-200px' }}>
                        <li><a href="#header" onClick={closeMenu}>Home</a></li>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                        <li><a href="#blogs" onClick={closeMenu}>Blogs</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
                        <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
                    </ul>
                    <i className="fa-solid fa-bars" onClick={openMenu}></i>
                </nav>
                <div className="header-row">
                    <div className="header-left">
                        <div className="header-text">
                            <span className={`header-role morph-role${isMorphing ? ' morphing' : ''}`}>
                                {roleText}
                            </span>
                            <h1 className="header-title">
                                <span className="header-hi">Hi, I'm </span>
                                <span
                                    className="header-name"
                                    id="header-name-target"
                                    ref={headerNameRef}
                                    style={{ opacity: showHeaderName ? 1 : 0, transition: 'opacity 0.4s' }}
                                >
                                    Hardeep&nbsp;Ijardar
                                </span>
                            </h1>
                            <div className="button header-btn-wrapper">
                                <a href="./media/Ijardar Hardeep Kuldeep(CV).pdf" download>
                                    Download CV <i className="fa-solid fa-cloud-arrow-down"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="header-right"></div>
                </div>
            </div>
        </div>
    );
};

export default Header; 