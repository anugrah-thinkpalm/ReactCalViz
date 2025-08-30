import React from "react";
import BarGraph from "./BarGraph";
import { useSelector } from "react-redux";

const EventPopup = ({ onClose }) => {
  const { events, selectedDate } = useSelector((state) => state.calendarData);

  if (!selectedDate) return null;

  const data = events[selectedDate];

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Data for {selectedDate}</h2>
        {data ? <BarGraph data={data} /> : <p style={{ color: "red" }}>No data found for the selected date.</p>}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventPopup;
