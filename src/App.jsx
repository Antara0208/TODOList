import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) =>{
    setItems((oldItems) => {
      return oldItems.filter((arrElement,index)=>{return index !== id});
    });
};


  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>+</button>
          <ol>
            {/* <li>{inputlist}</li> */}
            {items.map((itemsValue, index) => {
              return <TodoList key={index} id={index} text={itemsValue} onSelect={deleteItems}/>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;
