import Board from "./Board";
import { connect } from "react-redux";
import { onHandlerSquareClick } from "../../redux/game/board/thunk";

const mapStateToProps = state => ({ squares: state.game.board });
export default connect(mapStateToProps, { onHandlerSquareClick })(Board);
