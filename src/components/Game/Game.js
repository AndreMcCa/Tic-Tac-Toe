import React from "react";
import Board from "../Board";
import Button from "../Button";
import s from "./Game.module.css";

function Game({ currentPlayer, winner }) {
  return (
    <>
      <h1 className={s.heading}>Tic Tac Toe</h1>
      <p className={s.text}>Current turn: {currentPlayer}</p>
      <div className="game">
        <Board />
      </div>
      {winner && <p className={s.text}>Winner: {winner}</p>}
      {winner && (
        <Button className="button" onClick={() => {}}>
          New Game
        </Button>
      )}
    </>
  );
}

export default Game;
