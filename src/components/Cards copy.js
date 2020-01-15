import React, {
  useState,
  useEffect,
  useRef,
  useReducer,
  useCallback
} from "react";
import { Images } from "./Images";

export default function Cards() {
  const [image, setImage] = useState([]);

  const [friend] = useState({
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  });

  const handleClick = id => {
    if (this.useState(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  const handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  const imageArray = async () => {
    const res = await { Images };
    const copyarray = res.Images;
    setImage(copyarray);
  };

  useEffect(() => {
    imageArray();
  }, []);

  const game = () => {
    const newarr = [...image];
    newarr.slice();
    newarr.sort(() => Math.random() - 0.5);
    setImage(newarr);
  };

  return (
    <div className='centerContainer'>
      {image.map(image => (
        <div
          key={image.name}
          className='card'
          onClick={() => {
            game();
            handleClick();
          }}>
          <img
            // ref={ref}
            className='cardImage'
            src={image.cardImage}
            alt='hi'
            id={image.navItemId}
            // alt={image.name}
          />
        </div>
      ))}
    </div>
  );
}
