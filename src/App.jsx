import { useMemo, useState } from "react";
import WordAddForm from "./components/WordAddForm";
import WordList from "./components/WordList";
import "./styles/App.css";
import WordFilter from "./components/WordFilter";
import api from "./utils/api";
import Header from "./components/Header";
import Title from "./components/Title";

function App() {
  const [words, setWords] = useState([
    {
      id: 1,
      name: "recognize",
      partOfSpeech: 'verb',
      description:
        "to identify someone or something that has been seen or known before",
      sentence: "I recogized him, because I have seen him before",
      date: Date.now().toString(),
    },
    {
      id: 2,
      name: "replacement",
      partOfSpeech: 'verb',
      description: "the action of process of replacing someone or something",
      sentence: "It was very hard to find a replacement for her",
      date: Date.now().toString(),
    },
    {
      id: 3,
      name: "bargain",
      partOfSpeech: 'verb',
      description: "to dicsuss the price of something to come to an agreement",
      sentence:
        "He saves a lot of money by bargaining for every item that he buys",
      date: Date.now().toString(),
    },
  ]);

  function createWord(newWord) {
    setWords([...words, newWord]);
  }

  function removeWord(word) {
    setWords(words.filter((w) => w.id !== word.id));
  }

  const [filter, setFilter] = useState({ query: "", sort: "" });

  const sortedWords = useMemo(() => {
    if (filter.sort) {
      return [...words].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return words;
  }, [filter.sort, words]);

  const sortedAndSearchedWords = useMemo(() => {
    return sortedWords.filter((word) =>
      word.name.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedWords]);

  return (
    <div className="App">
      <Header />
      <WordAddForm create={createWord} />
      <Title title="My Words" />
      <WordFilter filter={filter} setFilter={setFilter} />
      <WordList words={sortedAndSearchedWords} remove={removeWord} />
    </div>
  );
}

export default App;
