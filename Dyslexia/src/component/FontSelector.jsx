import React from "react";

const FontSelector = ({ font, setFont }) => {
  return (
    <select onChange={(e) => setFont(e.target.value)} value={font}>
      <option value="OpenDyslexic">OpenDyslexic</option>
      <option value="Comic Sans">Comic Sans</option>
      <option value="Arial">Arial</option>
      <option value="Verdana">Verdana</option>
      <option value="Tahoma">Tahoma</option>
      <option value="Comic Sans MS">Comic Sans MS</option>
      <option value="Century Gothic">Century Gothic</option>
      <option value="Trebuchet MS">Trebuchet MS</option>
      <option value="Calibri">Calibri</option>
      <option value="Dyslexie">Dyslexie</option>
      <option value="Gill Sans">Gill Sans</option>
    </select>
  );
};

export default FontSelector;
