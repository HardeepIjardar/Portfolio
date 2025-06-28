import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingText, setLoadingText] = useState('');
  const [loadingDots, setLoadingDots] = useState('');
  const [showHeaderName, setShowHeaderName] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [phase, setPhase] = useState('morph'); // morph, fill, move, fade, done
  const [morphAnim, setMorphAnim] = useState({});
  const [finalMorphAnim, setFinalMorphAnim] = useState(null);
  const morphRef = useRef(null);

  // Morphing text function
  const morphText = (targetText, progress) => {
    const length = targetText.length;
    let result = '';
    for (let i = 0; i < length; i++) {
      if (progress < 0.5) {
        const morphProgress = progress * 2;
        if (Math.random() < morphProgress) {
          result += targetText[i];
        } else {
          result += String.fromCharCode(65 + Math.random() * 26);
        }
      } else {
        result += targetText[i];
      }
    }
    return result;
  };

  // Step 1: Morphing
  useEffect(() => {
    if (phase !== 'morph') return;
    const targetName = 'Hardeep Ijardar';
    let morphInterval;
    let step = 0;
    const totalSteps = 30;
    morphInterval = setInterval(() => {
      step++;
      const progress = Math.min(1, step / totalSteps);
      setLoadingText(morphText(targetName, progress));
      if (progress === 1) {
        clearInterval(morphInterval);
        setTimeout(() => setPhase('fill'), 100); // minimal pause after morph
      }
    }, 70);
    return () => clearInterval(morphInterval);
  }, [phase]);

  // Step 2: Color fill (pink)
  useEffect(() => {
    if (phase !== 'fill') return;
    // Animate color fill for 0.7s, then move
    const fillTimeout = setTimeout(() => setPhase('move'), 700);
    return () => clearTimeout(fillTimeout);
  }, [phase]);

  // Step 3: Move to header span
  useEffect(() => {
    if (phase !== 'move') return;
    let pollCount = 0;
    const maxPolls = 40; // 2 seconds max
    const pollInterval = 50;
    let pollTimer = null;
    let fadeTimeout = null;
    function tryAnimate() {
      const morphBox = morphRef.current?.getBoundingClientRect();
      const headerEl = document.getElementById('header-name-target');
      if (morphBox && headerEl) {
        const headerBox = headerEl.getBoundingClientRect();
        const dx = headerBox.left - morphBox.left;
        const dy = headerBox.top - morphBox.top;
        const scaleX = headerBox.width / morphBox.width;
        const scaleY = headerBox.height / morphBox.height;
        const anim = { x: dx, y: dy, scaleX, scaleY };
        setMorphAnim(anim);
        setFinalMorphAnim(anim); // store final position
        // Start fade-in at 90% of the move (1.8s)
        fadeTimeout = setTimeout(() => setShowContent(true), 1800);
        setTimeout(() => {
          setShowHeaderName(true);
          setPhase('fade');
        }, 2000); // 2s for move
      } else if (pollCount < maxPolls) {
        pollCount++;
        pollTimer = setTimeout(tryAnimate, pollInterval);
      } else {
        // Fail-safe: show header name and content anyway
        setShowHeaderName(true);
        setPhase('fade');
      }
    }
    tryAnimate();
    return () => {
      pollTimer && clearTimeout(pollTimer);
      fadeTimeout && clearTimeout(fadeTimeout);
    };
  }, [phase]);

  // Step 4: Fade in website
  useEffect(() => {
    if (phase !== 'fade') return;
    const fadeTimeout = setTimeout(() => {
      setPhase('done');
      setIsLoading(false);
    }, 800); // fade duration
    return () => clearTimeout(fadeTimeout);
  }, [phase]);

  // Animate loading dots
  useEffect(() => {
    if (phase === 'move' || phase === 'fade' || phase === 'done') return;
    
    const dotsInterval = setInterval(() => {
      setLoadingDots(prev => {
        if (prev === '') return '.';
        if (prev === '.') return '..';
        if (prev === '..') return '...';
        return '';
      });
    }, 500);

    return () => clearInterval(dotsInterval);
  }, [phase]);

  // Determine animation for morph text
  const morphAnimate = (() => {
    if (phase === 'move') {
      return {
        opacity: 1,
        x: morphAnim.x || 0,
        y: morphAnim.y || 0,
        scaleX: morphAnim.scaleX || 1,
        scaleY: morphAnim.scaleY || 1,
        color: '#ff004f',
        transition: { duration: 2, ease: 'easeInOut' }
      };
    } else if (phase === 'fill') {
      return {
        opacity: 1,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        color: '#ff004f',
        transition: { duration: 0.7, ease: 'easeInOut' }
      };
    } else if (phase === 'fade' || phase === 'done') {
      // Stay at destination, pink
      return {
        opacity: 1,
        x: finalMorphAnim?.x || 0,
        y: finalMorphAnim?.y || 0,
        scaleX: finalMorphAnim?.scaleX || 1,
        scaleY: finalMorphAnim?.scaleY || 1,
        color: '#ff004f',
        transition: { duration: 0.2 }
      };
    } else {
      return {
        opacity: 1,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        color: '#ababab',
        transition: { duration: 0.2 }
      };
    }
  })();

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {isLoading && phase !== 'done' && (
          <motion.div
            key="loader"
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ zIndex: 10000 }}
          >
            <motion.h2
              className="loading-name"
              ref={morphRef}
              initial={{ opacity: 0, y: 20 }}
              animate={morphAnimate}
              style={{
                pointerEvents: 'none',
                display: 'inline-block',
                transformOrigin: 'left top',
              }}
            >
              {loadingText}
            </motion.h2>
            <motion.p
              className="loading-subtitle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: phase === 'move' || phase === 'fade' || phase === 'done' ? 0 : 1, 
                y: 0 
              }}
              transition={{ 
                duration: phase === 'move' ? 0.3 : 0.5, 
                delay: phase === 'move' ? 0 : 0.3 
              }}
              style={{
                color: '#ababab',
                fontSize: '1.2rem',
                fontWeight: '300',
                marginTop: '20px',
                textAlign: 'center',
              }}
            >
              Loading Portfolio{loadingDots}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {(phase === 'move' || phase === 'fade' || phase === 'done') && (
          <motion.div
            key="header"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Header showName={true} layoutIdName="main-name" showHeaderName={showHeaderName} />
          </motion.div>
        )}
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <About />
            <Projects />
            <Blogs />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App; 