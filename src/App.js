import React, { useState, useEffect } from 'react';
import './App.css';
import Quiz from './Quiz';
import bImage from './img/b.jpeg';
import mnImage from './img/mn.jpeg';
import mImage from './img/m.jpeg';
import uImage from './img/u.jpeg';
import hImage from './img/h.jpeg';
import cImage from './img/c.jpeg';

function App() {
  const images = [bImage,uImage, hImage, mImage, cImage, mImage, cImage, mnImage, hImage, uImage, bImage];
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);

  const flipImage = (index) => {
    if (flippedIndexes.length < 2 && !flippedIndexes.includes(index) && !matchedIndexes.includes(index)) {
      setFlippedIndexes([...flippedIndexes, index]);
    }
  };

  useEffect(() => {
    if (flippedIndexes.length === 2) {
      const [index1, index2] = flippedIndexes;
      if (images[index1] === images[index2]) {
        setMatchedIndexes((prevMatches) => [...prevMatches, index1, index2]);
      }
      setTimeout(() => {
        setFlippedIndexes([]);
      }, 1000);
    }
  }, [flippedIndexes, images]);

  return (
    <div className="App">
      <div className="image-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`image-card ${flippedIndexes.includes(index) || matchedIndexes.includes(index) ? 'flipped' : ''}`}
            onClick={() => flipImage(index)}
          >
            <img src={image} alt={`Image ${index}`} />
          </div>
         
        ))}
         <Quiz />
      </div>
    </div>
  );
}

export default App;
