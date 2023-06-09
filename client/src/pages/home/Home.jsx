import React, { useEffect } from 'react'
import "./home.css";
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../utils/variables';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(baseUrl+'/posts'+search);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search])
  return (
    <>
      <Header />
      <div className='home'> 
          <Posts posts={posts} />
          <Sidebar />
      </div>
    </>
  )
}

export default Home