import React from "react";
import { Link } from "react-router-dom";

const NewPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>New Page</h2>
      <p>Welcome to the new page!</p>
      <Link to="/old">Go back to Old Page</Link>
    </div>
  );
};

export default NewPage;
