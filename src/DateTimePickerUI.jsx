import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePickerUI = ({ onContinue }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const [keyStrokeCount, setKeyStrokeCount] = useState(0);
  const [mountTime, setMountTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const googleFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScSe890ZkexqgnmNEH7QYJWZK7O4tNcC2tU8shYm-jzZYTkNQ/viewform?usp=header"; // Replace with your actual Google Form URL

  // Update elapsed time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(((Date.now() - mountTime) / 1000).toFixed(2));
    }, 1000);

    return () => clearInterval(interval);
  }, [mountTime]);

  // Function to handle time selection
  const handleTimeClick = (time) => {
    setSelectedTime(time);
    setErrorMessage(""); // Clear error when a time is selected
    console.log(`Time elapsed before selecting time: ${elapsedTime} seconds`);
  };

  // Click event handler
  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  // Keystroke event handler
  const handleKeyPress = () => {
    setKeyStrokeCount((prev) => prev + 1);
  };

  // Attach global event listeners
  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Function to handle button click
  const handleContinue = () => {
    if (!selectedDate || !selectedTime) {
      setErrorMessage("Please select both a date and a time before continuing.");
      return;
    }
    console.log(`Time elapsed before continuing: ${elapsedTime} seconds`);
    if (onContinue) {
      onContinue();
    }
  };

  return (
    <div>
      <div style={styles.container}>
        {/* Left Column - Calendar */}
        <div style={styles.leftColumn}>
          <h3>Select a Date</h3>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setErrorMessage(""); // Clear error when a date is selected
            }}
            inline
          />
        </div>

        {/* Right Column - Time Buttons */}
        <div style={styles.rightColumn}>
          <h3>Select a Time</h3>
          <div style={styles.buttonContainer}>
            {["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"].map(
              (time) => (
                <button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  style={{
                    ...styles.button,
                    backgroundColor: selectedTime === time ? "#007bff" : "#eee",
                    color: selectedTime === time ? "#fff" : "#000",
                  }}
                >
                  {time}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Display Selected Date and Time */}
      <div style={styles.selectionBox}>
        <h4>Selected:</h4>
        <p>{selectedDate ? selectedDate.toDateString() : "No date selected"}</p>
        <p>{selectedTime ? selectedTime : "No time selected"}</p>
      </div>

      {/* Click, Keystroke, and Time Stats */}
      <div style={styles.stats}>
        <p><strong>Clicks:</strong> {clickCount}</p>
        <p><strong>Keystrokes:</strong> {keyStrokeCount}</p>
        <p><strong>Time spent here:</strong> {elapsedTime} seconds</p>
      </div>

      {/* Error Message */}
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}

      {/* Continue Button */}
      <button
        onClick={() => window.open(googleFormUrl, "_self")}
        style={{
          ...styles.button,
          backgroundColor: selectedDate && selectedTime ? "#007bff" : "#ccc",
          cursor: selectedDate && selectedTime ? "pointer" : "not-allowed",
          marginTop: "20px",
        }}
        disabled={!selectedDate || !selectedTime}
      >
        Continue
      </button>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    paddingInline: "20%",
    paddingBottom: "32px",
  },
  leftColumn: {
    width: "50%",
    textAlign: "center",
  },
  rightColumn: {
    width: "50%",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    width: "150px",
    borderRadius: "5px",
  },
  selectionBox: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    display: "inline-block",
  },
  stats: {
    marginTop: "20px",
    fontSize: "18px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "10px",
    textAlign: "center",
  },
};

export default DateTimePickerUI;
