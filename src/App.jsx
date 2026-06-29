import "./App.css";
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import PostDetail from "./pages/PostDetail";
import PostNew from "./pages/PostNew";
import NotFound from "./pages/NotFound";
import PostEdit from "./pages/PostEdit";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let alive = true;

    fetch(`${import.meta.env.BASE_URL}data/blog.json`)
      .then(res => res.json())
      .then(result => {
        if (alive) {
          setPosts(result);
          setLoaded(true);
        }
      });

    return () => {
      alive = false;
    };
  }, []);

  const handleDeletePost = idToDelete => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== idToDelete));
  };

  const handleCreatePost = newPost => {
    setPosts(prevPosts => [...prevPosts, newPost]);
  };

  const handleUpdatePost = updatedPost => {
    setPosts(prevPosts => prevPosts.map(p => (p.id === updatedPost.id ? updatedPost : p)));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout loaded={loaded} />}>
          <Route index element={<Home posts={posts} />} />
          <Route path="posts" element={<Posts posts={posts} />} />
          <Route path="posts/new" element={<PostNew onCreate={handleCreatePost} />} />
          <Route
            path="posts/:id"
            element={<PostDetail posts={posts} onDelete={handleDeletePost} />}
          />
          <Route
            path="posts/:id/edit"
            element={<PostEdit posts={posts} onUpdate={handleUpdatePost} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
