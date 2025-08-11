import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Grid from "../Grid";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState([]);

  // const result = checkGuess("WHALE", "LEARN");
  const result = guess.map((g) => checkGuess(g, answer));

  if (guess.length >= NUM_OF_GUESSES_ALLOWED) {
    return <p>Game Over! The answer was: {answer}</p>;
  }

  return (
    <>
      Put a game here!
      <Grid columns={5} rows={5} result={result} />
      <GuessInput guess={guess} setGuess={setGuess} />
    </>
  );
}

export default Game;
