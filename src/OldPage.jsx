import React from "react";
import { useNavigate } from "react-router-dom";
import CustomDateInput from "./CustomDateInput";

function OldPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Appointment booking Variant A</h1>
      <CustomDateInput onNavigate={() => navigate("/new")} />
    </div>
  );
}

export default OldPage;
