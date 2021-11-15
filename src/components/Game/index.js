import { connect } from "react-redux";
import Game from "./Game";

const mapStateToProps = state => ({ currentPlayer: state.game.currentPlayer, winner: state.game.winner });

export default connect(mapStateToProps)(Game);
