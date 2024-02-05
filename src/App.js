import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";
const localizer = momentLocalizer(moment);

// Un array de eventos de prueba
let events = [
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
];

// Un componente que renderiza el calendario
const MyCalendar = () => {
  //calendar
  const [categort, setCategori] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  //new date
  const [titleDate, setTitleDate] = useState(null);  
  //new date start
  const [dateStart, setDateStart] = useState(null);
  const [timeStart, setTimeStart] = useState(null);
  //new date end
  const [dateEnd, setDateEnd] = useState(null);
  const [timeEnd, setTimeEnd] = useState(null);
  ;
  useEffect(() => {
    setCategori(["ocio", "trabajo", "cumpleaños"]);
  }, []);
  const addCatogory = () => {
    if (newCategory) {
      setCategori([...categort, newCategory]);
    }
  };
  const deletd = (category) => {
    let indice = categort.indexOf(category);
    categort.splice(indice, 1);
    setCategori([...categort]);
    for (let index = 0; index < events.length; index++) {
      if (events[index].category === "category") {
        events.splice(index, 1);
      }
    }
  };
  const horasOptions = Array.from({ length: 24 }, (_, index) => (
    <option key={index} value={index}>
      La hora es {index}
    </option>
  ));
  const sendDate = () => {
    let dateTimeStart = timeStart.split("-");
    let date = {
      id: events.length,
      title: titleDate,
      start: new Date(dateTimeStart[0], dateTimeStart[1] - 1, dateTimeStart[3], timeStart, 0),
      end: new Date(2024, 1, 7, 23, 0),
      category: "ocio",
    };
    events.push(date);
    console.log(events);
  };
  return (
    <div className="container">
      <div style={{ height: 500, width: 900 }}>
        <Calendar
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
              ocio: "red",
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
          <button onClick={addCatogory}>Agregar categoria</button>
        </div>
        <div>
          <p>Lista de categoria</p>
          <ul>
            {categort?.map((category, index) => (
              <li key={index}>
                {category}{" "}
                <button onClick={(category) => deletd(category)}>
                  Eliminar
                </button>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Agregar una fecha</p>
          <input
            type="text"
            name="titleDate"
            onChange={(e) => setTitleDate(e.target.value)}
          ></input>
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
          <p>termina</p>
          <br />
          <button onClick={sendDate}>Agregar dia</button>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
