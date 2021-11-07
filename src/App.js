import { string } from "prop-types";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (!toDo) {
      return;
    }
    setToDos((prevArray) => [...prevArray, toDo]); //[toDo].concat(prevArray)
    setToDo("");
  };
  const deleteList = (event) => {
    const li = event.target.parentElement;
    setToDos(() => toDos.filter((item) => item !== li.className));
  };
  return (
    <div>
      <h1>My To-Do List({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text"></input>
        <button>Click</button>
      </form>
      <ul>
        {toDos.map((item, index) => (
          <li key={index} id={index} className={item}>
            {item}
            <span onClick={deleteList}>❌</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
