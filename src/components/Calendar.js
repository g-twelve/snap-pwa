import classNames from "classnames";
import { useState } from "react";

function Calendar({selected, setSelected}){
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]

    const date = new Date()
    
    const dayWidgets = days.map( (day, i) => {
        let dayNo = date.getDate() + ( i - date.getDay())
        return (
            <Day 
                key={dayNo}
                dayNo={dayNo}
                week={day[0]}
                selected={selected}
                setSelected={setSelected}
            />
    )})

    return (
        <ul className="calendar flex jc-sb">                         
            {dayWidgets}                  
        </ul>
    )
}

function Day({dayNo, week, selected, setSelected}) {

    const clsName = classNames({
        "day": true, 
        "day--active": (dayNo == selected)
    })

    return (
        <li 
            className={clsName}
            onClick={() => setSelected(dayNo)}
        >
            <span className="day__number">{dayNo}</span>
            <span className="day__week">{week}</span>
        </li>
    )

}

export default Calendar;