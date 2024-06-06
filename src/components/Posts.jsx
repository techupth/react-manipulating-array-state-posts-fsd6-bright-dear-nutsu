import { useState } from 'react';

// 1. มี 1 state : จำนวน Likes
// 2. มี 1 event : onClick ที่ button มี 2 callback คือ handleClickLike กับ handleClickDislike
// 3. ประกาศ 2 functions : handleClickLike กับ handleClickDislike

function Posts(props) {
  const [likes, setLikes] = useState(props.likes);

  const handleClickLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
  };

  const handleClickDislike = () => {
    if (likes > 0) {
      const newLikes = likes - 1;
      setLikes(newLikes);
    }
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        <div className="post-item">
          <div className="post-header">
            <h2>
              Post Title #{props.id} {props.title}
            </h2>
            <div className="post-social-media-stats">
              <span className="stats-topic">Likes: </span>
              <span className="post-likes">{likes}</span>
            </div>
          </div>
          <p className="post-content">
            {props.content}
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi
            tincidunt, leo non molestie consectetur, elit libero faucibus
            tellus, sed fringilla tortor libero sit amet odio. Maecenas sed ante
            condimentum mauris euismod pellentesque eu eu justo... */}
          </p>
          <div className="post-actions">
            <button className="like-button" onClick={handleClickLike}>
              Like
            </button>
            <button className="dislike-button" onClick={handleClickDislike}>
              Dislike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
