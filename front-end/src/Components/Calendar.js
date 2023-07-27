import React from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


const Calendar = () => {


    const holidays = [
        "Chrismas -  12/25",
        "New Years Eve - 12/31",
        "New Years - 1/1",
        "Epiphany - 1/6",
        "Martian Luther King Jr. Birthday - 1/17",
        "Chinese New Year - 1/21 thur 2/20",
        "Groundhog Day - 1/2",
        "Lincoln's Birthday - 2/12",
        "Valentines Day - 2/14",
        "Presidents Day 2/21",
        "Washington's Birthday - 2/21",
        "Mardi Gras - 47 Days before Easter 3/23 through 4/25",
        "Ash Wednesday - Day after Mardi Gras",
        "Purim - 14th of Adar", //Need to look into what means
        "Saint Patrick's Day - 3/17",
        "Spring Equinox - 3/21",
        "Winter Solstice - 12/22",
        "Yule - 12/22 through 1",
        "Imbolic - 2/1",
        "Ostara - 3/21",
        "Litha - 6/21",
        "Midsummer - 6/24",
        "Lughnasdh - 8/1",
        "Madon - 9/23",
        "All Hallows - 11/1",
        "Samhain - 11/1",
        "Autum Equinox - 9/23",
        "Summer Solstice - 6/21",
        "April Fool's Day - 4/1",
        "Ramadan - ninth month of the Islamic calendar ",
        "Palm Sunday - sunday before Easter",
        "Good Friday - Friday before Easter", 
        "Passover - 15thd day of Hebrew Month  Nisan first month in Hebrew calander", 
        "Easter - first sunday after the 14th ",
        "Orthodox Easter - first sunday full moon after Passover",
        "May Day - 5/1", 
        "Beltane - 5/1",
        "Eid al-Fitr - end of Ramadon Fasting first 3 days of Shawwāl (10th month of islamic month",
        "Cinco de Mayo - 5/5",
        "VE-Day - 5/8",
        "Mother's Day - second Sunday in May",
        "Ascention Day - 39 days after Easter",
        "Memorial Day - last monday in may",
        "Pride Month - 6/1 throuh 6/31",
        "Shavuot - 50 days after passover ",
        "Pentecost = 50 days affter resurrection",
        "Flag Day - 6/14",
        "Juneteenth - 6/19",
        "Father's Day - third sinday in June",
        "Indepencence Day - 7/4",
        "Eid al-Adha - 10 days after the sighting of a new crescent moon. lasts 3 days",
        "Muharram - first month of islamic New Year begins after first signting of the new moon on final day of islamic calendar",
        "Labor Day - first monday of september",
        "Rosh Hashanah - 163 days after passover",
        "Yom Kippur - 10th day of Tishrei 9 days after first day of Rosh Hashanah",
        "Nawlid al-Nabi - 12th day of Rabi 1  Always on the same day in Islamic Calendar",
        "Sukkot 15th - 21s of Tishrei",
        "Indigenous Peoples' Day - second monday every October",
        "Shemini Atzeret  - 22nd day of Tishrei (in Land of Isreal) 22nd and 23rd (everwhere else)",
        "Diwali - lasts  5 day / determined by position of the moon ",
        "Halloween - 8/31",
        "All Saints Day - 9/1",
        "Day of the Dead - 9/1 through 9/2",
        "Election Day - first monday in November ",
        "Veterans Day - 9/11", 
        "National Day of Mouring - fourth thursday in November",
        "First Sunday of Advent - nearest sunday to 9/30",
        "Hanukkah - 25th day of Kislev",
        "Kwanzaa - weeklong celebration 12/26 through 1/1"
    ]



  return (
    <div className="calenderDiv">
					<FullCalendar className="calender"
						plugins={[dayGridPlugin]}
						initialView="dayGridMonth"
						weekends={true}
						events={[

              { title: "May Day", date: "2023-05-01" },
              { title: "Beltane", date: "2023-05-01" },



              { title: "Flag Day", date: "2023-06-14" },
              { title: "Juneteenth", date: "2023-06-19" },

							{ title: "Forth of July", date: "2023-07-04" },
							{ title: "Pioneer Day", date: "2023-07-24" },
             



              { title: "Halloween", date: "2023-08-31" },


              { title: "Veterans Day", date: "2023-09-11" },
              { title: "All Saints Day", date: "2023-09-01" },
              { title: "Day of the Dead", date: "2023-09-01 2023-09-02" },




              { title: "Kwanaza", date: "2023-12-26 through 2024-01-01" },
              { title: "Chrismas", date: "2023-12-25" },
              { title: "Chrismas Eve", date: "2023-12-24" },
              { title: "New Years Eve", date: "2023-12-31" },



              {title: "New Years", date: "2024-01-01"}

						]
					}
					/>
				</div>
  )
}

export default Calendar