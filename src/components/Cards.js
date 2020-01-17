import React, { useState, useEffect } from "react";
import sourceImages from "./Images";
import Card from "./Card";

const Cards = () => {
  const [images, setImages] = useState([]);
  const [clickedImages, setClickedImages] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    shuffleFriends();
  }, []);

  const shuffleFriends = () => {
    const newArray = [...sourceImages];
    newArray.slice();
    newArray.sort(() => Math.random() - 0.5);
    setImages(newArray);
  };

  const onImageClick = image => {
    increment();
    if (
      clickedImages.filter(clickedImage => {
        return clickedImage === image.id;
      }).length
    ) {
      alert("Failed: Try Again!");
      setCount(0);
      setClickedImages([]);
      return;
    }
    setClickedImages([...clickedImages, image.id]);
    shuffleFriends();
  };

  let increment = () => {
    setCount(count + 1);
    if (count === 12) {
      alert("You Won!");
    }
    console.log(count);
  };

  return (
    <div className='centerContainer'>
      <div className='title'>Memory Game</div>
      <div>
        Instructions: Click all of the cards and win! Sounds easy right? Well
        you lose if you select one more than once!
      </div>
      <div className='pointContainer'>
        <div className='points'>Points:{count}</div>
        {/* <div className='points'>Points:{wins}</div> */}
      </div>
      {images.map(image => (
        <Card key={image.id} image={image} onImageClick={onImageClick} />
      ))}
    </div>
  );
};

export default Cards;
