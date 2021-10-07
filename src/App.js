import React from 'react';
import './style.css';

const App = () => {
  return (
    <div>
      <div className="mainDiv">
        <div className="centreDiv">
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Item" />
          <button>+</button>
          <ol>
            <li>Buy Apple</li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default App;
