import { useState } from "react";

const useCategoryHook = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  //calendar
  const [events, setEnvents] = useState([]);
  const [calendarKey, setCalendarKey] = useState(0);
  //new date start
  const [dateStart, setDateStart] = useState(null);
  const [timeStart, setTimeStart] = useState(null);
  //new date end
  const [dateEnd, setDateEnd] = useState(null);
  const [timeEnd, setTimeEnd] = useState(null);
  //new date
  const [titleDate, setTitleDate] = useState(null);
  const [allDay, setAllday] = useState(true);
  //new date category
  const [selecCategory, setSelectCategory] = useState(null);
  const addCategory = () => {
    if (newCategory) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };
  const deletd = (category) => {
    let indice = categories.indexOf(category);
    console.log(category);
    let updatedEvents = [];
    for (let i = 0; i < events.length; i++) {
      if (events[i].category !== category) {
        updatedEvents.push(events[i]);
      }
    }

    console.log(updatedEvents);
    categories.splice(indice, 1);
    setCategories([...categories]);

    setEnvents(updatedEvents);
    setCalendarKey((prevKey) => prevKey + 1);
    console.log(events);
  };
  const sendDate = () => {
    let dateTimeStart = dateStart.split("-");

    if (allDay) {
      let date = {
        id: events.length,
        title: titleDate,
        start: new Date(
          dateTimeStart[0],
          dateTimeStart[1] - 1,
          dateTimeStart[2],
          timeStart,
          0
        ),
        end: new Date(
          dateTimeStart[0],
          dateTimeStart[1] - 1,
          dateTimeStart[2],
          timeStart,
          0
        ),
        category: selecCategory,
      };
      events.push(date);
      console.log(events);
      setEnvents(events);
      return setCalendarKey((prevKey) => prevKey + 1);
    }
    let dataTimeEnd = dateEnd.split("-");
    let date = {
      id: events.length,
      title: titleDate,
      start: new Date(
        dateTimeStart[0],
        dateTimeStart[1] - 1,
        dateTimeStart[2],
        timeStart,
        0
      ),
      end: new Date(
        dataTimeEnd[0],
        dataTimeEnd[1] - 1,
        dataTimeEnd[2],
        timeEnd,
        0
      ),
      category: selecCategory,
    };
    events.push(date);
    console.log(events);
    setEnvents(events);
    setCalendarKey((prevKey) => prevKey + 1);
  };
  const changeAllDay = () => {
    setAllday(!allDay);
  };
  return {
    categories,
    setCategories,
    newCategory,
    setNewCategory,
    addCategory,
    deletd,
    events,
    setEnvents,
    sendDate,
    dateStart,
    setDateStart,
    timeStart,
    setTimeStart,
    dateEnd,
    setDateEnd,
    timeEnd,
    setTimeEnd,
    setAllday,
    allDay,
    selecCategory,
    setSelectCategory,
    setTitleDate,
    calendarKey,
    changeAllDay
  };
};

export default useCategoryHook;
