import React, { useState } from "react";
import "./Dictionary.css";

const Dictionary = () => {
  const initialDictionary = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];
  const [dictionary] = useState(initialDictionary);
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const foundWord = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundWord) {
      setResult(foundWord.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };
  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Search</button>
      <h4>Definition:</h4>
      <div className="result">{result}</div>
    </div>
  );
};

export default Dictionary;
