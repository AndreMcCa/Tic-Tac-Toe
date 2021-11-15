import { connect } from "react-redux";
import Game from "./Game";
import {newGame} from "../../redux/game/game-actions";

const mapStateToProps = state => ({ currentPlayer: state.game.currentPlayer, winner: state.game.winner });
const mapDispatchToProps = dispatch => ({
  onHandlerNewGameButton: () => dispatch(newGame())});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
