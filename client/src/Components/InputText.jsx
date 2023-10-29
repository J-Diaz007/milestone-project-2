import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function InputText(props) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      alert("Please enter a valid caption!");
    } else {
      props.onNewPost(text);
      setText("");
    }
  };

  return (
    <div className="my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            id="input-text"
            className="form-control"
            placeholder="What's on your mind?"
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputText;
