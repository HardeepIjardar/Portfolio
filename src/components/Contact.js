import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Message: ''
    });
    const [status, setStatus] = useState({ message: '', color: 'green', display: 'none' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Name', formData.Name);
            formDataToSend.append('Email', formData.Email);
            formDataToSend.append('Message', formData.Message);
            formDataToSend.append('_captcha', 'false');

            const response = await fetch("https://formsubmit.co/e63c098eb4897c4a011e5b473ddfef73", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                setStatus({
                    message: "Your message has been sent successfully!",
                    color: "green",
                    display: "block"
                });
                
                // Clear the form
                setFormData({ Name: '', Email: '', Message: '' });

                // Scroll to top
                document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
            } else {
                setStatus({
                    message: "Something went wrong. Please try again.",
                    color: "red",
                    display: "block"
                });
            }
        } catch (error) {
            setStatus({
                message: "An error occurred. Please check your internet connection.",
                color: "red",
                display: "block"
            });
        }
    };

    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <motion.div 
                        className="contact-left"
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <motion.h1 
                            className="sub-title"
                            initial={{ y: -30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Get in Touch
                        </motion.h1>
                        <motion.p
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <motion.a 
                                href="mailto:hardeepijardar@gmail.com"
                                whileHover={{ scale: 1.1, color: '#ff004f' }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <i className="fa-solid fa-envelope"></i>
                            </motion.a> 
                            hardeepijardar@gmail.com
                        </motion.p>
                        <motion.p
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <motion.a 
                                href="tel:9328231035"
                                whileHover={{ scale: 1.1, color: '#ff004f' }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <i className="fa-solid fa-phone"></i>
                            </motion.a> 
                            +91 9328231035
                        </motion.p>
                        <motion.div 
                            className="social-icons"
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <motion.p
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.a 
                                    href="https://www.linkedin.com/in/hardeep-ijardar-711874266/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, color: '#ff004f' }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <i className="fa-brands fa-linkedin"></i>
                                </motion.a> 
                                Hardeep Ijardar
                            </motion.p>
                            <motion.p
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.a 
                                    href="https://github.com/HardeepIjardar" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, color: '#ff004f' }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <i className="fa-brands fa-square-github"></i>
                                </motion.a> 
                                HardeepIjardar
                            </motion.p>
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        className="contact-right"
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <motion.form 
                            onSubmit={handleSubmit}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <input 
                                type="hidden" 
                                name="_captcha" 
                                value="false" 
                            />
                            <motion.input 
                                type="text" 
                                name="Name" 
                                placeholder="Enter Your Name" 
                                value={formData.Name}
                                onChange={handleInputChange}
                                required
                                whileFocus={{ scale: 1.02, borderColor: '#ff004f' }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.input 
                                type="email" 
                                name="Email" 
                                placeholder="Enter Email" 
                                value={formData.Email}
                                onChange={handleInputChange}
                                required
                                whileFocus={{ scale: 1.02, borderColor: '#ff004f' }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.textarea 
                                name="Message" 
                                rows="6" 
                                placeholder="Your Message"
                                value={formData.Message}
                                onChange={handleInputChange}
                                whileFocus={{ scale: 1.02, borderColor: '#ff004f' }}
                                transition={{ duration: 0.2 }}
                            ></motion.textarea>
                            <motion.button 
                                type="submit" 
                                className="btn btn2"
                                whileHover={{ 
                                    scale: 1.05,
                                    boxShadow: "0 10px 20px rgba(255, 0, 79, 0.3)"
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Submit
                            </motion.button>
                        </motion.form>
                        <motion.p 
                            id="status" 
                            style={{ color: status.color, display: status.display }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                                opacity: status.display === 'block' ? 1 : 0, 
                                y: status.display === 'block' ? 0 : 20 
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {status.message}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 