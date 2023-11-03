import React, { Component } from 'react';

class PostUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: '',
    };
  }

  handleUpdatePost = () => {
    const { index, onUpdate } = this.props;
    onUpdate(index, { caption: this.state.newName });
    this.setState({ newName: '' });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newName}
          onChange={(e) => this.setState({ newName: e.target.value })}
        />
        <button onClick={this.handleUpdatePost}>Update</button>
      </div>
    );
  }
}

export default PostUpdate;