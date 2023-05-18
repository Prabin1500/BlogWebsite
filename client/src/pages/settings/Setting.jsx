import Sidebar from '../../components/sidebar/Sidebar';
import './setting.css';

const Setting = () => {
  return (
    <div className='setting'>
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update your Account</span>
                <span className="settingDeleteTitle">Delete account</span>
            </div>
            <form className="settingForm">
                <label>Profile Picture</label>
                <div className="settingProfilePicture">
                    <img src="http://placekitten.com/g/400/400" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingPPIcon fa fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='Prabin' />
                <label>Emal</label>
                <input type="email" placeholder='dhakalprabin7@gmail.com' />
                <label>Password</label>
                <input type="password"/>

                <button className="settingSubmit">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}

export default Setting