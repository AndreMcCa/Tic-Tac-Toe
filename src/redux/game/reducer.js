import { combineReducers } from "redux";
import board from "./board/reducer";
import players from "./players/reducer";
import winner from "./winner/reducer";
import currentPlayer from "./currentPlayer/reducer";

const reducer = combineReducers({
  board,
  players,
  currentPlayer,
  winner,
});

export default reducer;