import { useState, useEffect } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount((prev) => prev + 1);
  useEffect(() => {
    console.log("render only once");
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={onClick} text="Click Me" />
    </div>
  );
}

export default App;
