// import useCategoryHook from "./../hoock/Calendar";
// import { useState } from "react";

// const { categories, setCategories } = useCategoryHook();
// const useDeletd=()=>{
// const [events, setEnvents] = useState([]);
// const [calendarKey, setCalendarKey] = useState(0);
// const deletd = (category) => {
//     let indice = categories.indexOf(category);
//     console.log(category);
//     let updatedEvents = [];
//     for (let i = 0; i < events.length; i++) {
//       if (events[i].category !== category) {
//         updatedEvents.push(events[i]);
//       }
//     }

//     console.log(updatedEvents);
//     categories.splice(indice, 1);
//     setCategories([...categories]);

//     setEnvents(updatedEvents);
//     setCalendarKey((prevKey) => prevKey + 1);
//     console.log(events);
//   };    
//   return {categories, setCategories ,events, setEnvents,deletd,setCalendarKey,calendarKey}
// }
// export default useDeletd