import { useContext, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import { Context } from '../../context/Context';
import './setting.css';
import axios from 'axios'; 
import { baseUrl } from '../../utils/variables';

const Setting = () => {
    const {user, dispatch} = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const PF = "http://localhost:5000/images/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" });
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };

        if(file !== null) {
            console.log(file);
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;
            console.log(filename);
            try {
                await axios.post(baseUrl+'/upload', data);
                
            } catch (err) {
                
            }
        }
        try {
           const res = await axios.put('/users/' + user._id, updatedUser);
           setSuccess(true);
           dispatch({ type: "UPDATE_SUCCESS", payload: res.data});
        } catch (err) {
            dispatch({ type: "UPDATE_FAILURE" });
        }
    };

  return (
    <div className='setting'>
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update your Account</span>
                <span className="settingDeleteTitle">Delete account</span>
            </div>
            <form className="settingForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingProfilePicture">
                    <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingPPIcon fa fa-user-circle"></i>
                    </label>
                    <input 
                        type="file" 
                        id="fileInput" 
                        style={{display: "none"}} 
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username} onChange={(e) => setUsername(e.target.value)}/>
                <label>Emal</label>
                <input type="email" placeholder={user.email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>

                <button className="settingSubmit" type='submit'>Update</button>
                {success && <span style={{color: "green", textAlign: "center", marginTop: "20px"}}>Profile updated successfully.</span>}
            </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Setting