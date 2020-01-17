import React from "react";

const Card = ({ image, onImageClick }) => {
  return (
    <div className='card'>
      <img
        className='cardImage'
        src={image.cardImage}
        alt='hi'
        onClick={() => {
          onImageClick(image);
        }}
        style={{ width: "100%" }}
      />
    </div>
  );
};
export default Card;
