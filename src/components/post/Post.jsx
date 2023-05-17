import "./post.css";

const Post = () => {
  return (
    <div className="post">
        <img className="postImg"
        src="https://images.pexels.com/photos/12314825/pexels-photo-12314825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit</span>
            <hr />
            <span className="postDate">
                1 hour ago
            </span>
        </div>
        <p className="postDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae consequatur provident rerum eos blanditiis dolorum, quidem cumque laudantium soluta ea. Ab, nam explicabo molestias voluptatem dignissimos consectetur aperiam assumenda.</p>
    </div>
  )
}

export default Post