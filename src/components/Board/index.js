import Board from "./Board";
import { connect } from "react-redux";
import * as actions from "../../redux/game/game-actions";
import checkForWin from "../../helpers/checkForWin";
import isThereMove from "../../helpers/isThereMove";
import store from "../../redux/store";

const mapStateToProps = state => ({ squares: state.game.board });

const mapDispatchToProps = dispatch => ({
  onHandlerSquareClick: idx => {
    const { currentPlayer, players, board, winner } = store.getState().game;

    if (winner) {
      return;
    }

    if (board[idx]) {
      return;
    }

    dispatch(actions.updateBoard(idx, currentPlayer));

    if (checkForWin(players, store.getState().game.board)) {
      dispatch(actions.showWinner(currentPlayer));
      return;
    }

    if (isThereMove(store.getState().game.board)) {
      dispatch(actions.newGame());
      return;
    }

    dispatch(actions.changeQueue());
    dispatch(actions.nextPlayer(players[0]));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
