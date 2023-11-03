import React from 'react';

function PostDelete(props) {
  const handleDeletePost = () => {
    const { index, onDelete } = props;
    onDelete(index);
  }

  return (
    <div>
      <button 
      onClick={handleDeletePost}
      type="button" 
      className="btn btn-outline-danger"
      >Delete</button>
    </div>
  );
}

export default PostDelete;
