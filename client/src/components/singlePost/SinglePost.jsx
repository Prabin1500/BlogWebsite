import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './singlepost.css';
import { baseUrl } from '../../utils/variables';

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});

    useEffect(() =>{
        const getPost = async () => {
            const res = await axios.get(baseUrl+'/posts/'+path);
            setPost(res.data);
        }
        getPost();
    },[path])
    return (
        <div className='singlepost'>
            <div className="singlePostWrapper">
                {post.photo && (
                    <img 
                    className='singlePostImage' 
                    src= {post.photo}
                    alt="" 
                    />
                )}

                <h1 className="singlePostTitle">
                    {post.title} 
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>
                        Author: 
                        <Link className='link' to={`/?user=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                        
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString}</span>
                </div>
                <p className='singlePostDescription'>{post.desc}</p>
            </div>
        </div>
    )
}

export default SinglePost