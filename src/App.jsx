import './App.css';
import Posts from './components/Posts';

import posts from './data/posts';

function App() {
  return (
    <div className="App">
      {/* Render posts lists  */}
      {posts.map((post, index) => {
        return (
          <Posts
            key={index}
            id={post.id}
            title={post.title}
            likes={post.likes}
            content={post.content}
          />
        );
      })}
    </div>
  );
}

export default App;
