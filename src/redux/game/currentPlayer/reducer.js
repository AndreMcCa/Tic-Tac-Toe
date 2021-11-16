import { NEXT_PLAYER, X_PLAYER, O_PLAYER, NEW_GAME } from "../../../constants/game-constants";

const initialPlayers = [X_PLAYER, O_PLAYER];

const currentPlayer = (currentPlayer = initialPlayers[0], { type, payload }) => {
  switch (type) {
    case NEXT_PLAYER:
      return payload;
    case NEW_GAME:
      return initialPlayers[0];

    default:
      return currentPlayer;
  }
};

export default currentPlayer;
