import { createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../data/dummyData";

const dataSlice = createSlice({
  name: "calendarData",
  initialState: {
    events: dummyData,
    selectedDate: null
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    }
  }
});

export const { setSelectedDate } = dataSlice.actions;
export default dataSlice.reducer;
