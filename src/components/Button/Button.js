import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ className, type, children, onClick }) => {
  return (
    <button className={s[className]} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  // children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.element, PropTypes.string]),
  onClick: PropTypes.func,
};

export default Button;
