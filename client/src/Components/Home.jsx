import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the posts:", error);
      });
  }, []);

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
            <img src={post.imgUrl} alt="Post" className="card-img-top" />
            <div className="card-body">{post.caption}</div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
