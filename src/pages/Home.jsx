import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useStore from "../store/navBarState";
import logo from "./../assets/logo.png";
import axios from "axios";
import getConfig from "../utils/getConfig";
import Post from "../components/Post";

const Home = () => {
  const { changeNavBarStatus } = useStore();
  const [homePosts, setHomePosts] = useState([]);
  const navigate = useNavigate();
  const logOut = () => {
    changeNavBarStatus();
    localStorage.removeItem("clonstagram-token");
    navigate("/");
  };

  useEffect(() => {
    axios
      .get(
        "https://socialmedia-production-6fef.up.railway.app/api/v1/post",
        getConfig()
      )
      .then((res) => {
        setHomePosts(res.data)
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="home">
      <img className="home-logo" src={logo} alt="Clonstagram logo" />
      {
        homePosts.map(post => (
          <Post key={post.id} post={post} />
        ))
      }
    </div>
  );
};

export default Home;
