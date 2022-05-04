require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const db = require("./db.js");

const app = express();

app.use(express.json());
app.use(morgan("tiny"));

app.post("/monster", (req, res) => {
  db.saveMonster(req.body.monsterObj)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/monster", (req, res) => {
  console.log(req.body);
  // db.getMonster(req.body.name)
  //   .then(data => {
  //     console.log('app.get data: ', data)
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.send(err);
  //   })
});

//const port = process.env.PORT || 3000;
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
