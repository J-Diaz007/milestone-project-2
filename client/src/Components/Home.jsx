import React, { useState, useEffect } from "react";
import InputText from "./InputText";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import PostUpdate from "./PostUpdate";
import PostDelete from "./PostDelete";

function Home() {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };
  const handleUpdatePost = (index, newCaption) => {
    const postToUpdate = posts[index];
    if (!postToUpdate) {
      console.error("Post to update not found.");
      return;
    }

    const postId = postToUpdate._id;
    const API_URL = "http://localhost:5001/api/posts"; // Ensure this is your correct API URL

    // Retrieve the auth token correctly from your auth context or state
    const token = "your_auth_token_here"; // Make sure you replace this with the actual token

    axios
      .put(
        `${API_URL}/${postId}`,
        { caption: newCaption },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Ensure the token is being sent correctly
          },
        }
      )
      .then((response) => {
        const updatedPosts = [...posts];
        updatedPosts[index] = response.data; // Ensure the response data has the same structure as your posts
        setPosts(updatedPosts); // Update your state with the new posts array
        console.log("Successfully updated post!", response.data);
      })
      .catch((error) => {
        console.error("Error updating post:", error);
      });
  };

  const handleDeletePost = (index) => {
    const postToDelete = posts[index];
    if (!postToDelete) {
      console.error("Post to delete not found.");
      return;
    }

    const postId = postToDelete._id;
    const API_URL = "http://localhost:5001/api/posts"; // Update this URL as needed

    // Add your logic to retrieve the auth token
    const token = "your_auth_token_here";

    axios
      .delete(`${API_URL}/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts(updatedPosts);
        console.log("Successfully deleted post.");
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
        // Optionally, inform the user that the deletion failed using a UI element or notification
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
      });
  }, []);

  return (
    <div className="container mt-5">
      <img className="logo" src="../logo.png" alt="Instagram Logo" />

      <InputText onNewPost={handleNewPost} />

      {posts.length === 0 ? (
        <div className="text-center mt-5">
          <h2>Nothing Posted</h2>
          <img src="../instapic.jpeg" alt="Blue Mouatin Img" />
        </div>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="card mt-4">
            <img src={post.imgUrl} alt="Post" className="card-img-top" />
            <div className="card-body">{post.caption}</div>
            <PostUpdate index={index} onUpdate={handleUpdatePost} />
            <PostDelete index={index} onDelete={handleDeletePost} />
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
