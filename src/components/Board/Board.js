import React from "react";
import PropTypes from "prop-types";
import Square from "../Square/Square";
import s from "./Board.module.css";

function Board({ squares, onSquareClick }) {
  return (
    <ul className={s.board}>
      {squares.map((item, idx) => {
        return (
          <li key={idx}>
            <Square value={item} onClick={() => onSquareClick(idx)} />
          </li>
        );
      })}
    </ul>
  );
}

export default Board;

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  onSquareClick: PropTypes.func.isRequired,
};