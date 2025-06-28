import React from 'react';
import { motion } from 'framer-motion';

const Blogs = () => {
    const blogs = [
        {
            image: './media/blog-1.png',
            title: 'What is Internet?',
            description: 'The Internet connects people, information, and technology worldwide effortlessly.',
            link: 'https://hardeepijardar.hashnode.dev/what-is-internet'
        },
        {
            image: './media/blog-2.png',
            title: 'Do-My-Draft',
            description: 'Do-My-Draft simplifies assignments, making writing easy and efficient.',
            link: 'https://do-my-draft.hashnode.dev/do-my-draft-revolutionizing-the-assignment-writing-experience'
        },
        {
            image: './media/blog-3.png',
            title: 'The Revolution of AI',
            description: 'AI has revolutionized industries, transforming how we live, work, and interact globally.',
            link: 'https://revolution-of-artificial-intelligence.hashnode.dev/the-ai-revolution-transforming-the-present-shaping-the-future-1'
        },
        {
            image: './media/blog-4.jpeg',
            title: 'How to Create API Endpoints in Bun',
            description: 'Learn how to efficiently create API endpoints in Bun, a modern JavaScript runtime with enhanced speed and performance.',
            link: 'https://how-to-create-api-endpoint-using-bun.hashnode.dev/how-to-create-api-endpoints-in-bun'
        }
    ];

    // Duplicate blogs for seamless auto-scroll
    const scrollingBlogs = [...blogs, ...blogs];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div id="blogs">
            <div className="container">
                <motion.h1 
                    className="sub-title"
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    My Blogs
                </motion.h1>
                <motion.div 
                    className="blog-list"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {scrollingBlogs.map((blog, index) => (
                        <motion.div 
                            className="blog" 
                            key={index}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                rotateY: 5,
                                boxShadow: "0 15px 35px rgba(255, 0, 79, 0.3)"
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.img 
                                src={blog.image} 
                                alt={blog.title}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.div 
                                className="layer"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                                <motion.a 
                                    href={blog.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 45 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                </motion.a>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Blogs; 