import React from "react";
import "./ModalForm.css";

export default function ModalForm() {
  return (
    <form className="form-container">
      <button onClick>Close</button>
      <label htmlFor="email"></label>
      <input id="email" placeholder="type your email" />
    </form>
  );
}
