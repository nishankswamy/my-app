import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import OldPage from "./OldPage";
import NewPage from "./NewPage";


function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>React App with Custom Routing</h1>
        
        {/* Navigation Links */}
        <nav>
          <Link to="/old" style={{ margin: "10px" }}>Old Page</Link>
          <Link to="/new" style={{ margin: "10px" }}>New Page</Link>
        </nav>

        <Routes>
          {/* Default route redirects to /old */}
          <Route path="/" element={<Navigate to="/old" />} />
          
          {/* Old Page */}
          <Route path="/old" element={<OldPage />} />
          
          {/* New Page */}
          <Route path="/new" element={<NewPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
