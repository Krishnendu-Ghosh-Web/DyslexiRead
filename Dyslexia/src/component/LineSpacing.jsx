import React from "react";

const LineSpacing = ({ lineHeight, setLineHeight }) => {
  return (
    <div>
      <input
        type="range"
        min="1"
        max="3"
        step="0.1"
        value={lineHeight}
        onChange={(e) => setLineHeight(e.target.value)}
      />
    </div>
  );
};

export default LineSpacing;
