import React from "react";
import { range } from "../../utils";

function Grid({ columns = 1, rows = 1, result = [] }) {
  return (
    <div className="guess-results">
      {range(0, rows).map((rowIndex) => (
        <p className="guess" key={rowIndex}>
          {range(0, columns).map((colIndex) => (
            <span
              className={`cell ${result?.[rowIndex]?.[colIndex]?.status ?? ""}`}
              key={colIndex}
            >
              {result[rowIndex] && result[rowIndex][colIndex].letter}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default Grid;
