import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(e.target.tagName) || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      transition: { type: "tween", ease: "backOut", duration: 0.1 }
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "rgba(14, 165, 233, 0.2)",
      border: "1px solid rgba(14, 165, 233, 0.5)",
      mixBlendMode: "difference",
      transition: { type: "tween", ease: "backOut", duration: 0.1 }
    }
  };

  return (
    <>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
      />
      <div 
        className="custom-cursor-dot" 
        style={{ left: mousePosition.x, top: mousePosition.y }} 
      />
    </>
  );
};

export default CustomCursor;
