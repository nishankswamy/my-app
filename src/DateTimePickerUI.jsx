import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePickerUI = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Function to handle time selection
  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  return (
    <div style={styles.container}>
      {/* Left Column - Calendar */}
      <div style={styles.leftColumn}>
        <h3>Select a Date</h3>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
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

        {/* Display Selected Date and Time */}
        <div style={styles.selectionBox}>
          <h4>Selected:</h4>
          <p>{selectedDate ? selectedDate.toDateString() : "No date selected"}</p>
          <p>{selectedTime ? selectedTime : "No time selected"}</p>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gap: "20px",
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
};

export default DateTimePickerUI;
