import "./App.css";
import Navbar from "../Navbar/Navbar.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to={"/home"} />} />
          {/* <Route path="/home" element={<div>Home Page</div>} /> */}
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
