import React, { useState } from 'react';
import './style.css';

import ToDoList from './ToDoList';

const App = () => {
  const [item, setItem] = useState('');
  const [data, setData] = useState([]);

  function itemEvent(e) {
    setItem(e.target.value);
  }

  const displayData = () => {
    setData((val) => {
      return [...val, item];
    });
    setItem('');
  };
  const deleteItem = (id) => {
    setData((val) => {
      return val.filter((pos, index) => {
        return id !== index;
      });
    });
  };

  return (
    <div>
      <div className="mainDiv">
        <div className="centreDiv">
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Item"
            value={item}
            onChange={itemEvent}
          />
          <button onClick={displayData}>+</button>
          <ol>
            {data.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  onSelect={deleteItem}
                  text={itemval}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default App;
