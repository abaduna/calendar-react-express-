import { useState, useReducer } from "react";
import {
  ADD_CATEGORY,
  SET_DELETED,
  ADD_EVENT,
  ADD_Allday,
} from "../action/calendar";
import { calendarReducer } from "../reducers/Calendar";
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
  // const [allDay, setAllday] = useState(true);
  //new date category
  const [selecCategory, setSelectCategory] = useState(null);

  //reducer
  const [state, dispatch] = useReducer(calendarReducer, calendarReducer());
  const addCategory = () => {
    console.log(`click`);
    console.log(newCategory);

    dispatch({ type: ADD_CATEGORY, payload: newCategory });
    // setCategories([...categories, newCategory]); // Eliminado
    setNewCategory("");
    console.log(state.categories);
  };
  const deletd = (category) => {
    console.log(category);
    dispatch({ type: SET_DELETED, payload: category });
  };
  const sendDate = () => {
    const dataFecha = () => {
      let dateTimeStart = dateStart.split("-");
      let date = {};
      if (state.allDay) {
        date = {
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
      }
      if (!state.allDay) {
        let dataTimeEnd = dateEnd.split("-");
        date = {
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
      }
      return date;
    };
    let dateDisp = dataFecha();
    dispatch({ type: ADD_EVENT, payload: dateDisp });
  };
  const changeAllDay = () => {
    dispatch({ type: ADD_Allday });

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

    selecCategory,
    setSelectCategory,
    setTitleDate,
    calendarKey,
    changeAllDay,
  };
};

export default useCategoryHook;
