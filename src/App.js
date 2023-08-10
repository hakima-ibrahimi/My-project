import React, { useState, useEffect } from 'react';
import './App.css';
import Quiz from './Quiz';
import bImage from './img/b.jpeg';
import mnImage from './img/mn.jpeg';
import uImage from './img/u.jpeg';
import hImage from './img/h.jpeg';
import cImage from './img/c.jpeg';
import AImage from './img/A.jpg';
import cmage from './img/c.jpg';
function App() {
  const images = [hImage,cmage, AImage,cImage,hImage,mnImage, cImage, bImage,mnImage, uImage, bImage, AImage, cmage,uImage];
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [showQuiz, setShowQuiz] = useState(true); 

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

  const CardView = () => {
    setShowQuiz(!showQuiz);
  };

  return (
    <div className="App">
      {/* <button onClick={toggleView}>Toggle View</button> */}
      <div className="image-container">
        {showQuiz ? (
          <Quiz CardView={CardView}/>
        ) : (
          images.map((image, index) => (
            <div
              key={index}
              className={`image-card ${flippedIndexes.includes(index) || matchedIndexes.includes(index) ? 'flipped' : ''}`}
              onClick={() => flipImage(index)}
            >
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
