import React from "react";
import PropTypes from "prop-types";
import s from "./Square.module.css";

export default function Square({ value, onClick }) {
  return (
    <div className={s.square} onClick={onClick}>
      {value ? value : null}
    </div>
  );
}

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};
