import { combineReducers } from "redux";
import boardReducer from "./reducers/boardReducer";
import playersReducer from "./reducers/playersReducer";
import currentPlayerReducer from "./reducers/currentPlayerReducer";
import winnerReducer from "./reducers/winnerReducer";

const gameReducer = combineReducers({
  board: boardReducer,
  players: playersReducer,
  currentPlayer: currentPlayerReducer,
  winner: winnerReducer,
});

export default gameReducer;
