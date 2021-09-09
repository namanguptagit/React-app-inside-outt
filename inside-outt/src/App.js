import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "❤️": "love",
  "☺️": "smiling",
  "😲": "disbelief",
  "😔": "sad",
  "🥡": "takeout-box",
  "😑": "annoyance"
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we dont have this in our database!";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside outt</h1>
      <input onChange={emojiInputHandler} />
      <div style={{ padding: "2rem", fontSize: "2rem" }}>{meaning}</div>
      <h2>emojis we know</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
            {""}
          </span>
        );
      })}
    </div>
  );
}
