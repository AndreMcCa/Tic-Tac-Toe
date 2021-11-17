import { NEW_GAME, UPDATE_BOARD } from "../../constants/game-constants";

export const newGame = () => ({ type: NEW_GAME });
export const updateBoard = (payload) => ({ type: UPDATE_BOARD, payload });