import React, { useState } from "react";
import Select from "react-select";
import { format } from "date-fns";

const generateTimeOptions = () => {
  let times = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      let time = format(new Date().setHours(hour, minute, 0), "hh:mm a");
      times.push({ value: time, label: time });
    }
  }
  return times;
};

const generateDateOptions = () => {
  let dates = [];
  for (let i = 0; i < 7; i++) {
    let date = new Date();
    date.setDate(date.getDate() + i);
    let formattedDate = format(date, "yyyy-MM-dd");
    dates.push({ value: formattedDate, label: formattedDate });
  }
  return dates;
};

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-2">Select Date & Time</h2>
      
      {/* Date Picker */}
      <Select
        options={generateDateOptions()}
        value={selectedDate}
        onChange={setSelectedDate}
        placeholder="Select a date"
        className="mb-4"
      />
      
      {/* Time Picker */}
      <Select
        options={generateTimeOptions()}
        value={selectedTime}
        onChange={setSelectedTime}
        placeholder="Select a time"
      />

      {selectedDate && selectedTime && (
        <div className="mt-4 p-2 border rounded bg-gray-100">
          <p className="text-sm">Selected Date: {selectedDate.label}</p>
          <p className="text-sm">Selected Time: {selectedTime.label}</p>
        </div>
      )}
    </div>
  );
};

export default DateTimePicker;
