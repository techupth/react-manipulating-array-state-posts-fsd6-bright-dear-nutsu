import "./App.css";
import Posts from "./components/Posts";
import postsList from "./components/data/posts";

function App() {
  return (
    <div className="App">
      <div class="app-wrapper">
        <h1 class="app-title">Posts</h1>
        <div class="post-list">
          {postsList.map((item, i) => (
            <Posts
              title={item.title}
              content={item.content}
              likes={item.likes}
            />
            // <div key={i}>
            //   <div>{item.title}</div>
            //   <div>{item.content}</div>
            //   <div>{item.likes}</div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
