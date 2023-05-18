import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = true;
  return (
    <div className='top'>
        <div className="topLeft">
            <i className='topIcon fa-brands fa-twitter'></i>
            <i className='topIcon fa-brands fa-facebook'></i>
            <i className='topIcon fa-brands fa-instagram'></i>
        </div>
            
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className='link' to="/">HOME</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to="/about">ABOUT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to="/settings">CONTACT</Link>
                </li>
                <li className="topListItem">
                    <Link className='link' to="/write">WRITE</Link>
                </li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        
        <div className="topRight">
            {user ?
                <img className='topImage' src='http://placekitten.com/g/400/400' alt=''></img> :
                <ul className='topList'>
                    <li className="topListItem">
                        <Link className='link' to="/login">LOGIN</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/register">REGISTER</Link>
                    </li>
                </ul>
            }
            
            <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
        </div>
    </div>
  )
}

export default Navbar;