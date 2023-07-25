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
        "April Fool's Day - 4/1",
        ""

    ]



  return (
    <div className="calenderDiv">
					<FullCalendar className="calender"
						plugins={[dayGridPlugin]}
						initialView="dayGridMonth"
						weekends={true}
						events={[
							{ title: "Forth of July", date: "2023-07-04" },
							{ title: "Pioneer Day", date: "2023-07-24" },
						]
					}
					/>
				</div>
  )
}

export default Calendar