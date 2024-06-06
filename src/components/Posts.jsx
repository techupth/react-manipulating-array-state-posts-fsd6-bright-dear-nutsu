import { useState } from "react";

function Posts(props) {
  const [countLike, setCountLike] = useState(props.likes);
  const handleAddLike = () => {
    setCountLike(+countLike + 1);
  };

  const handleSubtractLike = () => {
    if (countLike > 0) {
      setCountLike(+countLike - 1);
    } else {
      setCountLike = 0;
    }
  };

  return (
    // <div class="app-wrapper">
    //   <h1 class="app-title">Posts</h1>
    //   <div class="post-list">
    <div class="post-item">
      <div class="post-header">
        <h2>Post Title {props.title}</h2>
        <div class="post-social-media-stats">
          <span class="stats-topic">Likes: </span>
          <span class="post-likes">{countLike}</span>
        </div>
      </div>
      <p class="post-content">
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi
            tincidunt, leo non molestie consectetur, elit libero faucibus
            tellus, sed fringilla tortor libero sit amet odio. Maecenas sed ante
            condimentum mauris euismod pellentesque eu eu justo... */}
        {props.content}
      </p>
      <div class="post-actions">
        <button class="like-button" onClick={handleAddLike}>
          Like
        </button>
        <button class="dislike-button" onClick={handleSubtractLike}>
          Dislike
        </button>
      </div>
    </div>
    //   {/* </div>
    // </div> */}
  );
}

export default Posts;
