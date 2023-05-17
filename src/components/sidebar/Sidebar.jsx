import React from 'react'
import "./sidebar.css";

const Sidebar = () => {
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
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Tech</li>
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