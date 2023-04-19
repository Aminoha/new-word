import React from "react";

const WordItem = (props) => {
  return (
    <li className="word">
      <button className="word__edit"></button>
      <button
        onClick={() => props.remove(props.word)}
        className="word__trash"
      ></button>
      <h3 className="word__title">{props.word.name}</h3>
      <p className="word__description">{props.word.description}</p>
      <hr style={{ margin: "5px 0", border: ".3px solid black" }} />
      <p className="word__sentence">{props.word.sentence}</p>
    </li>
  );
};

export default WordItem;
