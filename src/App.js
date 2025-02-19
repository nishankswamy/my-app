import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";
import OldPage from "./OldPage";
import NewPage from "./NewPage";


function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
      

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
