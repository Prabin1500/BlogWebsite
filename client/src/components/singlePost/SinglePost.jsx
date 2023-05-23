import axios from 'axios';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './singlepost.css';
import { baseUrl } from '../../utils/variables';
import { Context } from '../../context/Context';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/"
    const {user} = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [cat, setCat] = useState("");
    const [updateMode, setUpdataMode] = useState(false);

    useEffect(() =>{
        const getPost = async () => {
            const res = await axios.get(baseUrl+'/posts/'+ path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
            setCat(res.data.categories[0]);
        }
        getPost();
    },[path])

    const handleDelete = async () => {
        try {
            await axios.delete(baseUrl + '/posts/' + post._id, {
                data: {username: user.username},
            });
            window.location.replace("/");
        } catch (error) {
            
        }
    };

    const handleUpdate = async() => {
        try {
            await axios.put(baseUrl + '/posts/' + post._id, {
                username: user.username, 
                title, 
                desc,
            });
            setUpdataMode(false);
        } catch (error) {
            
        }
    };

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    };

    return (
        <div className='singlepost'>
            <div className="singlePostWrapper">
                {post.photo && 
                    <img 
                    className='singlePostImage' 
                    src= {PF + post.photo}
                    alt="" 
                    />
                }
                {updateMode ? (
                    <input 
                        type="text" 
                        value={title} 
                        className='singlePostTitleInput' 
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ):(
                <h1 className="singlePostTitle">
                    {title} 
                    {post.username === user?.username && (
                        <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square" onClick={() => setUpdataMode(true)}></i>
                        <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
                        </div>
                    )}
                </h1>
                ) }
                
                <div className="singlePostInfo">
                    <div className='nameCat'>
                        <span className='singlePostAuthor'>
                            Author: 
                            <Link className='link' to={`/?user=${post.username}`}>
                                <b> {post.username}</b>
                            </Link>
                        </span>
                        <span>Category: <b>{post.categories}</b></span>
                    </div>
                        
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                    <ReactQuill
                        className='singlePostDescriptionInput'
                        theme="snow"
                        value={desc}
                        onChange={setDesc}
                    />
                ):(
                    <p className='singlePostDescription'>{getText(desc)}</p>
                )}
                {updateMode &&
                    <button className="singlePostButon" onClick={handleUpdate}>Update</button>
                }
               
            </div>
        </div>
    )
}

export default SinglePost