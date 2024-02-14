import {
  ADD_CATEGORY,
  SET_CATEGORY,
  SET_DELETED,
  ADD_EVENT,
  ADD_Allday,
} from "../action/calendar";
const initialState = {
  categories: ["ocio", "trabajo", "cumpleaños"],
  events: [
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
  ],
  calendarKey: 0,
  dateStart: null,
  dateStart: null,
  timeStart: null,
  dateEnd: null,
  timeEnd: null,
  titleDate: null,
  allDay: true,
  selecCategory: null,
};

export const calendarReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CATEGORY:
      console.log(ADD_CATEGORY);
      console.log(`action.payload ${action.payload}`);

      console.log(typeof state.categories);
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case SET_CATEGORY:
      return {
        ...state,
      };
    case SET_DELETED:
      console.log(`SET_DELETED`);
      let indice = state.categories.indexOf(action.payload);
      if (indice === -1) {
        return;
      }
      console.log(`action.payload ${action.payload}`);
      console.log(`indice ${indice}`);
      let updatedEvents = [];
      for (let i = 0; i < state.events.length; i++) {
        console.log(state.events[i]);
        if (state.events[i].category === action.payload) {
          state.events.splice(i, 1);
        }
      }

      console.log(updatedEvents);
      state.categories.splice(indice, 1);
      // setCategories([...categories]);

      console.log(state.events);
      return {
        ...state,
        events: [...updatedEvents],
        categories: [...state.events],
      };
    case ADD_EVENT:
      console.log(ADD_EVENT);
      state.events.push(action.payload);
      return {
        ...state,
      };
    case ADD_Allday:
      console.log(ADD_Allday);
      console.log(state.allDay);
      return {
        ...state,
        allDay: !state.allDay
      };
    default:
      return state;
  }
};
