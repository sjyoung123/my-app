import PropTypes from "prop-types";
import { useEffect } from "react/cjs/react.development";
import styles from "./Button.module.css";

function Button({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

Button.prototype = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
