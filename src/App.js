import React, { useState } from "react";
import CalendarView from "./components/CalendarView";
import EventPopup from "./components/EventPopup";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedDate } from "./redux/dataSlice";

function App() {
  const { selectedDate } = useSelector((state) => state.calendarData);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>📅 React Calc Viz</h1>
      <CalendarView />
      {selectedDate && <EventPopup onClose={() => dispatch(setSelectedDate(null))} />}
    </div>
  );
}

export default App;
