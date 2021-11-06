import { useState, useEffect } from "react";

function Hello() {
  // const byeFunc = () => {
  //   console.log("Bye :(");
  // };
  // const hiFunc = () => {
  //   console.log("Hi :)");
  //   return byeFunc; //cleanup func
  // };
  // useEffect(hiFunc, []);

  useEffect(() => {
    console.log("hi:)");
    return () => console.log("bye:("); //cleanup func
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
