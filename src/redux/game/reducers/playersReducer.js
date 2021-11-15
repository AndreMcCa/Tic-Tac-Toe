import { CHANGE_QUEUE, X_PLAYER, O_PLAYER } from "../../../constants/game-constants";

const initialPlayers = [X_PLAYER, O_PLAYER];

const playersReducer = (players = initialPlayers, { type }) => {
  switch (type) {
    case CHANGE_QUEUE:
      return players.reverse();

    default:
      return players;
  }
};

export default playersReducer;
