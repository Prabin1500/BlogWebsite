import './singlepost.css'

const SinglePost = () => {
  return (
    <div className='singlepost'>
        <div className="singlePostWrapper">
            <img className='singlePostImage' src="https://images.pexels.com/photos/2535206/pexels-photo-2535206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" />

            <h1 className="singlePostTitle">
                Lorenm Iosum is my name. 
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Prabin Dhakal</b></span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDescription'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente commodi odit beatae vero cum consequatur accusantium fuga unde, ad repellat ut exercitationem ipsam molestias tempore illum. Architecto consequuntur ut vel.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente commodi odit beatae vero cum consequatur accusantium fuga unde, ad repellat ut exercitationem ipsam molestias tempore illum. Architecto consequuntur ut vel.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente commodi odit beatae vero cum consequatur accusantium fuga unde, ad repellat ut exercitationem ipsam molestias tempore illum. Architecto consequuntur ut vel.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente commodi odit beatae vero cum consequatur accusantium fuga unde, ad repellat ut exercitationem ipsam molestias tempore illum. Architecto consequuntur ut vel.
            </p>
        </div>
    </div>
  )
}

export default SinglePost