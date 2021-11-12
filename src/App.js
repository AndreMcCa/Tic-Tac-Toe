import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import Button from "./components/Button";
import * as actions from "./redux/counter/counter-actions";

function App({ step, value, onIncrement, onDecrement }) {
  // const [value, setValue] = useState(0);
  // const handleButtonIncrement = useCallback(() => setValue(prevValue => prevValue + 1), [])
  // const handleButtonDecrement = useCallback(() => setValue(prevValue => prevValue - 1), [])

  return (
    <div className="counter">
      <Button type="button" className="btn-increment" onClick={() => onIncrement(step)}>
        + {step}
      </Button>
      <div className="counter-value">{value}</div>
      <Button type="button" className="btn-increment" onClick={() => onDecrement(step)}>
        - {step}
      </Button>
    </div>
  );
}

const mapStateToProps = state => ({ value: state.counter.value, step: state.counter.step });
const mapDispatchToProps = dispatch => ({
  onIncrement: step => {
    dispatch(actions.increment(step));
  },
  onDecrement: step => {
    dispatch(actions.decrement(step));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
