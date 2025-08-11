import React from "react";

function GuessInput({ guess, setGuess }) {
  const [value, setValue] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={async (e) => {
        e.preventDefault();
        if (value.length !== 5) {
          return alert("Please enter a 5-letter word.");
        }
        setGuess([...guess, value]);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        maxLength={5}
        minLength={5}
        onChange={(e) => setValue(e?.target?.value?.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
