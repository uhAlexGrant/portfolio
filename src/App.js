
import './App.css';
import Home from './pages/home.js';
import {Route, Routes, BrowserRouter} from "react-router-dom";
import About from "./pages/about.js";
import NoPage from "./pages/noPage.js";
function App() {
  return (
      <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NoPage />} />

                  {/* Add more Route components for other pages */}
          </Routes>
      </BrowserRouter>

      </div>
  );
}

export default App;
