import { UPDATE_BOARD, NEW_GAME } from "../../../constants/game-constants";
import generateBoard from "../../../helpers/generateBoard";

const boardReducer = (board = generateBoard(), { type, payload, currentPlayer }) => {
  switch (type) {
    case UPDATE_BOARD:
      return board.map((el, idx) => (idx === payload ? currentPlayer : el));
    case NEW_GAME:
      return  generateBoard();

    default:
      return board;
  }
};

export default boardReducer;
