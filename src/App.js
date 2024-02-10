import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";
import useCategoryHook from "./hoock/Calendar";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const {
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
    changeAllDay,
  } = useCategoryHook();

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

  const horasOptions = Array.from({ length: 24 }, (_, index) => (
    <option key={index} value={index}>
      La hora es {index}
    </option>
  ));

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
