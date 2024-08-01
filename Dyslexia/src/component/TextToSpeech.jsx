import React from "react";

const TextToSpeech = ({ text }) => {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return <button onClick={speak}>Read Aloud</button>;
};

export default TextToSpeech;
