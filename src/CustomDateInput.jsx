import React, { useState, useEffect } from "react";
import TimeInput from "./TimeInput";

const CustomDateInput = ({ onNavigate }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [keyStrokeCount, setKeyStrokeCount] = useState(0);
  const [mountTime, setMountTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  // Update elapsed time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(((Date.now() - mountTime) / 1000).toFixed(2));
    }, 1000);

    return () => clearInterval(interval);
  }, [mountTime]);

  // Click event handler
  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  // Keystroke event handler
  const handleKeyPress = () => {
    setKeyStrokeCount((prev) => prev + 1);
  };

  // Attach event listeners on mount & cleanup on unmount
  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Function to validate the selected date
  const isDateValid = () => {
    if (!day || !month || !year) return false; // Ensure all fields are filled
    const dateString = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    const dateObject = new Date(dateString);
    return (
      dateObject.getDate() === Number(day) &&
      dateObject.getMonth() + 1 === Number(month) &&
      dateObject.getFullYear() === Number(year)
    );
  };

  // Function to handle button click
  const handleNavigate = () => {
    if (!isDateValid()) {
      setErrorMessage("Please enter a valid date before continuing.");
      return;
    }
    console.log(`Time elapsed before clicking: ${elapsedTime} seconds`);
    if (onNavigate) {
      onNavigate();
    }
  };

  // Function to format and display the entered date
  const formatDate = () => {
    if (day && month && year) {
      return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
    }
    return "DD/MM/YYYY";
  };

  return (
    <div style={styles.container}>
      <h3>Enter Date</h3>

      <div style={styles.inputContainer}>
        {/* Day Input */}
        <input
          type="number"
          placeholder="DD"
          value={day}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || (value.length <= 2 && value >= 1 && value <= 31)) {
              setDay(value);
              setErrorMessage(""); // Clear error when user types
            }
          }}
          style={styles.input}
        />

        <span style={styles.separator}>/</span>

        {/* Month Input */}
        <input
          type="number"
          placeholder="MM"
          value={month}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || (value.length <= 2 && value >= 1 && value <= 12)) {
              setMonth(value);
              setErrorMessage(""); // Clear error when user types
            }
          }}
          style={styles.input}
        />

        <span style={styles.separator}>/</span>

        {/* Year Input */}
        <input
          type="number"
          placeholder="YYYY"
          value={year}
          onChange={(e) => {
            const value = e.target.value;
            setYear(value);
            setErrorMessage(""); // Clear error when user types
          }}
          style={styles.input}
        />
      </div>

      <div style={styles.displayDate}>
        <strong>Selected Date:</strong> {formatDate()}
      </div>

      <TimeInput />

      {/* Stats Section */}
      <div style={styles.stats}>
        <p><strong>Clicks:</strong> {clickCount}</p>
        <p><strong>Keystrokes:</strong> {keyStrokeCount}</p>
        <p><strong>Time spent here:</strong> {elapsedTime} seconds</p>
      </div>

      {/* Error Message */}
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}

      {/* Navigate Button */}
      <button
        onClick={handleNavigate}
        style={{
          ...styles.button,
          backgroundColor: isDateValid() ? "#007bff" : "#ccc",
          cursor: isDateValid() ? "pointer" : "not-allowed",
        }}
        disabled={!isDateValid()}
      >
        Go to Variant B
      </button>
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
  displayDate: {
    fontSize: "18px",
    marginTop: "10px",
  },
  stats: {
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#f1f1f1",
    border: "1px solid #ccc",
    borderRadius: "5px",
    textAlign: "center",
    fontSize: "16px",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "10px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
  },
};

export default CustomDateInput;
