import React from "react";
import PropTypes from "prop-types";
import Board from "../Board";
import Button from "../Button";
import s from "./Game.module.css";

function Game({ currentPlayer, winner, newGame }) {
  return (
    <>
      <h1 className={s.heading}>Tic Tac Toe</h1>
      <p className={s.text}>Current turn: {currentPlayer}</p>
      <div className="game">
        <Board />
      </div>
      {winner && <p className={s.text}>Winner: {winner}</p>}
      {winner && (
        <Button className="button" type="button" onClick={newGame}>
          New Game
        </Button>
      )}
    </>
  );
}

Game.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  winner: PropTypes.string,
  newGame: PropTypes.func,
};

export default Game;