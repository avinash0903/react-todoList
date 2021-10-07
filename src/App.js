import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [item, setItem] = useState('');
  function itemEvent(e) {
    setItem(e.target.value);
  }
  return (
    <div>
      <div className="mainDiv">
        <div className="centreDiv">
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Item" onChange={itemEvent} />
          <button>+</button>
          <ol>
            <li>{item}</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default App;
