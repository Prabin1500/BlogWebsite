import "./header.css";

const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSmall">React</span>
            <span className="headerTitleLarge">Blog</span>
        </div>
        <img className="headerImage" src="https://images.pexels.com/photos/3241955/pexels-photo-3241955.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="a cute cat"></img>
    </div>
  )
}

export default Header