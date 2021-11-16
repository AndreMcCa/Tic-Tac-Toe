import { IS_WINNER } from "../../../constants/game-constants";

export const showWinner = winner => ({ type: IS_WINNER, payload: winner });