import React from "react";
import { connect } from "react-redux";
import Square from "../Square/Square";
import s from "./Board.module.css";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

function Board({ items = new Array(9).fill(0), onHandlerSquareClick }) {
  return (
    <ul className={s.board} >
      {items.map((item, idx) => {
        return <li key={idx} >
          <Square value={item}  onClick={() => handlerSquareClick(idx)}/>
        </li>;
      })}
    </ul>
  );
}

// const mapStateToProps = state => ({ items: state.board });
// const mapDispatchToProps = dispatch => ({
//   onHandlerSquareClick: idx => {}
// })

// export default connect(mapStateToProps)(Board) ;

export  default  Board;
