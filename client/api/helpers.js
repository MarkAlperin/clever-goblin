import axios from "axios";

import db from "../../server/db.js";

const api = {

  getMonster: async (monster) => {
    try {
      const data = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monster}`);
      const myData = await axios.get(`http://localhost:3000/monsters/monster=${monster}`);
      console.log('myData: ', myData);
      return data.data;
    } catch (err) {
      console.error(err);
    }
  },

};

export default api;