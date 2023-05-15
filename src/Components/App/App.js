import "./App.css";
import Navbar from "../Navbar/Navbar.js";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../Home/Home";
import Wish from "../Wish/Wish";
import Timer from "../Timer/Timer";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  const year = new Date().getFullYear();
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/wish" element={<Wish />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="timer-section">
          <div className="wish-reminder">
            Don't Forgot to wish my Papa on his birthday, 16 May {year}
          </div>
          <Timer />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
