import React, { useState } from "react";

function InputText(props) {
  const [text, setText] = useState("");
  //handle submit creates a value for the text input then
  //trim makes it so user cant just press spaces.
  //made an alert that triggers if not text.

  //also, added a form tag so we can submit using the enter button that is why it requires e.preventDefault()
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
    <div>
      {/* form tag added here */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="input-text"
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputText;
