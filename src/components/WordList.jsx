import React from "react";
import WordItem from "./WordItem";

const WordList = ({ words, remove }) => {
  console.log('WordList');
  if (!words.length) {
    return (
      <div className="not-found">
        <h2 className="not-found__title">
          NOT<br></br>FOUND
        </h2>
        <div className="not-found__img" />
      </div>
    );
  }

  return (
    <ul className="word-list">
      {words.map((word) => (
        <WordItem word={word} key={word.id} remove={remove} />
      ))}
    </ul>
  );
};

export default WordList;
