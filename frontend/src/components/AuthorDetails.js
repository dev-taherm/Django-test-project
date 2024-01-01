import React, { useState } from "react";
import { updateAuthor, deleteAuthor, createAuthor } from "../api";

function AuthorDetails({ author }) {
  const [authorData, setAuthorData] = useState({
    name: author.name,
    age: author.age,
    email: author.email,
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    setAuthorData({
      ...authorData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateAuthor = async () => {
    try {
      await updateAuthor(author.id, authorData);
      alert("Author updated successfully");
    } catch (error) {
      console.error("Error updating author:", error);
      alert("Error updating author. Please try again.");
    }
  };

  const handleDeleteAuthor = async () => {
    try {
      await deleteAuthor(author.id);
      alert("Author deleted successfully");
    } catch (error) {
      console.error("Error deleting author:", error);
      alert("Error deleting author. Please try again.");
    }
  };

  const handleCreateAuthor = async () => {
    try {
      await createAuthor(authorData);
      alert("New author created successfully");
      // Clear the form after successful creation
      setAuthorData({
        name: "",
        age: "",
        email: "",
      });
    } catch (error) {
      console.error("Error creating author:", error);
      alert("Error creating author. Please try again.");
    }
  };

  return (
    <div>
      <h2>Author Details</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={authorData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={authorData.age}
          onChange={handleInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={authorData.email}
          onChange={handleInputChange}
        />

        {/* Add more input fields for additional author details */}

        <button type="button" onClick={handleUpdateAuthor}>
          Update Author
        </button>
        <button type="button" onClick={handleDeleteAuthor}>
          Delete Author
        </button>
        <button type="button" onClick={handleCreateAuthor}>
          Create Author
        </button>
      </form>
    </div>
  );
}

export default AuthorDetails;
