import './App.css';
import {useState, useEffect} from 'react';
import Ao3Post from './components/Ao3Post';
import InstaPost from './components/InstaPost';

function App() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("/posts").then((r) => r.json()).then((posts) => {
            console.log(posts);
            setPosts(posts);
        });
    }, [])

  return (
    <div className="App">
      {posts.map((post) => (
          post.source === "AO3"
            ? <Ao3Post post={post}/>
            : <InstaPost post={post}/>
      ))}
    </div>
  );
}

export default App;
