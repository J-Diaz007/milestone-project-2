import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function InputText(props) {
  const [text, setText] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const isValidHttpUrl = (string) => {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "" || !isValidHttpUrl(imgUrl)) {
      alert("Please enter a valid caption and image URL!");
      return;
    }
    axios
      .post("http://localhost:5001/api/posts", {
        caption: text,
        imgUrl: imgUrl,
      })
      .then((response) => {
        console.log(response.data);
        props.onNewPost(response.data);
        setText("");
        setImgUrl("");
      })
      .catch((error) => {
        console.error("There was an error posting the caption:", error);
        alert("Failed to post your caption. Please try again.");
      });
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
            aria-label="Image URL"
          />
          {imgUrl && isValidHttpUrl(imgUrl) && (
            <div className="img-preview" style={{ margin: "10px 0" }}>
              <img
                src={imgUrl}
                alt="Preview"
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
              />
            </div>
          )}
          <input
            required
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-control"
            placeholder="What's on your mind?"
            aria-label="Caption"
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleSubmit}
            >
              <strong>Post</strong>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InputText;
