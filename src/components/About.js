import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
    const [activeTab, setActiveTab] = useState('skills');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <motion.div 
                        className="about-col-1"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <motion.img 
                            src="./media/user.jpg" 
                            alt="Hardeep Ijardar"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                    <motion.div 
                        className="about-col-2"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <motion.h1 
                            className="sub-title"
                            initial={{ y: -50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            About Me
                        </motion.h1>
                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Hi, I'm Hardeep Ijardar, a software developer and IT student passionate about building efficient, user-friendly applications. I enjoy exploring new technologies, solving real-world challenges, and staying updated with industry trends. Driven by curiosity and innovation, I aim to create impactful solutions and contribute to the tech community. Let's collaborate to bring ideas to life!
                        </motion.p>
                        <motion.div 
                            className="tab-titles"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <motion.p 
                                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`} 
                                onClick={() => openTab('skills')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Skills
                            </motion.p>
                            <motion.p 
                                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`} 
                                onClick={() => openTab('education')}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Education
                            </motion.p>
                        </motion.div>
                        <AnimatePresence mode="wait">
                            {activeTab === 'skills' && (
                                <motion.div 
                                    className="tab-contents active-tab" 
                                    id="skills"
                                    key="skills"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ul>
                                        <motion.li 
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                        >
                                            <span>Frontend</span><br />HTML, CSS, Tailwind CSS, JavaScript
                                        </motion.li>
                                        <motion.li 
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.2 }}
                                        >
                                            <span>Backend</span><br />Node JS, Express JS, PHP
                                        </motion.li>
                                        <motion.li 
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.3 }}
                                        >
                                            <span>Database</span><br />MongoDB, MySQL
                                        </motion.li>
                                        <motion.li 
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.4 }}
                                        >
                                            <span>Languages</span><br />C, Java, Python
                                        </motion.li>
                                        <motion.li 
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.5 }}
                                        >
                                            <span>Tools</span><br />Power BI, Android Studio, Tableau
                                        </motion.li>
                                        <motion.li 
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.6 }}
                                        >
                                            <span>Other</span><br />GitHub, Deployment, Problem Solving
                                        </motion.li>
                                    </ul>
                                </motion.div>
                            )}
                            {activeTab === 'education' && (
                                <motion.div 
                                    className="tab-contents active-tab" 
                                    id="education"
                                    key="education"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ul>
                                        <motion.li 
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                        >
                                            <span>July 2022 - Present</span><br /><b>Bachelor of Technology in Information Technology</b><br />Parul University, Vadodara (Gujarat)<br />CGPA - 7.73/10
                                        </motion.li>
                                        <motion.li 
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.2 }}
                                        >
                                            <span>2019 - 2022</span><br /><b>12<sup>th</sup> - GSEB</b><br />Radiant English Academy, Surat (Gujarat)<br />Percentage - 41%
                                        </motion.li>
                                        <motion.li 
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.3 }}
                                        >
                                            <span>2018 - 2019</span><br /><b>10<sup>th</sup> - CBSE</b><br />Radiant English Academy, Surat (Gujarat)<br />Percentage - 65%
                                        </motion.li>
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About; 