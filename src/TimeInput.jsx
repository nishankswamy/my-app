import React, { useState } from "react";

const TimeInput = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");

  // Format the displayed time
  const formatTime = () => {
    if (hours !== "" && minutes !== "") {
      return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
    }
    return "HH:MM";
  };

  return (
    <div style={styles.container}>
      <h3>Enter Time</h3>

      <div style={styles.inputContainer}>
        {/* Hours Input */}
        <input
          type="number"
          placeholder="HH"
          value={hours}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || (value.length <= 2 && value >= 0 && value <= 23)) {
              setHours(value);
            }
          }}
          style={styles.input}
        />

        <span style={styles.separator}>:</span>

        {/* Minutes Input */}
        <input
          type="number"
          placeholder="MM"
          value={minutes}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || (value.length <= 2 && value >= 0 && value <= 59)) {
              setMinutes(value);
            }
          }}
          style={styles.input}
        />
      </div>

      <div style={styles.displayTime}>
        <strong>Selected Time:</strong> {formatTime()}
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    marginBottom: "15px",
  },
  input: {
    width: "60px",
    padding: "8px",
    fontSize: "18px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  separator: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  displayTime: {
    fontSize: "18px",
    marginTop: "10px",
  },
};

export default TimeInput;
