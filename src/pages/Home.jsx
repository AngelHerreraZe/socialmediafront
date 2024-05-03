import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useStore from '../store/navBarState';
import logo from './../assets/logo.png'

const Home = () => {
  const {changeNavBarStatus} = useStore();
  const navigate = useNavigate();
  const logOut = () => {
    changeNavBarStatus();
    localStorage.removeItem("clonstagram-token")
    navigate("/")
  }
  return (
    <div className='home'>
      <img src={logo} alt="Clonstagram logo" />
      <h1>Home</h1>
      <p onClick={() => logOut()}>Log out</p>
    </div>
  );
};

export default Home;