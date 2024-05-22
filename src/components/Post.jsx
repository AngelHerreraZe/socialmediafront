import React, { useEffect, useState } from "react";
import logo from "./../../public/favicon.jpeg";
import Carrousel from "./Carrousel";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import getConfig from "../utils/getConfig";

const Post = ({ post }) => {
  const token = jwtDecode(localStorage.getItem("clonstagram-token"));
  const loggedUserId = token.id;
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const [likesLength, setLikesLength] = useState(0)
  useEffect(() => {
    for (let i = 0; i < post.Likes.length; i++) {
      if (Number(post.Likes[i].user_id) === Number(loggedUserId)) {
        setAlreadyLiked(true);
      } 
    }
    setLikesLength(post.Likes.length)
  }, [alreadyLiked, likesLength]);
  const likePost = () => {
    axios
      .post(
        `https://socialmedia-production-6fef.up.railway.app/api/v1/post/${post.id}/like`,
        {},
        getConfig()
      )
      .then((res) => {
        if (alreadyLiked === true) {
          setLikesLength(likesLength - 1)
          setAlreadyLiked(false)
        } else {
          setLikesLength(likesLength + 1)
          setAlreadyLiked(true)
        }
      })
      .catch((error) => console.log(error.data));
  };
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
        <Carrousel media={post.Media_posts} />
      </div>
      <div className="post-footer">
        <div className="post-footer-left flex">
          {alreadyLiked === true ? (
            <i onClick={() => likePost()} className="bx bxs-heart liked"></i>
          ) : (
            <i onClick={() => likePost()} className="bx bx-heart"></i>
          )}
          <i className="bx bx-message-rounded"></i>
          <i className="bx bx-paper-plane"></i>
        </div>
        <i className="bx bx-bookmark"></i>
      </div>
      <div className="post-description flex">
        <p>{likesLength} Me gusta</p>
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
