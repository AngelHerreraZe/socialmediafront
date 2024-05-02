import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

const AppNavBar = () => {
    const [token, setToken] = useState(localStorage.getItem("clonstagram-token"));

    useEffect(() => {
        const navbar = document.getElementById("nav-bar");
        if (navbar) {
            if (!token) {
                navbar.classList.add("hide");
            } else {
                navbar.classList.remove("hide");
            }
        }
    }, [token]);
    return (
        <div className='nav-bar' id="nav-bar">
            <Link to={"/home"}><i className='bx bx-home-alt nav-bar-item'></i></Link>
            <i className='bx bx-plus-circle nav-bar-item' ></i>
            <Link to={"/inbox"}><i className='bx bx-message-alt nav-bar-item' ></i></Link>
            <Link to={"`/${username}`"}><i className='bx bx-user-circle nav-bar-item' ></i></Link>
        </div>
    );
};

export default AppNavBar;