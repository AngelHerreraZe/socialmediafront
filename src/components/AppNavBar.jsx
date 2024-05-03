import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import useStore from '../store/navBarState';

const AppNavBar = () => {
    const {showNavBar} = useStore();

    useEffect(() => {
        console.log(showNavBar);
    }, [showNavBar]);
    return (
        <div className={showNavBar ? 'nav-bar' : 'nav-bar hide'} id="nav-bar">
            <Link to={"/home"}><i className='bx bx-home-alt nav-bar-item'></i></Link>
            <i className='bx bx-plus-circle nav-bar-item' ></i>
            <Link to="/search"><i class='bx bx-search nav-bar-item'></i></Link>
            <Link to={"/inbox"}><i className='bx bx-message-alt nav-bar-item' ></i></Link>
            <Link to={"`/${username}`"}><i className='bx bx-user-circle nav-bar-item' ></i></Link>
        </div>
    );
};

export default AppNavBar;