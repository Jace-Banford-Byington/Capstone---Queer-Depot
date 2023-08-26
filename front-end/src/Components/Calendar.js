import React, { useEffect, useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import rrulePlugin from "@fullcalendar/rrule";
import { RRule } from "rrule";



const Calendar = () => {
  const [auth, setAuth] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [selectedDate, setDate] = useState(null)
  const [popupOpen, setPopupOpen] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setAuth(true)
    }
  }, [])


  const handleEventChange = (eventField, value) => {
    setNewEvent((prevEvent) => ({ ...prevEvent, [eventField]: value }));
  };

  const handleDayClicked = (args) => {
    const clickedDate = new Date(args.date);
    console.log("Clicked Date: ", clickedDate)
    clickedDate.setUTCHours(0, 0, 0, 0); // Convert to UTC midnight
    console.log("After being shifted: ", clickedDate)

    const eventsOnClickedDate = customEvents.filter((event) => {
      console.log("Starting Filltering process")
      console.log("The events on clicked date",eventsOnClickedDate)
      if (event.rrule) {
        const rule = RRule.fromString(event.rrule);
        const occurrences = rule.between(clickedDate, clickedDate, true);
        return occurrences.length > 0;
      }
      return false;
    });
  
    if (eventsOnClickedDate.length === 0) {
      setDate(clickedDate);
      setPopupOpen(true);
    }
  };
  


    const handlePopUpClose = () => {
      setPopupOpen(false);
    }


    const customEvents = [
      {title: "Epiphany", rrule: "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=6"},

      {title: "GroundHog's Day", rrule: "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=2"},
      {title: "Martin Luther King Jr. Birthday", rrule: "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=17"},
      {title: "Lincoln's Birthday", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=17"},

      {title: "April Fools", rrule: "FREQ=YEARLY;BYMONTH=4;BYMONTHDAY=1"},
      {title: "Valentine's Day", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=14"},
      {title: "Presidents Day", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=21"},
      {title: "Washington's Birthday", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=21"},
      {title: "Saint Partick's Day", rrule: "FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=17"},
      {title: "Memorial Day", rrule: "FREQ=YEARLY;BYMONTH=5MO;BYMONTHDAY=-1"},
      {title: "Father's Day", rrule: "FREQ=YEARLY;BYMONTH=6;BYDAY=3SU"},
      {title: "Mother's Day", rrule: "FREQ=YEARLY;BYMONTH=5;BYDAY=2SU"},
      {title: "Labor Day", rrule: "FREQ=YEARLY;BYMONTH=9;BYDAY=1MO"},
      {title: "Election Day", rrule: "FREQ=YEARLY;BYMONTH=11;BYDAY=1MO"},
      {title: "National Day of Mourning", rrule: "FREQ=YEARLY;BYMONTH=11;BYDAY=4TH"},


      {title: "Spring Equinox", rrule: "FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=21"},
      {title: "Autumn Equinox", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=23"},
      {title: "Summer Solstice", rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=21"},
      {title: "Winter Equinox", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=22"},
      {title: "Yule", 
        rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=21",
        duration: { days: 12 }
      },
      {title: "Imbolic", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=1"},
      {title: "Ostara", rrule: "FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=21"},
      {title: "Litha", rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=21"},
      {title: "Midsummer", rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=24"},
      {title: "Lughnasdh", rrule: "FREQ=YEARLY;BYMONTH=8;BYMONTHDAY=1"},
      {title: "Madon", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=23"},
      {title: "All Hallows", rrule: "FREQ=YEARLY;BYMONTH=11;BYMONTHDAY=1"},
      {title: "Samhain", rrule: "FREQ=YEARLY;BYMONTH=11;BYMONTHDAY=1"},

      { title: "May Day",rrule: "FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=1" },
      { title: "Beltane", rrule: "FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=1" },
      { title: "Cinco de Mayo",rrule: "FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=5" },
      { title: "V-E Day",rrule: "FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=8" },


      { title: "Flag Day",rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=14"  },
      { title: "Juneteenth", rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=19" },

      { title: "Forth of July",rrule: "FREQ=YEARLY;BYMONTH=7;BYMONTHDAY=4" },
      { title: "Pioneer Day", rrule: "FREQ=YEARLY;BYMONTH=7;BYMONTHDAY=24" },
     


      { title: "Indigenous Peoples' Day", rrule:"FREQ=YEARLY;BYDAY=2MO;BYMONTH=10"},
      { title: "Halloween",rrule: "FREQ=YEARLY;BYMONTH=10;BYMONTHDAY=31" },


      { title: "Veterans Day", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=11" },
      { title: "All Saints Day", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=1" },

      { title: "Day of the Dead",
        rrule:"FREQ=YEARLY;BYMONTH=11;BYMONTHDAY=1",
        duration: {days: 2}
      },

      { title: "Trans Day of Remembrance", rrule: "FREQ=YEARLY;BYMONTH=11;BYMONTHDAY=20" },


      { title: "Kwanzaa",
      
      rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=26",
      duration: {days: 7}
    },
      { title: "Chrismas", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=25" },
      { title: "Christmas Eve", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=24" },
      { title: "New Years Eve", date: "2023-12-31" },

      {title: "New Years", rrule:"FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1" }

    ];

    const handleEventClicked = (arg) => {
      console.log("Clicked on event:", arg.event);

      handleDayClicked(arg);
    };
    

    const processedEvents = customEvents.map((event, index) => {
      const overlappingEvents = customEvents.filter(
        (otherEvent, otherIndex) =>
          index !== otherIndex &&
          (event.start <= otherEvent.end && event.end >= otherEvent.start)
      );
      const zIndex = overlappingEvents.length + 1;
      return { ...event, zIndex };
    });

  return (      
  <div className='flex'>
    <div className="calenderDiv">
					<FullCalendar 
            className="calendar"
						plugins={[dayGridPlugin, rrulePlugin]}
						initialView="dayGridMonth"
						weekends={true}
						events={customEvents}
            eventClick={handleEventClicked}
            //eventClick={handleEventClicked}  //for already existing events being clicked on 
            headerToolbar={{
              left: "prev",// Add navigation buttons (previous, next, today)
              center: "title today", // Display the current month as the title,
              right: "next",
            }}
            dayCellContent={(arg) => {
              const dayCellContent = document.createElement("div");
              dayCellContent.innerText = arg.dayNumberText;
              dayCellContent.addEventListener("click", () => handleDayClicked(arg));
              return { html: dayCellContent.outerHTML };
            }}
					/> 
				</div>
   </div>
  )
}

export default Calendar