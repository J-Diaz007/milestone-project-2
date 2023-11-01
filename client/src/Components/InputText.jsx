import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function InputText(props) {
  const [text, setText] = useState("");
  //* trim removes the white spaces at the beginning and end of the string
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      alert("Please enter a valid caption!");
    } else {
      // * POST request to the backend using .then
      axios
        .post("http://localhost:5001/api/posts", { caption: text })
        .then((response) => {
          console.log(response.data); // * You can handle response from the server here
          props.onNewPost(text);
          setText("");
        })
        .catch((error) => {
          console.error("There was an error posting the caption:", error);
        });
    }
  };

  return (
    <div className="my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            required
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
