import { getBoard, getWinner } from "./selectors";
import { updateBoard } from "./actions";

export const onSquareClick = (idx) => (dispatch, getState) => {
  const state = getState();
  const board = getBoard(state);

  if (getWinner(state)) {
    return;
  }

  if (board[idx]) {
    return;
  }

  dispatch(updateBoard(idx));
};