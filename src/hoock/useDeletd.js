import useCategoryHook from "./Calendar";
import { useState } from "react";

const [events, setEnvents] = useState([]);
const { categories,setCategories ,newCategory, setNewCategory, addCategory } = useCategoryHook();
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