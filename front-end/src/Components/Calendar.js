import React, { useEffect, useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import rrulePlugin from "@fullcalendar/rrule";
import { RRule } from "rrule";
import Popup from './Popup';

const Calendar = () => {
  const [auth, setAuth] = useState(false);
  const [selectedDate, setDate] = useState(null)
  const [popupOpen, setPopupOpen] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setAuth(true)
    }
  }, [])

  const handleDayClicked = (args) =>   {
    const clickedDate = new Date(args.date);
    setDate(clickedDate);
    setPopupOpen(true);
};
  
  const handleNewEvent = (eventData) => {
     // Add logic to save the eventData as a new event
     console.log('New event data:', eventData);
     setPopupOpen(false); // Close the popup after saving
  }
 

    const handlePopUpClose = () => {
      setPopupOpen(false);
    }


    const customEvents = [
      {title: "Epiphany", rrule: "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=6;BYHOUR=0;BYMINUTE=0"},

      {title: "GroundHog's Day", rrule: "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=2;BYHOUR=0;BYMINUTE=0"},
      {title: "Martin Luther King Jr. Birthday", rrule: "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=17;BYHOUR=0;BYMINUTE=0"},
      {title: "Lincoln's Birthday", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=17;BYHOUR=0;BYMINUTE=0"},

      {title: "April Fools", rrule: "FREQ=YEARLY;BYMONTH=4;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0"},
      {title: "Valentine's Day", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=14;BYHOUR=0;BYMINUTE=0"},
      {title: "Presidents Day", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=21;BYHOUR=0;BYMINUTE=0"},
      {title: "Washington's Birthday", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=21;BYHOUR=0;BYMINUTE=0"},
      {title: "Saint Partick's Day", rrule: "FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=17;BYHOUR=0;BYMINUTE=0"},
      {title: "Memorial Day", rrule: "FREQ=YEARLY;BYMONTH=5MO;BYMONTHDAY=-1;BYHOUR=0;BYMINUTE=0"},
      {title: "Father's Day", rrule: "FREQ=YEARLY;BYMONTH=6;BYDAY=3SU;BYHOUR=0;BYMINUTE=0"},
      {title: "Mother's Day", rrule: "FREQ=YEARLY;BYMONTH=5;BYDAY=2SU;BYHOUR=0;BYMINUTE=0"},
      {title: "Labor Day", rrule: "FREQ=YEARLY;BYMONTH=9;BYDAY=1MO;BYHOUR=0;BYMINUTE=0"},
      {title: "Election Day", rrule: "FREQ=YEARLY;BYMONTH=11;BYDAY=1MO;BYHOUR=0;BYMINUTE=0"},
      {title: "National Day of Mourning", rrule: "FREQ=YEARLY;BYMONTH=11;BYDAY=4TH;BYHOUR=0;BYMINUTE=0"},


      {title: "Spring Equinox", rrule: "FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=21;BYHOUR=0;BYMINUTE=0"},
      {title: "Autumn Equinox", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=23;BYHOUR=0;BYMINUTE=0"},
      {title: "Summer Solstice", rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=21;BYHOUR=0;BYMINUTE=0"},
      {title: "Winter Equinox", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=22;BYHOUR=0;BYMINUTE=0"},
      {title: "Yule", 
        rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=21;BYHOUR=0;BYMINUTE=0",
        duration: { days: 12 }
      },
      {title: "Imbolic", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0"},
      {title: "Ostara", rrule: "FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=21;BYHOUR=0;BYMINUTE=0"},
      {title: "Litha", rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=21;BYHOUR=0;BYMINUTE=0"},
      {title: "Midsummer", rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=24;BYHOUR=0;BYMINUTE=0"},
      {title: "Lughnasdh", rrule: "FREQ=YEARLY;BYMONTH=8;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0"},
      {title: "Madon", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=23;BYHOUR=0;BYMINUTE=0"},
      {title: "All Hallows", rrule: "FREQ=YEARLY;BYMONTH=11;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0"},
      {title: "Samhain", rrule: "FREQ=YEARLY;BYMONTH=11;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0"},

      { title: "May Day",rrule: "FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0" },
      { title: "Beltane", rrule: "FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0" },
      { title: "Cinco de Mayo",rrule: "FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=5;BYHOUR=0;BYMINUTE=0" },
      { title: "V-E Day",rrule: "FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=8;BYHOUR=0;BYMINUTE=0" },


      { title: "Flag Day",rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=14;BYHOUR=0;BYMINUTE=0"  },
      { title: "Juneteenth", rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=19;BYHOUR=0;BYMINUTE=0" },

      { title: "Forth of July",rrule: "FREQ=YEARLY;BYMONTH=7;BYMONTHDAY=4;BYHOUR=0;BYMINUTE=0" },
      { title: "Pioneer Day", rrule: "FREQ=YEARLY;BYMONTH=7;BYMONTHDAY=24;BYHOUR=0;BYMINUTE=0" },
     


      { title: "Indigenous Peoples' Day", rrule:"FREQ=YEARLY;BYDAY=2MO;BYMONTH=10;BYHOUR=0;BYMINUTE=0"},
      { title: "Halloween",rrule: "FREQ=YEARLY;BYMONTH=10;BYMONTHDAY=31;BYHOUR=0;BYMINUTE=0" },


      { title: "Veterans Day", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=11;BYHOUR=0;BYMINUTE=0" },
      { title: "All Saints Day", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0" },

      { title: "Day of the Dead",
        rrule:"FREQ=YEARLY;BYMONTH=11;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0",
        duration: {days: 2}
      },

      { title: "Trans Day of Remembrance", rrule: "FREQ=YEARLY;BYMONTH=11;BYMONTHDAY=20;BYHOUR=0;BYMINUTE=0" },


      { title: "Kwanzaa",
      
      rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=26;BYHOUR=0;BYMINUTE=0",
      duration: {days: 7}
    },
      { title: "Chrismas", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=25;BYHOUR=0;BYMINUTE=0" },
      { title: "Christmas Eve", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=24;BYHOUR=0;BYMINUTE=0" },
      { title: "New Years Eve", date: "2023-12-31" },

      {title: "New Years", rrule:"FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0" }

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
      {popupOpen && (
        <Popup isOpen={popupOpen} onClose={handlePopUpClose} onSave={handleNewEvent} />            
        )}
   </div>
  )
}

export default Calendar