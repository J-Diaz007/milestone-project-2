import React, { Component } from "react";
import "../App.css";

class PostUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      isEditing: false,
      buttonClicked: false, // * State variable to track when the button click
    };
  }

  handleUpdatePost = () => {
    const { index, onUpdate } = this.props;
    onUpdate(index, this.state.newName);
    this.setState({ newName: "" });
    this.setState({ buttonClicked: true }); // * Sets the buttonClicked state to true
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
          className={inputClass}
          value={this.state.newName}
          onChange={(e) => this.setState({ newName: e.target.value })}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <button
          onClick={this.handleUpdatePost}
          type="button"
          className={`btn custom-button ${this.state.buttonClicked ? 'btn btn-outline-primary' : 'btn-outline-secondary'}`}
        >
          {this.state.buttonClicked ? "Submit" : "Update"}
        </button>
      </div>
    );
  }
}

export default PostUpdate;
