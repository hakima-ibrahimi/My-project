import React, { useState, useEffect } from 'react';
import './App.css';
import Quiz from './Quiz';
import q2 from './img/q2.jpg';
import q from './img/q.jpg';
import y2 from './img/y2.jpg';
import y from './img/y.jpg';
import c2 from './img/c2.jpg';
import c from './img/c.jpg';
import n2 from './img/n2.jpg';
import n from './img/n.jpg';
import a2 from './img/a.jpg';
import a from './img/a.jpg';
import e2 from './img/e2.jpg';
import e from './img/e.jpg';
import i2 from './img/i2.jpg';
import i from './img/i.jpg';
import k2 from './img/k2.jpg';
import k from './img/k.jpg';
import o2 from './img/o2.jpg';
import o from './img/o.jpg';
import z2 from './img/z2.jpg';
import z from './img/z.jpg';

function App() {
  
  const images = [z, o, k, i, e, a, n, c, z, y, q, z2, o2, k2, i2, e2, a2, n2,c2, y2, q2,z, o, k, i, e, a, n, c, y, q, z2, o2, k2, i2, e2, a2, n2, c2, y2, q2,i];
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
          <Quiz CardView={CardView} />
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
