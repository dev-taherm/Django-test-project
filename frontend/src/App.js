import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { getAuthors, getPosts } from "./api";

import AuthorDetails from "./components/AuthorDetails";
import PostDetails from "./components/PostDetails";

function App() {
  const [authors, setAuthors] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const authorsData = await getAuthors();
      setAuthors(authorsData);
    };

    const fetchPosts = async () => {
      const postsData = await getPosts();
      setPosts(postsData);
    };

    fetchAuthors();
    fetchPosts();
  }, []);

  return (
    <Router>
      <div>
        <h1>Authors</h1>
        <ul>
          {authors.map((author) => (
            <li key={author.id}>
              <Link to={`/authors/${author.id}`}>{author.name}</Link>
            </li>
          ))}
        </ul>

        <h1>Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>

        <Routes>
          {authors.map((author) => (
            <Route
              key={author.id}
              path={`/authors/${author.id}`}
              element={<AuthorDetails author={author} />}
            />
          ))}
          {posts.map((post) => (
            <Route
              key={post.id}
              path={`/posts/${post.id}`}
              element={<PostDetails post={post} />}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
