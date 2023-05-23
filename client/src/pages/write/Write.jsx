import { useState } from 'react';
import './write.css';
import { baseUrl } from '../../utils/variables';
import { useContext } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Context } from '../../context/Context';
import axios from 'axios';
import image from '../../Images/pic.png'

const Write = () => {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [categories, setCat] = useState("");
    const {user} = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc: value,
            categories,
        };

        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post(baseUrl+'/upload', data);
            } catch (err) {
                
            }
        }
        try {
           const res = await axios.post(baseUrl + '/posts', newPost);
           
           console.log("ppostedddd");
           window.location.replace("/post/" + res.data._id);
        } catch (err) {
            
        }
        
    };

  return (
    <div className='write'>
        <div className='container'>
            <div>
                {file ? (
                    <img 
                    src={URL.createObjectURL(file)}
                    alt="" 
                    className="writeImage" 
                    />
                ) : (
                    <label htmlFor="fileInput" className='writeImage'>
                        <img src={image} alt=""  className='writeIcon'/>
                    </label>
                )}
            </div>

            <div className="content">
                <input 
                    type="file" 
                    id='fileInput' 
                    style={{display:"none"}} 
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <input
                    type="text"
                    placeholder="Title"
                    className='writeTitle'
                    onChange={(e) => setTitle(e.target.value)}
                />

                <div className="editorContainer">
                    <ReactQuill
                        className="editor writeInput"
                        theme="snow"    
                        value={value}
                        onChange={setValue}
                    />
                </div>
            </div>
 
        </div>

        <div className='menu'>
            <div className='item'>
                <button className="writeSubmit" type='submit' onClick={handleSubmit}>Publish</button>
            </div>
            <div className="item">
                <h1>Category</h1>
                <hr />
                <div className="cat">
                    <input type="radio" name="cat" value="food" id="food" onChange={(e) => setCat(e.target.value)}/>
                    <label htmlFor="food">Food</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" value="travel" id="travel" onChange={(e) => setCat(e.target.value)}/>
                    <label htmlFor="travel">Travel</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" value="art" id="art" onChange={(e) => setCat(e.target.value)}/>
                    <label htmlFor="art">Art</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" value="music" id="music" onChange={(e) => setCat(e.target.value)}/>
                    <label htmlFor="music">Music</label>
                </div>
                <div className="cat">
                    <input type="radio" name="cat" value="science" id="science" onChange={(e) => setCat(e.target.value)}/>
                    <label htmlFor="science">Science</label>
                </div>

                <div className="cat">
                    <input type="radio" name="cat" value="technology" id="technology" onChange={(e) => setCat(e.target.value)}/>
                    <label htmlFor="technology">Technology</label>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Write