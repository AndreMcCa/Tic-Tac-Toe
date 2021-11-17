import { X_PLAYER, O_PLAYER, UPDATE_BOARD, NEW_GAME } from "../../constants/game-constants";
import generateBoard from "../../helpers/generateBoard";
import checkForWin from "../../helpers/checkForWin";
import isThereMove from "../../helpers/isThereMove";

const initialState = {
  board: generateBoard(),
  players: [X_PLAYER, O_PLAYER],
  currentPlayer: X_PLAYER,
  winner: null,
};

const reducer = (state = initialState, { type, payload }) => {
  const { currentPlayer, board, players } = state;
  const updatedBoard = board.map((el, i) => (i === payload ? currentPlayer : el));
  const isWinner = checkForWin(players, updatedBoard);
  const isNewGame = type === NEW_GAME || isThereMove(updatedBoard);

  if (isNewGame) {
    return initialState;
  }

  if (isWinner) {
    return { ...state, board: updatedBoard, winner: currentPlayer };
  }

  if (type === UPDATE_BOARD) {
    return {
      ...state, board: updatedBoard, currentPlayer: currentPlayer === X_PLAYER ? O_PLAYER : X_PLAYER,
    };
  }

  return state;
};

export default reducer;