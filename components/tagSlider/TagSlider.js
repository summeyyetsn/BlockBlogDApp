import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import styles from './TagSlider.module.css';

const TagSlider = () => {
    const words = ["BlockChain", "React", "Foreign Language", "Learn Solidity","Hello World", "Blog Post"];
    const [hovered, setHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
    };
  
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? words.length - 1 : prevIndex - 1));
    };
    return (
        <div className={styles["slider"]}>
            <div className={styles["slider-arrow-left"]} onClick={handleNext}><SlArrowLeft/></div>
            <div className={styles['slider-text-container']}>
                <div className={`${styles["slider-tag-name"]} ${hovered ? styles.hovered : ""}`}>{words[currentIndex]}</div>
                <div className={`${styles['slider-tag-name']} ${hovered ? styles.hovered : ''}`}>{words[(currentIndex + 1) % words.length]}</div>
                <div className={`${styles['slider-tag-name']} ${hovered ? styles.hovered : ''}`}>{words[(currentIndex + 2) % words.length]}</div>
                <div className={`${styles['slider-tag-name']} ${hovered ? styles.hovered : ''}`}>{words[(currentIndex + 3) % words.length]}</div>
                <div className={`${styles['slider-tag-name']} ${hovered ? styles.hovered : ''}`}>{words[(currentIndex + 4) % words.length]}</div>
                <div className={`${styles['slider-tag-name']} ${hovered ? styles.hovered : ''}`}>{words[(currentIndex + 5) % words.length]}</div>
                <div className={`${styles['slider-tag-name']} ${hovered ? styles.hovered : ''}`}>{words[(currentIndex + 6) % words.length]}</div>
            </div>
            <div className={styles["slider-arrow-right"]} onClick={handleNext}><SlArrowRight/></div>
        </div>
    );
};

export default TagSlider;
