import React, { useState } from "react";
import { updatePost, deletePost, createPost } from "../api";

function PostDetails({ post }) {
  const [postData, setPostData] = useState({
    title: post.title,
    slug: post.slug,
    body: post.body,
    author: post.author,
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdatePost = async () => {
    try {
      await updatePost(post.id, postData);
      alert("Post updated successfully");
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Error updating post. Please try again.");
    }
  };

  const handleDeletePost = async () => {
    try {
      await deletePost(post.id);
      alert("Post deleted successfully");
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Error deleting post. Please try again.");
    }
  };

  const handleCreatePost = async () => {
    try {
      await createPost(postData);
      alert("New post created successfully");
      // Clear the form after successful creation
      setPostData({
        title: "",
        slug: "",
        body: "",
        author: "",
      });
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Error creating post. Please try again.");
    }
  };

  return (
    <div>
      <h2>Post Details</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={postData.title}
          onChange={handleInputChange}
        />

        <label htmlFor="slug">Slug:</label>
        <input
          type="text"
          id="slug"
          name="slug"
          value={postData.slug}
          onChange={handleInputChange}
        />

        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          name="body"
          value={postData.body}
          onChange={handleInputChange}
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={postData.author}
          onChange={handleInputChange}
        />

        {/* Add more input fields for additional post details */}

        <button type="button" onClick={handleUpdatePost}>
          Update Post
        </button>
        <button type="button" onClick={handleDeletePost}>
          Delete Post
        </button>
        <button type="button" onClick={handleCreatePost}>
          Create Post
        </button>
      </form>
    </div>
  );
}

export default PostDetails;
