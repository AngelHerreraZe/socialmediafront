import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("clonstagram-token")
    navigate("/")
  }
  return (
    <div>
      <h1>Home</h1>
      <p onClick={() => logOut()}>Log out</p>
    </div>
  );
};

export default Home;