import { IS_WINNER, NEW_GAME } from "../../../constants/game-constants";

const winnerReducer = (winner = null, { type, payload }) => {
  switch (type) {
    case IS_WINNER:
      return payload;
    case NEW_GAME:
      return null;

    default:
      return winner;
  }
};

export default winnerReducer;
