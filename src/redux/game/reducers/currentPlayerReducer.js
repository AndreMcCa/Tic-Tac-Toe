import { NEXT_PLAYER, X_PLAYER, O_PLAYER } from "../../../constants/game-constants";

const initialPlayers = [X_PLAYER, O_PLAYER];

const currentPlayerReducer = (currentPlayer = initialPlayers[0], { type, payload }) => {
  switch (type) {
    case NEXT_PLAYER:
      return payload;

    default:
      return currentPlayer;
  }
};

export default currentPlayerReducer;
