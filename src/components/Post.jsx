import React from "react";
import logo from "./../../public/favicon.jpeg";
import Carrousel from "./Carrousel";

const Post = ({ post }) => {
  const postLength = post.Media_posts.length;
  return (
    <div className="post">
      <div className="header flex">
        <div className="header-left">
          <img
            src={post.User.profile_img_url}
            alt=""
            className="profile-pic-header-post"
          />
          <p style={{ fontSize: "1.3rem" }}>
            {post.User.name} {post.User.lastname}
          </p>
        </div>
        <div
          className="flex"
          style={{
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "1.3rem" }}>...</p>
        </div>
      </div>
      <div className="post-content flex">
        {postLength > 1 ? (
          post.Media_posts.map(media => (
            <Carrousel key={media.media_url} media={media} />
          ))
        ) : (
          <img className={post.media_url} src="media.media_url"></img>
        )}
      </div>
      <div className="post-footer">
        <div className="post-footer-left flex">
          <i className="bx bx-heart"></i>
          <i className="bx bx-message-rounded"></i>
          <i className="bx bx-paper-plane"></i>
        </div>
        <i className="bx bx-bookmark"></i>
      </div>
      <div className="post-description flex">
        <p>{post.Likes.length} Me gusta</p>
        <div className="post-description-footer flex">
          <p>
            {post.User.name} {post.User.lastname}
          </p>
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
