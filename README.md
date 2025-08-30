# 📅 ReactCalViz  

A React application that integrates **React Big Calendar**, **Redux Toolkit**, and **Recharts** to display date-wise data in a calendar view. Clicking on a highlighted date opens a popup with a bar graph representing the data.  

---

## 🚀 Features
- 📆 **Calendar View** using React Big Calendar (Day / Week / Month).  
- 📊 **Bar Graph Visualization** of selected date’s data using Recharts.  
- 🗂️ **Redux Toolkit** for global state management.  
- ⚡ **Dummy JSON Data** used for sample events.  
- 🎨 **Popup Modal** to show bar chart for selected date.  
- ⚠️ Shows `"No data found for the selected date"` if no data exists.  
- ✅ Works across all operating systems.  

---

## 📂 Project Structure
src/
├── components/
│ ├── CalendarView.jsx # Calendar UI
│ ├── EventPopup.jsx # Popup with bar graph
│ ├── BarGraph.jsx # Bar chart component
├── data/
│ └── dummyData.js # Sample JSON data
├── redux/
│ ├── dataSlice.js # Redux slice
│ └── store.js # Redux store
├── App.js
├── index.js
├── styles.css


# Clone the repository
git clone https://github.com/anugrah-thinkpalm/ReactCalViz.git
cd ReactCalViz

# Install dependencies
npm install

# Start development server
npm start

