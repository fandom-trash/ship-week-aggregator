import "./App.css";
import { useState, useEffect } from "react";
import Ao3Post from "./components/Ao3Post";
import InstaPost from "./components/InstaPost";
import TumblrPost from "./components/TumblrPost";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("/posts")
      .then((r) => r.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);

  return (
    <div className="App">
      {posts.map((post) => {
        switch (post.source) {
          case "AO3":
            return <Ao3Post key={post.id} post={post} />;
          case "INSTA":
            return <InstaPost key={post.id} post={post} />;
          case "TUMBLR":
            return <TumblrPost key={post.id} post={post} />;
          default:
            return <div key={post.id}></div>;
        }
      })}
    </div>
  );
}

export default App;
