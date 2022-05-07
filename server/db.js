// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/monsters");

// // 2. Set up any schema and models needed by the app
// let monsterSchema = mongoose.Schema({
//   name: String,
//   data: Object,
//   strategy: [],
// });

// let Monster = mongoose.model("Monster", monsterSchema);

//   const saveMonster = (monsterObj) => {
//     console.log("Saving word: ", monsterObj);
//     return Monster.findOneAndUpdate({ name: monsterObj.name }, monsterObj, {
//       upsert: true,
//     });
//   };

//   const getMonster = async (monster) => {
//     try {
//       console.log("Getting Monster: ", monster);
//       const data = await Monster.findOne({ name: monster });
//       console.log("Mongo monster data: ", data);
//       return data;
//     } catch (err) {
//       console.error(err);
//     }
//   };


// module.exports = {
//   getMonster,
//   saveMonster,
// };