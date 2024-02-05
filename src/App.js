import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";
import useCategoryHook from "./hoock/Calendar";
const localizer = momentLocalizer(moment);

// Un array de eventos de prueba

// Un componente que renderiza el calendario
const MyCalendar = () => {
  const { categories,setCategories ,newCategory, setNewCategory, addCategory } = useCategoryHook();
  //calendar
  // const [events, setEnvents] = useState([]);
  const [calendarKey, setCalendarKey] = useState(0);
  //category

  // const [categories, setCategories] = useState([]);
  // const [newCategory, setNewCategory] = useState("");
  //new date
  const [titleDate, setTitleDate] = useState(null);
  const [allDay, setAllday] = useState(true);
  //new date category
  const [selecCategory, setSelectCategory] = useState(null);
  //new date start
  const [dateStart, setDateStart] = useState(null);
  const [timeStart, setTimeStart] = useState(null);
  //new date end
  const [dateEnd, setDateEnd] = useState(null);
  const [timeEnd, setTimeEnd] = useState(null);
  useEffect(() => {
    setEnvents([
      {
        id: 1,
        title: "Cumpleaños de Juan",
        start: new Date(2024, 1, 5),
        end: new Date(2024, 1, 5),
        allDay: true,
        category: "cumpleaños",
      },
      {
        id: 2,
        title: "Reunión con clientes",
        start: new Date(2024, 1, 6, 10, 0),
        end: new Date(2024, 1, 6, 12, 0),
        category: "trabajo",
      },
      {
        id: 3,
        title: "Clase de yoga",
        start: new Date(2024, 1, 7, 18, 0),
        end: new Date(2024, 1, 7, 23, 0),
        category: "ocio",
      },
    ]);
    setCategories(["ocio", "trabajo", "cumpleaños"]);
  }, []);
  // const addCategory = () => {
  //   if (newCategory) {
  //     setCategori([...categories, newCategory]);
  //   }
  // };
  // const deletd = (category) => {
  //   let indice = categories.indexOf(category);
  //   console.log(category);
  //   let updatedEvents = [];
  //   for (let i = 0; i < events.length; i++) {
  //     if (events[i].category !== category) {
  //       updatedEvents.push(events[i]);
  //     }
  //   }

  //   console.log(updatedEvents);
  //   categories.splice(indice, 1);
  //   setCategories([...categories]);

  //   setEnvents(updatedEvents);
  //   setCalendarKey((prevKey) => prevKey + 1);
  //   console.log(events);
  // };
  const horasOptions = Array.from({ length: 24 }, (_, index) => (
    <option key={index} value={index}>
      La hora es {index}
    </option>
  ));
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
     return  setCalendarKey((prevKey) => prevKey + 1);
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
  return (
    <div className="container">
      <div style={{ height: 500, width: 900 }}>
        <Calendar
          key={calendarKey}
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="month"
          // Puedes usar esta función para asignar un color a cada categoría de evento
          eventPropGetter={(event) => {
            const colors = {
              cumpleaños: "blue",
              trabajo: "green",
              ocio: "tomato",
            };
            return {
              style: {
                backgroundColor: colors[event.category],
              },
            };
          }}
        />
      </div>
      <div>
        <p>Lista de catogorias</p>
        <div>
          <input
            type="text"
            onChange={(e) => setNewCategory(e.target.value)}
          ></input>
          <button onClick={addCategory}>Agregar categoria</button>
        </div>
        <div>
          <p>Lista de categoria</p>
          <ul>
            {categories?.map((category, index) => (
              <li key={index}>
                {category}{" "}
                <button onClick={() => deletd(category)}>Eliminar</button>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Agregar una fecha</p>
          <input
            placeholder="titulo"
            type="text"
            name="titleDate"
            onChange={(e) => setTitleDate(e.target.value)}
          ></input>
          <p>Categoria</p>
          <select
            value={selecCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
          >
            <option value="" disabled>
              Selecciona una categoria
            </option>
            {categories.map((catego, index) => (
              <option key={index} value={catego}>
                {catego}
              </option>
            ))}
          </select>
          <div className="startDate">
            <p>Empieza</p>
            <input
              type="date"
              onChange={(e) => setDateStart(e.target.value)}
              name="dateStart"
            ></input>
            <select
              value={timeStart}
              onChange={(e) => setTimeStart(e.target.value)}
            >
              <option value="" disabled>
                Selecciona una hora
              </option>
              {horasOptions}
            </select>
          </div>
          {allDay ? (
            <div>
              <input
                type="checkbox"
                value={allDay}
                checked={allDay}
                onChange={changeAllDay}
              />
              <label for="miCheckbox">Es todo el dia </label>
            </div>
          ) : (
            <div>
              <p>termina</p>
              <input
                type="date"
                onChange={(e) => setDateEnd(e.target.value)}
                name="dateEnd"
              ></input>
              <select
                value={timeEnd}
                onChange={(e) => setTimeEnd(e.target.value)}
              >
                <option value="" disabled>
                  Selecciona una hora
                </option>
                {horasOptions}
              </select>
            </div>
          )}

          <br />
          <button onClick={sendDate}>Agregar dia</button>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
