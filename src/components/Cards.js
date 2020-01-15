import React, { useState, useEffect, useRef } from "react";
import { Images } from "./Images";
import { useOnclick } from "../hooks/useOnclick";

const Cards = () => {
  const [image, setImage] = useState([]);
  const [theid, setId] = useState([]);
  const [curid, setcurID] = useState(0);
  const ref = useRef();

  const imageArray = async () => {
    const res = await { Images };
    const copyarray = res.Images;
    setImage(copyarray);
  };

  useEffect(() => {
    imageArray();
  }, []);

  const shuffleFriends = () => {
    const newarr = [...image];
    newarr.slice();
    newarr.sort(() => Math.random() - 0.5);
    setImage(newarr);
  };

  useOnclick(ref);

  return (
    <div className='centerContainer'>
      <p>{theid}</p>
      {image.map(image => (
        <div className='card' key={image.id}>
          {image.id}
          <img
            ref={ref}
            className='cardImage'
            src={image.cardImage}
            alt='hi'
            id={curid}
            onClick={() => {
              setId([...theid, image.id]);
              setcurID([image.id]);
              shuffleFriends();
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
