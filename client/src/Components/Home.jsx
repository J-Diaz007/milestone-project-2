import React, { useState } from "react";
import InputText from "./InputText";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (postText) => {
    setPosts((prevPosts) => [postText, ...prevPosts]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Instagram</h1>
      <InputText onNewPost={handleNewPost} />

      {posts.length === 0 ? (
        <div className="text-center mt-5">
          <h2>Nothing Posted</h2>
        </div>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="card mt-4">
            {/* <img src={place holder image} alt="Post" className="card-img-top"/> {placeholderimg}*/}
            <div className="card-body">{post}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
