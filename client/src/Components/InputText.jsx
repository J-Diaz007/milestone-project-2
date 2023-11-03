import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function InputText(props) {
  const [text, setText] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      alert("Please enter a valid caption!");
    } else {
      axios
        .post("http://localhost:5001/api/posts", {
          caption: text,
          imgUrl: imgUrl,
        })
        .then((response) => {
          console.log(response.data);
          props.onNewPost(response.data);
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
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            className="form-control"
            placeholder="Enter image URL"
          />

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
              className="btn btn-success"
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
