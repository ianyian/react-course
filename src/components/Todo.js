import React, { Component } from "react";
import reactDom from "react-dom";

// capital at the beginning of funtion name, in order to diffentiate native and react
function Todo({ text }) {
  return (
    <div>
      <h1>my todos</h1>
      <div className="card">
        <h2>{text}</h2>
        <div className="actions">
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
