import { connect } from "react-redux";
import Game from "./Game";
import { newGame } from "../../redux/game/actions";
import { getCurrentPlayer, getWinner } from "../../redux/game/selectors";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  currentPlayer: getCurrentPlayer,
  winner: getWinner,
});

const mapDispatchToProps = { newGame };

export default connect(mapStateToProps, mapDispatchToProps)(Game);
