import Board from "./Board";
import { connect } from "react-redux";
import { onSquareClick } from "../../redux/game/thunk";
import { createStructuredSelector } from "reselect";
import { getBoard } from "../../redux/game/selectors";

const mapStateToProps = createStructuredSelector({ squares: getBoard });

export default connect(mapStateToProps, { onSquareClick })(Board);
