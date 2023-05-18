import './write.css';

const Write = () => {
  return (
    <div className='write'>
        <img src="https://images.pexels.com/photos/24698/pexels-photo-24698.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        alt="" className="writeImage" />
        <form action="" className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="fa-solid fa-plus writeIcon"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea 
                    placeholder='Tell you story...'
                    type="text"
                    className='writeInput writeText'
                ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}

export default Write