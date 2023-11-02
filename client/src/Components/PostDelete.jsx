import React, { Component } from 'react';

class PostDelete extends Component {
  handleDeletePost = () => {
    const { index, onDelete } = this.props;
    onDelete(index);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDeletePost}>Delete</button>
      </div>
    );
  }
}

export default PostDelete;