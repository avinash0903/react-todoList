import React, { useState } from 'react';
import './style.css';

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
            {data.map((itemval) => {
              return <li>{itemval}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default App;
