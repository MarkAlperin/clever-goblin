import axios from "axios";

import db from "../../server/db.js";

const api = {

  getMonster: async (monster) => {
    try {
      const data = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monster}`);
      // const myData = await axios.get(`http://localhost:3000/monsters/monster=${monster}`);
      // console.log('myData: ', myData);
      return data.data;
    } catch (err) {
      console.error(err);
    }
  },

  addMonsterHandler: async (monster) => {
    try {
      console.log("addmonsterhandler",  monster);
      const response = await fetch(
        "https://clever-goblin-default-rtdb.firebaseio.com/monsters.json",
        {
          method: "POST",
          body: JSON.stringify(monster),
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      const data = await response.json();
      console.log('returned data: ', data);
    } catch (err) {
      console.error(err);
    }
  },

  fetchMonsterHandler: async () => {
    try {
      const response = await fetch(
        "https://clever-goblin-default-rtdb.firebaseio.com/monsters.json"
      );
      if (!response.ok) {
        throw new Error("Something went Wrong!");
      }
      const data = await response.json();
      const loadedEvents = [];

      // for (const key in data) {
      //   loadedEvents.push({
      //     id: key,
      //     title: data[key].title,
      //     calendarTitle: data[key].calendarTitle,
      //     description: data[key].description,
      //     date: data[key].date,
      //     startTime: format(new Date(data[key].startTime), "MMM d  h:mmaa"),
      //     endTime: format(new Date(data[key].endTime), "p"),
      //   });
      // }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  },
};

export default api;