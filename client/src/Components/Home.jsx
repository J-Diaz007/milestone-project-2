import React, { useState } from "react";
import InputText from "./InputText";

function Home() {
  const [posts, setPosts] = useState([]);
  //created handleNewPost to add the previous item 'previousPosts + PostText'
  const handleNewPost = (postText) => {
    setPosts((prevPosts) => [postText, ...prevPosts]);
  };
  return (
    <div>
      <h1>Instagram</h1>
      <InputText onNewPost={handleNewPost} />
      {posts.length === 0 ? (
        <div>
          <h2>Nothing Posted</h2>
        </div>
      ) : (
        posts.map((post, index) => <div key={index}>{post}</div>)
      )}
    </div>
  );
}

export default Home;
