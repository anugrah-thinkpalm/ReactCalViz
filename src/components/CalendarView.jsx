import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { useDispatch } from "react-redux";
import { setSelectedDate } from "../redux/dataSlice";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": require("date-fns/locale/en-US")
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const CalendarView = () => {
  const dispatch = useDispatch();

  const handleSelectSlot = (slotInfo) => {
    const clickedDate = format(slotInfo.start, "dd-MM-yyyy");
    dispatch(setSelectedDate(clickedDate));
  };

  return (
    <div style={{ height: "500px" }}>
      <Calendar
        localizer={localizer}
        selectable
        onSelectSlot={handleSelectSlot}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CalendarView;
