import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const user = true;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />}/>
        <Route path="/settings" element={user ? <Setting /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
