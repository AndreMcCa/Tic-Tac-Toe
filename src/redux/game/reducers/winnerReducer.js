import { IS_WINNER } from "../../../constants/game-constants";

const winnerReducer = (winner = null, { type, payload }) => {
  switch (type) {
    case IS_WINNER:
      return payload;

    default:
      return winner;
  }
};

export default winnerReducer;
