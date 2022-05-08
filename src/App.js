
import { Calendar, dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './App.css';



// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.


// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.


const locales = {
  "en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer ({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,

})

const events = [
  {
    title: "Weekend Dance With Death",
    allday: false,
    start: new Date(2022,4,9),
    end: new Date(2022,4,9)
  },
  {
    title: "Dance With Death jr",
    start: new Date(2022,4,10),
    end: new Date(2022,4,10)
  },

  {
    title: "Dance With Death Maria",
    start: new Date(2022,4,11),
    end: new Date(2022,4,11)
  },
  {
    title: "Dance With Reaper K",
    start: new Date(2022,4,15),
    end: new Date(2022,4,15)
  }
]


function App() {
  const [newEvent, setNewEvent] = useState ({title: "", start: "", end: "", time:""})
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent])
  }



  return (
    <div className="App">
     <h1>Death appointment</h1>
     <h2>Add New Dance With Death</h2>
     <div>
       <input type="text" placeholder="Add event" style={{width: "20%", marginRight: "10px" }}
        value={newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
       />
       <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}} 
       selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}
       />
       <DatePicker placeholderText="End Date" 
       selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})} 
       />
       <button style={{marginTop: "10px"}} onClick={handleAddEvent}>Add appointment</button>
     </div>
     <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{height: 500, margin: "50px"}} />
    </div>
  );
}

export default App;
