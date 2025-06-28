import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            icon: 'fa-solid fa-user-tie',
            title: 'Portfolio',
            description: 'Showcasing skills, achievements, and creativity—welcome to my portfolio!',
            link: '#'
        },
        {
            icon: 'fa-solid fa-diagram-project',
            title: 'JavaSript Projects',
            description: 'Explore dynamic, interactive JavaScript projects showcasing creativity and innovation.',
            link: 'https://js-projects.hardeepijardar.com/'
        },
        {
            icon: 'fa-solid fa-gift',
            title: 'ArtiFlare',
            description: 'A React & TypeScript e-commerce site for handcrafted gifts. Features product customization, fast delivery, and order tracking.',
            link: 'https://artiflare.hardeepijardar.com/'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div id="projects">
            <div className="container">
                <motion.h1 
                    className="sub-title"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    My Projects
                </motion.h1>
                <motion.div 
                    className="projects-list"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                y: -10,
                                scale: 1.02,
                                boxShadow: "0 20px 40px rgba(255, 0, 79, 0.2)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.i 
                                className={project.icon}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ duration: 0.2 }}
                            ></motion.i>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <motion.a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Project
                            </motion.a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Projects; 