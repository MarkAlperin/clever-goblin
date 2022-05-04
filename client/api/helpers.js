import axios from "axios";

const api = {

  getMonster: async (monster) => {
    try {
      const data = await axios.get(`https://www.dnd5eapi.co/api/monsters/${monster}`);
      return data.data;
    } catch (err) {
      console.error(err);
    }
  },

};

export default api;