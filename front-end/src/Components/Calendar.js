import React, { useEffect, useState } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import rrulePlugin from "@fullcalendar/rrule";
import { RRule } from "rrule";
import Popup from './Popup';
import EventDetails from './EventDetails';

const Calendar = () => {
  const [auth, setAuth] = useState(false);
  const [selectedDate, setDate] = useState(null)
  const [popupOpen, setPopupOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setAuth(true)
    }
    fetchEventsFromBackend();
  }, [])

  const handleDayClicked = (args) =>   {
    const clickedDate = new Date(args.date);
    setDate(clickedDate);
    setPopupOpen(true);
};
// useEffect(() => {
//   console.log("Selected Event:", selectedEvent);
// }, [selectedEvent]);

  const handleNewEvent = (eventData) => {
    //  console.log('New event data:', eventData);
     setPopupOpen(false); // Close the popup after saving
     window.location.reload();
  }
 

    const handlePopUpClose = () => {
      setPopupOpen(false);
    }


    const fetchEventsFromBackend = async () => {
      try {
        const response = await fetch(`http://localhost:3300/AllEvents`); 
         //console.log("Response: ", response)
        if (response.ok) {
          const eventData = await response.json();
          // console.log("Events Data", eventData)
          const formattedEvents = eventData.map((event) => ({
            title: event.Name,
            start: event.StartTime,
            end: event.EndTime,
            description: event.Description,
            id: event._id,
          }));
          // console.log("Formatted Events: ", formattedEvents)
          const mergedEvents = [...customEvents, ...formattedEvents]


          setEvents(mergedEvents); // Set the fetched events in state
        } else {
          console.error('Failed to fetch events');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };


    const customEvents = [
      {title: "Epiphany", rrule: "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=6;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},

      {title: "GroundHog's Day", rrule: "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=2;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Martin Luther King Jr. Birthday", rrule: "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=17;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Lincoln's Birthday", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=17;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},

      {title: "April Fools", rrule: "FREQ=YEARLY;BYMONTH=4;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Valentine's Day", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=14;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Presidents Day", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=21;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Washington's Birthday", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=21;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Saint Partick's Day", rrule: "FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=17;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Memorial Day", rrule: "FREQ=YEARLY;BYMONTH=5MO;BYMONTHDAY=-1;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Father's Day", rrule: "FREQ=YEARLY;BYMONTH=6;BYDAY=3SU;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Mother's Day", rrule: "FREQ=YEARLY;BYMONTH=5;BYDAY=2SU;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Labor Day", rrule: "FREQ=YEARLY;BYMONTH=9;BYDAY=1MO;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Election Day", rrule: "FREQ=YEARLY;BYMONTH=11;BYDAY=1MO;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "National Day of Mourning", rrule: "FREQ=YEARLY;BYMONTH=11;BYDAY=4TH;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},


      {title: "Spring Equinox", rrule: "FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=21;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Autumn Equinox", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=23;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Summer Solstice", rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=21;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Winter Equinox", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=22;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Yule", 
        rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=21;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event",
        duration: { days: 12 }
      },
      {title: "Imbolic", rrule: "FREQ=YEARLY;BYMONTH=2;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Ostara", rrule: "FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=21;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Litha", rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=21;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Midsummer", rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=24;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Lughnasdh", rrule: "FREQ=YEARLY;BYMONTH=8;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Madon", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=23;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "All Hallows", rrule: "FREQ=YEARLY;BYMONTH=11;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      {title: "Samhain", rrule: "FREQ=YEARLY;BYMONTH=11;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},

      { title: "May Day",rrule: "FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event" },
      { title: "Beltane", rrule: "FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event" },
      { title: "Cinco de Mayo",rrule: "FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=5;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event" },
      { title: "V-E Day",rrule: "FREQ=YEARLY;BYMONTH=5;BYMONTHDAY=8;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event" },


      { title: "Flag Day",rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=14;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"  },
      { title: "Juneteenth", rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=19;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event" },

      { title: "Forth of July",rrule: "FREQ=YEARLY;BYMONTH=7;BYMONTHDAY=4;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event" },
      { title: "Pioneer Day", rrule: "FREQ=YEARLY;BYMONTH=7;BYMONTHDAY=24;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event" },
     


      { title: "Indigenous Peoples' Day", rrule:"FREQ=YEARLY;BYDAY=2MO;BYMONTH=10;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"},
      { title: "Halloween",rrule: "FREQ=YEARLY;BYMONTH=10;BYMONTHDAY=31;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event" },


      { title: "Veterans Day", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=11;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event" },
      { title: "All Saints Day", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event" },

      { title: "Day of the Dead",
        rrule:"FREQ=YEARLY;BYMONTH=11;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event",
        duration: {days: 2}
      },

      { title: "Trans Day of Remembrance", rrule: "FREQ=YEARLY;BYMONTH=11;BYMONTHDAY=20;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event" },


      { title: "Kwanzaa",
      
      rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=26;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event",
      duration: {days: 7}
    },
      { title: "Chrismas", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=25;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event" },
      { title: "Christmas Eve", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=24;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event" },
      { title: "New Years Eve", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=31;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event"  },

      {title: "New Years", rrule:"FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1;BYHOUR=0;BYMINUTE=0", classNames: "unclickable-event" }

    ];

    const handleEventClicked = (arg) => {
      console.log("Clicked ", arg.event)
      const eventDetails = arg.event;
      if (!eventDetails.classNames.includes("unclickable-event")) {
        const eventData = {
          title: eventDetails.title,
          description: eventDetails.extendedProps && eventDetails.extendedProps.description,
          start: eventDetails.start,
          end: eventDetails.end
        };
        setSelectedEvent(eventData);
      }
    };
    

    const processedEvents = customEvents.map((event, index) => {
      // Convert date strings to Date objects
      if (event.date) {
        const date = new Date(event.date);
        event.start = new Date(date);
        event.end = new Date(date);
    
        // console.log("Event: ", event)
        // console.log("Start", event.start)
        // console.log("End: ", event.end)
      }
        
      // Filter overlapping events
      const overlappingEvents = customEvents.filter(
        (otherEvent, otherIndex) =>
          index !== otherIndex &&
          (event.start <= otherEvent.end && event.end >= otherEvent.start)
      );
        
      // Calculate zIndex based on the number of overlapping events
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
						events={events}
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

        <div className='addEventWrapper'>
          {auth && (
                <button className='addEvent' onClick={() => setPopupOpen(true)}>Add Event</button>
              )}
        </div>
        
        {selectedEvent && (
          <EventDetails event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}

      {auth && popupOpen && (
        <Popup isOpen={popupOpen} onClose={handlePopUpClose} onSave={handleNewEvent} />            
        )}
   </div>
  )
}

export default Calendar