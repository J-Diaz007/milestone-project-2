import React from 'react';

function PostDelete(props) {
  const handleDeletePost = () => {
    const { index, onDelete } = props;
    onDelete(index);
  }

  return (
    <div>
      <button onClick={handleDeletePost}>Delete</button>
    </div>
  );
}

export default PostDelete;
