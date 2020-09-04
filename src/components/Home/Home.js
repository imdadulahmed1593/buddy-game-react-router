import React, { useState, useEffect } from "react";
import "./Home.css";
import Post from "../Post/Post";

function Home() {
  const [nightMode, setNightMode] = useState(false);
  const handleNightMode = () => {
    setNightMode(!nightMode);
  };
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div
      style={{ backgroundColor: nightMode ? "black" : "white" }}
      className="home"
    >
      <h1 className="home__title">Buddy Game</h1>
      <button onClick={handleNightMode} className="home__headerBtn">
        Turn On Night Mode
      </button>

      {posts.map((post) => (
        <Post
          key={post.id}
          userId={post.userId}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}

export default Home;
