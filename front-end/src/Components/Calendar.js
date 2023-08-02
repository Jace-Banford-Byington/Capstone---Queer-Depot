import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import rrulePlugin from "@fullcalendar/rrule";

const Calendar = () => {


    const holidays = [
        
        "Martian Luther King Jr. Birthday - 1/17",
        "Chinese New Year - 1/21 thur 2/20",
        "Lincoln's Birthday - 2/12",
        "Valentines Day - 2/14",
        "Presidents Day 2/21",
        "Washington's Birthday - 2/21",
        "Mardi Gras - 47 Days before Easter 3/23 through 4/25",
        "Ash Wednesday - Day after Mardi Gras",
        "Purim - 14th of Adar", //Need to look into what means
        "Saint Patrick's Day - 3/17",
        
        "Ramadan - ninth month of the Islamic calendar ",
        "Palm Sunday - sunday before Easter",
        "Good Friday - Friday before Easter", 
        "Passover - 15thd day of Hebrew Month  Nisan first month in Hebrew calander", 
        "Easter - first sunday after the 14th ",
        "Orthodox Easter - first sunday full moon after Passover",

        "Eid al-Fitr - end of Ramadon Fasting first 3 days of Shawwāl (10th month of islamic month",
        "Cinco de Mayo - 5/5",
        "VE-Day - 5/8",
        "Mother's Day - second Sunday in May",
        "Ascention Day - 39 days after Easter",
        "Memorial Day - last monday in may",
        "Pride Month - 6/1 throuh 6/31",
        "Shavuot - 50 days after passover ",
        "Pentecost = 50 days affter resurrection",
        "Father's Day - third sinday in June",
       
        "Eid al-Adha - 10 days after the sighting of a new crescent moon. lasts 3 days",
        "Muharram - first month of islamic New Year begins after first signting of the new moon on final day of islamic calendar",
        "Labor Day - first monday of september",
        "Rosh Hashanah - 163 days after passover",
        "Yom Kippur - 10th day of Tishrei 9 days after first day of Rosh Hashanah",
        "Nawlid al-Nabi - 12th day of Rabi 1  Always on the same day in Islamic Calendar",
        "Sukkot 15th - 21s of Tishrei",
        "Shemini Atzeret  - 22nd day of Tishrei (in Land of Isreal) 22nd and 23rd (everwhere else)",
        "Diwali - lasts  5 day / determined by position of the moon ",
        "Election Day - first monday in November ",
        "National Day of Mouring - fourth thursday in November",
        "First Sunday of Advent - nearest sunday to 9/30",
        "Hanukkah - 25th day of Kislev",
    ]



  return (
    <div className="calenderDiv">
					<FullCalendar className="calender"
						plugins={[dayGridPlugin, rrulePlugin]}
						initialView="dayGridMonth"
						weekends={true}
						events={[
              {title: "Epiphany", rrule: "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=6"},

              {title: "GroundHog's Day", rrule: "FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=2"},

              {title: "April Fools", rrule: "FREQ=YEARLY;BYMONTH=4;BYMONTHDAY=1"},
             
              {title: "Spring Equinox", rrule: "FREQ=YEARLY;BYMONTH=3;BYMONTHDAY=21"},
              {title: "Autumn Equinox", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=23"},
              {title: "Summer Solstice", rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=21"},
              {title: "Winter Equinox", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=22"},
              {title: "Yule", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=21,22,23,24,25,26,27,28,29,30,31,1"},
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
              { title: "Cinco de Mayo", date:"2023-05-05" },


              { title: "Flag Day",rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=14"  },
              { title: "Juneteenth", rrule: "FREQ=YEARLY;BYMONTH=6;BYMONTHDAY=19" },

							{ title: "Forth of July",rrule: "FREQ=YEARLY;BYMONTH=7;BYMONTHDAY=4" },
							{ title: "Pioneer Day", rrule: "FREQ=YEARLY;BYMONTH=7;BYMONTHDAY=24" },
             


              { title: "Indigenous Peoples' Day", rrule:"FREQ=YEARLY;BYDAY=2MO;BYMONTH=10"},
              { title: "Halloween",rrule: "FREQ=YEARLY;BYMONTH=10;BYMONTHDAY=31" },


              { title: "Veterans Day", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=11" },
              { title: "All Saints Day", rrule: "FREQ=YEARLY;BYMONTH=9;BYMONTHDAY=1" },
              { title: "Day of the Dead",rrule:"FREQ=YEARLY;BYMONTH=11;BYMONTHDAY=1;COUNT=2;BYSETPOS=1" },




              { title: "Kwanaza", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=26,27,28,29,30,31" },
              { title: "Chrismas", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=25" },
              { title: "Chrismas Eve", rrule: "FREQ=YEARLY;BYMONTH=12;BYMONTHDAY=24" },
              { title: "New Years Eve", date: "2023-12-31" },

              {title: "New Years", rrule:"FREQ=YEARLY;BYMONTH=1;BYMONTHDAY=1" }

						]
					}
					/>
				</div>
  )
}

export default Calendar