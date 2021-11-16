import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Game from "./Game";

import { newGame } from "../../redux/game/action";
import { getCurrentPlayer, getWinner } from "../../redux/game/selectors";

const mapStateToProps = (state) => ({ currentPlayer: getCurrentPlayer(state), winner: getWinner(state) });
const mapDispatchToProps = (dispatch) => ({
  newGame: () => {
    dispatch(newGame());
  },
});
// const mapStateToProps = createStructuredSelector({
//   currentPlayer,
//   winner,
// });
//
// const mapDispatchToProps = {
//   newGame,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
