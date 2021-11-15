import { CHANGE_QUEUE, X_PLAYER, O_PLAYER, NEW_GAME } from "../../../constants/game-constants";

const initialPlayers = [X_PLAYER, O_PLAYER];

const playersReducer = (players = initialPlayers, { type }) => {
  switch (type) {
    case CHANGE_QUEUE:
      return players.reverse();
    case NEW_GAME:
      return initialPlayers;

    default:
      return players;
  }
};

export default playersReducer;
