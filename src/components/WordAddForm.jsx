import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyTextArea from "./UI/textarea/MyTextArea";
import MyButton from "./UI/button/MyButton";
import api from "../utils/api";
import classses from "../components/UI/textarea/MyTextArea.module.css";

const WordAddForm = ({ create }) => {
  const [word, setWord] = useState(
    {
      name: "",
      partOfSpeech: "",
      description: "",
      partOfSpeech: "",
      sentence: "",
      date: "",
    },
    []
  );

  function addNewWord(evt) {
    evt.preventDefault();
    const newWord = { ...word, id: Date.now(), date: Date.now().toString() };
    create(newWord);
    setWord({ name: "", partOfSpeech: "", description: "", sentence: "", date: "" });
  }

  const visabilityAttribute = `${classses.MyTextArea} ${
    word.name ? `${classses.MyTextArea_active}` : ""}`



  function getWord(evt) {
    evt.preventDefault();
    console.log(word.name);
    api.getWord(word.name).then((res) => {
      setWord({
        ...word,
        description: res[0].meanings[0].definitions[0].definition,
        sentence: res[0].meanings[0].definitions[0].example,

      });
      console.log(word);
      console.log(res[0].meanings[0]);
    });


  }


  return (
    <form className="form">
      <div className="search">
      <MyInput
        onChange={(evt) => setWord({ ...word, name: evt.target.value })}
        value={word.name}
        placeholder="a word"
      />
      <MyButton onClick={getWord}>Get</MyButton>
      <MyButton onClick={addNewWord}>Add</MyButton>
      </div>

      <MyTextArea
      
        onChange={(evt) => setWord({ ...word, description: evt.target.value })}
        value={word.description}
        placeholder="meaning of the word (optional)"
        className={visabilityAttribute}
        
      />
      <MyTextArea
        onChange={(evt) => setWord({ ...word, sentence: evt.target.value })}
        value={word.sentence}
        placeholder="sentence example (optional)"
        className={visabilityAttribute}
      />

    </form>
  );
};

export default WordAddForm;