import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import "./sidebar.css";
import { baseUrl } from '../../utils/variables';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () =>{
            const res = await axios.get(baseUrl+'/categories');
            setCats(res.data);
        }
        getCats();
    }, []);
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                About Me
            </span>
            <img src='http://placekitten.com/400/400' alt=''></img>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem iste asperiores expedita, non quas, mollitia dolorem quo atque distinctio ipsa tenetur eius soluta obcaecati ab tempora deleniti. Repellat, maxime.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                
                {cats.map((c) =>(
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li key={c.name} className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
                
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow us</span>
            <div className="sidebarSocial">
                <i className='sidebarIcon fa-brands fa-twitter'></i>
                <i className='sidebarIcon fa-brands fa-facebook'></i>
                <i className='sidebarIcon fa-brands fa-instagram'></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar