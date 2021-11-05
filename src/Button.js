import PropTypes from "prop-types";
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
