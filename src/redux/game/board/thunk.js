import checkForWin from "../../../helpers/checkForWin";
import isThereMove from "../../../helpers/isThereMove";
import { getPlayers, getCurrentPlayer, getBoard, getWinner } from "../selectors";
import { updateBoard } from "./action";
import { showWinner } from "../winner/action";
import { newGame } from "../action";
import { nextPlayer } from "../currentPlayer/action";
import { changeQueue } from "../players/action";


export const onHandlerSquareClick = (idx) => (dispatch, getState) => {
  const state = getState();

  if (getWinner(state)) {
    return;
  }

  if (getBoard(state)[idx]) {
    return;
  }

  dispatch(updateBoard({ idx, currentPlayer: getCurrentPlayer(state) }));

  if (checkForWin(getPlayers(state), getBoard(getState()))) {
    dispatch(showWinner(getCurrentPlayer(state)));
    return;
  }

  if (isThereMove(getBoard(getState()))) {
    dispatch(newGame());
    return;
  }

  dispatch(changeQueue());
  dispatch(nextPlayer(getPlayers(state)[0]));
};


//
// dispatch(updateBoard({ idx, currentPlayer: getCurrentPlayer(state) }));
//
// if (checkForWin(getPlayers(state), getBoard(state))) {
//   dispatch(showWinner(getCurrentPlayer(state)));
//   return;
// }
//
// if (isThereMove(getBoard(state))) {
//   console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
//   dispatch(newGame());
//   return;
// }
//
// dispatch(changeQueue());
// dispatch(nextPlayer(getPlayers(state)[0]));