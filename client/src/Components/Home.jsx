import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import PostUpdate from "./PostUpdate";
import PostDelete from "./PostDelete";

function Home() {
  const [posts, setPosts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleNewPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  const handleUpdatePost = (index, newCaption, newImgUrl) => {
    const postToUpdate = posts[index];
    if (!postToUpdate) {
      console.error("Post to update not found.");
      setErrorMsg("Error: Post to update not found.");
      return;
    }

    const postId = postToUpdate._id;
    const API_URL = "http://localhost:5001/api/posts";

    axios
      .put(
        `${API_URL}/${postId}`,
        { caption: newCaption, imgUrl: newImgUrl },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const updatedPosts = [...posts];
        updatedPosts[index] = response.data;
        setPosts(updatedPosts);
        setErrorMsg(""); // Clear any previous error messages
        console.log("Successfully updated post!", response.data);
      })
      .catch((error) => {
        console.error("Error updating post:", error);
        setErrorMsg("Error updating post.");
      });
  };

  const handleDeletePost = (index) => {
    const postToDelete = posts[index];
    if (!postToDelete) {
      console.error("Post to delete not found.");
      setErrorMsg("Error: Post to delete not found.");
      return;
    }

    const postId = postToDelete._id;
    const API_URL = "http://localhost:5001/api/posts";
    const token = "your_auth_token_here";

    axios
      .delete(`${API_URL}/${postId}`, {
        headers: {},
      })
      .then(() => {
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts(updatedPosts);
        setErrorMsg(""); // Clear any previous error messages
        console.log("Successfully deleted post.");
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        setErrorMsg("Error deleting post.");
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the posts:", error);
        setErrorMsg("Error fetching posts.");
      });
  }, []);

  return (
    <div className="container mt-5">
      <img className="logo mb-3" src="../logo.png" alt="Instagram Logo" />

      <InputText onNewPost={handleNewPost} />

      {errorMsg && (
        <div className="alert alert-danger" role="alert">
          {errorMsg}
        </div>
      )}

      {posts.length === 0 ? (
        <div className="text-center mt-5">
          <h2>Nothing Posted Yet</h2>
          <img
            src="../instapic.jpeg"
            alt="Blue Mountain Img"
            className="img-fluid"
          />
        </div>
      ) : (
        posts.map((post, index) => (
          <div key={post._id} className="card mt-4">
            <img src={post.imgUrl} alt="Post" className="card-img-top" />
            <div className="card-body">
              <p>{post.caption}</p>
            </div>
            <div className="card-footer bg-white">
              <PostUpdate index={index} onUpdate={handleUpdatePost} />
              <PostDelete index={index} onDelete={handleDeletePost} />
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
