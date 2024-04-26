import React, { useState, useEffect } from 'react';

const WordByWordDisplay = ({ paragraph }) => {
  const [words, setWords] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const wordsArray = paragraph.split('');
    setWords(wordsArray);
  }, [paragraph]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex < words.length - 1) {
          return prevIndex + 1;
        } else {
          clearInterval(interval);
          return prevIndex;
        }
      });
    }, 60); // Interval duration between words (adjust as needed)

    return () => clearInterval(interval);
  }, [words]);

  return (
    <div>
      {words.slice(0, currentIndex + 1).map((word, index) => (
        <span key={index}>{word}</span>
      ))}
    </div>
  );
};

export default WordByWordDisplay;
