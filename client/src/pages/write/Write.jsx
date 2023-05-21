import { useState } from 'react';
import './write.css';
import { baseUrl } from '../../utils/variables';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

const Write = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const {user} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit is now clicked...");
        const newPost = {
            username: user.username,
            title,
            desc,
        };

        if(file !== null) {
            console.log("Seems like image is selected. I am image");
            console.log(file);
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            console.log(filename);
            try {
                await axios.post(baseUrl+'/upload', data);
            } catch (err) {
                
            }
        }
        try {
           const res = await axios.post('/posts', newPost);
           console.log("I am posting");
           window.location.replace("/post/" + res.data._id);
        } catch (err) {
            
        }
        console.log(newPost);
    };

  return (
    <div className='write'>
        {file && 
            <img 
            src={URL.createObjectURL(file)}
            alt="" 
            className="writeImage" 
        />
        }
        
        <form action="" className="writeForm" onSubmit={handleSubmit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="fa-solid fa-plus writeIcon"></i>
                </label>
                <input 
                    type="file" 
                    id='fileInput' 
                    style={{display:"none"}} 
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <input 
                    type="text" 
                    placeholder='Title' 
                    className='writeInput' 
                    autoFocus={true} 
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="writeFormGroup">
                <textarea 
                    placeholder='Tell you story...'
                    type="text"
                    className='writeInput writeText'
                    onChange={(e) => setDesc(e.target.value)}
                ></textarea>
            </div>
            <button className="writeSubmit" type='submit'>Publish</button>
        </form>
    </div>
  )
}

export default Write