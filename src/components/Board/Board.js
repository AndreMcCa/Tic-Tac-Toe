import React from "react";
import Square from "../Square/Square";
import s from "./Board.module.css";

function Board({ squares, onHandlerSquareClick }) {
  return (
    <ul className={s.board}>
      {squares.map((item, idx) => {
        return (
          <li key={idx}>
            <Square value={item} onClick={() => onHandlerSquareClick(idx)} />
          </li>
        );
      })}
    </ul>
  );
}

export default Board;
