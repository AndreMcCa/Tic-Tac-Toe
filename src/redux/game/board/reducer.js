import { UPDATE_BOARD, NEW_GAME } from "../../../constants/game-constants";
import generateBoard from "../../../helpers/generateBoard";

const boardReducer = (board = generateBoard(), { type, payload }) => {
  switch (type) {
    case UPDATE_BOARD:
      return board.map((el, i) => (i === payload.idx ? payload.currentPlayer : el));
    case NEW_GAME:
      return  generateBoard();

    default:
      return board;
  }
};

export default boardReducer;
