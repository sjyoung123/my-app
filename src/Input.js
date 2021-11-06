import PropTypes from "prop-types";
import { useEffect, useState } from "react/cjs/react.development";

function Input() {
  const [inputValue, setInputValue] = useState();
  const onChange = (event) => {
    setInputValue(event.target.value);
  };
  useEffect(() => {
    console.log("Only input value change");
  }, [inputValue]);
  return (
    <div>
      <input onChange={onChange} type="text" placeholder="input1"></input>
      <input type="text" value={inputValue} placeholder="input2"></input>
    </div>
  );
}
export default Input;
