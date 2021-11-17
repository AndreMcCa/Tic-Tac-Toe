import { createSelector } from "reselect";

export const getGame = (state) => state.game;
export const getBoard = createSelector(getGame, (game) => game.board);
export const getWinner = createSelector(getGame, (game) => game.winner);
export const getCurrentPlayer = createSelector(getGame, (game) => game.currentPlayer);