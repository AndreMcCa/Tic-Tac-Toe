import { NEXT_PLAYER } from "../../../constants/game-constants";

export const nextPlayer = players => ({ type: NEXT_PLAYER, payload: players });
