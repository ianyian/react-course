import React, { Component, useState } from "react";
import reactDom from "react-dom";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

// capital at the beginning of funtion name, in order to diffentiate native and react
function Todo(props) {
  const [modalIsOpen, setModalOpen] = useState(false);

  function deleteHandler() {
    setModalOpen(true);
  }

  function closeModalHandler() {
    setModalOpen(false);
  }

  return (
    <div>
      <h1>my todos</h1>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        {modalIsOpen ? (
          <Modal onCancel={closeModalHandler} onConfrim={closeModalHandler} />
        ) : null}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    </div>
  );
}

export default Todo;
