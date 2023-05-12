import "./App.css";
import Navbar from "../Navbar/Navbar.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../Home/Home";
import Wish from "../Wish/Wish";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          {/* <Route path="/home" element={<div>Home Page</div>} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/wish" element={<Wish />} />
          <Route
            path="/thoughts"
            element={
              <div>
                This page is designed for life learning lessons from my dad.
              </div>
            }
          />
          <Route path="/about" element={<div>This is about page.</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
