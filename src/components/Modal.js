import React, { Component } from "react";

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confrimHandler() {
    props.onConfrim();
  }

  return (
    <div className="modal">
      <p> are you sure ?</p>
      <button className="btn btn-alt" onClick={props.onCancel}>
        cancel
      </button>
      <button className="btn btn-alt" onClick={confrimHandler}>
        confrim ?
      </button>
    </div>
  );
}

export default Modal;
