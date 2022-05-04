const mongoose = require("mongoose");
console.log("mongoose: ", mongoose);
// mongoose.connect("mongodb://localhost/monsters");

// // 2. Set up any schema and models needed by the app
// let monsterSchema = mongoose.Schema({
//   name: String,
//   strategy: String,
// });

// let Monster = mongoose.model("Monster", monsterSchema);

const db = {
  saveMonster: (monsterObj) => {
    console.log("Saving word: ", monsterObj);
    return Monster.findOneAndUpdate({ name: monsterObj.name }, monsterObj, {
      upsert: true,
    });
  },

  getMonster: async (monster) => {
    try {
      console.log("Getting Monster: ", monster);
      const data = await Monster.findOne({ name: monster });
      console.log("Mongo monster data: ", data);
      return data;
    } catch (err) {
      console.error(err);
    }
  },
};

export default db;