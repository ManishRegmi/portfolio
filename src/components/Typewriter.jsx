"use client"
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTypedText(text.slice(0, currentIndex));
            setCurrentIndex((prevIndex) => (prevIndex < text.length ? prevIndex + 1 : prevIndex));
        }, 100); // Adjust the interval time as needed

        return () => clearInterval(interval);
    }, [currentIndex, text]);

    return <h2 className="text-3xl font-bold text-white">{typedText}</h2>;
};

export default Typewriter;
