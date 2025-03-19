import { useState, useEffect } from "react";
import { getPosts } from "./api";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h1>Robin's World</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        ))
      ) : (
        <div>
          <h2>Welcome to Robin's World</h2>
          <p>Stay tuned for exciting posts coming soon!</p>
        </div>
      )}
    </div>
  );
}

export default App;