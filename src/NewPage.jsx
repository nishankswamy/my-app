import React from "react";
import DateTimePickerUI from "./DateTimePickerUI";

function NewPage() {
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScSe890ZkexqgnmNEH7QYJWZK7O4tNcC2tU8shYm-jzZYTkNQ/viewform?usp=header"; // Replace with your actual Google Form URL

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Appointment booking Variant B</h1>
      <div>
        <DateTimePickerUI />
        
      </div>
      {/* <div style={styles.formSection}>
          <h2>Continue to Survey</h2>
          <button onClick={() => window.open(googleFormUrl, "_self")} style={styles.button}>
            Continue
          </button>
        </div> */}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    margin: "40px auto",
    padding: "20px",
    maxWidth: "900px", // Limits width to keep content centered
  },
  heading: {
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // Two equal columns
    gap: "16px", // Adds 16px gap between grid items
    alignItems: "center",
    justifyContent: "center"
  },
  formSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    borderRadius: "8px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    marginTop: "10px",
  },
};

export default NewPage;
