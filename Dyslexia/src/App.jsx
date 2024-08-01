import React, { useState } from "react";
import FontSelector from "./component/FontSelector";
import TextToSpeech from "./component/TextToSpeech";
import LineSpacing from "./component/LineSpacing";
import "./App.css";

const App = () => {
  const [text, setText] = useState("Your text here...");
  const [font, setFont] = useState("OpenDyslexic");
  const [lineHeight, setLineHeight] = useState(1.5);

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Dyslexia-Friendly Reading Assistant</h1>
      </header>
      <div className="content">
        <div className="controls">
          <FontSelector font={font} setFont={setFont} />
          <LineSpacing lineHeight={lineHeight} setLineHeight={setLineHeight} />
        </div>
        <textarea
          className="text-area"
          style={{ fontFamily: font, lineHeight }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TextToSpeech text={text} />
      </div>
      <footer className="footer">
        <p>created by - Krishnendu Ghosh</p>
      </footer>
    </div>
  );
};

export default App;
