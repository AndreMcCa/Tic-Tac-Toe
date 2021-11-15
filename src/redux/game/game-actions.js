import { UPDATE_BOARD, CHANGE_QUEUE, NEXT_PLAYER, IS_WINNER } from "../../constants/game-constants";

export const updateBoard = (idx, currentPlayer) => ({ type: UPDATE_BOARD, payload: idx, currentPlayer });
export const changeQueue = () => ({ type: CHANGE_QUEUE });
export const nextPlayer = players => ({ type: NEXT_PLAYER, payload: players });
export const showWinner = winner => ({ type: IS_WINNER, payload: winner });
