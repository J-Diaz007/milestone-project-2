import React, { Component } from "react";
import "../App.css";

class PostUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      isEditing: false,
    };
  }

  handleUpdatePost = () => {
    const { index, onUpdate } = this.props;
    onUpdate(index, this.state.newName); // Pass newName directly as a string
    this.setState({ newName: "" });
  };

  handleFocus = () => {
    this.setState({ isEditing: true });
  };

  handleBlur = () => {
    this.setState({ isEditing: false });
  };

  render() {
    const inputClass = this.state.isEditing ? "blinking-input" : "";

    return (
      <div>
        <input
          type="text"
          className={inputClass} // Add this line
          value={this.state.newName}
          onChange={(e) => this.setState({ newName: e.target.value })}
          onFocus={this.handleFocus} // Add this line
          onBlur={this.handleBlur} // Add this line
        />
        <button onClick={this.handleUpdatePost}>Update</button>
      </div>
    );
  }
}

export default PostUpdate;
