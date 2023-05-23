import "./header.css";

const Header = () => {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleLarge">Blog</span>
        </div>
        <img 
          className="headerImage" 
          src="https://images.pexels.com/photos/14011560/pexels-photo-14011560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="a cute cat"></img>
    </div>
  )
}

export default Header