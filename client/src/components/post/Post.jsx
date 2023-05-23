import "./post.css";
import {Link} from 'react-router-dom';

const Post = ({post}) => {

  const PF = "http://localhost:5000/images/"

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <div className="post">
      {post.photo && 
        <img className="postImg"
        src={PF + post.photo}
        alt=""
        />
      }
        
        <div className="postInfo">
            <div className="postCats">
              {post.categories.map((c) => (
                <span className="postCat">{c.name}</span>
              ))}
            </div>
            <Link to={`/post/${post._id}`} className="link">
              <span className="postTitle">{post.title}</span>
            </Link>
            <hr />
            <span className="postDate">
                {new Date(post.createdAt).toDateString()}
            </span>
        </div>
        <p className="postDescription">{getText(post.desc)}</p>
    </div>
  )
}

export default Post