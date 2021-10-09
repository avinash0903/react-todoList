import React from 'react';

const ToDoList = (props) => {
  return (
    <>
      <div className="inline">
        <button
          id="remove"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          -
        </button>
        <li>{props.text}</li>
      </div>
    </>
  );
};
export default ToDoList;
