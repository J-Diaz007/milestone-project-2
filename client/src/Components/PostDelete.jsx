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
      class="btn btn-danger"
      >Delete</button>
    </div>
  );
}

export default PostDelete;
