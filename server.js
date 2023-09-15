const express = require("express");
const app = express();
const cors = require("cors")

const mongoose = require("mongoose");
const connectionPromise = mongoose.connect("mongodb://127.0.0.1/rest_easy");

connectionPromise.then(console.log("Successfully Connected")).catch((err) => {
  console.log("error in connection", err);
});

const menuItem = new mongoose.Schema({
    hotels: [
        {
          name: String,
          menu: [
            {
              name: String,
              image: String,
              cost: Number
            }
        ]
    }]
});

const menu = mongoose.model("menu_card", menuItem);

app.use(cors());
app.get("/form", async (req, res) => {
  try {
    const foodMenu = await menu.find();
    res.json(foodMenu);
    console.log(JSON.stringify(foodMenu));
    // res.send("This is a form request");
  } catch (err) {
    res.send("Error:-", err);
  }
});

const port = process.env.PORT || 8210;
app.listen(port, () => {
  console.log(`Successfully Connected at ${port}`);
});

// coursesRouter.get("/", async (req, res) => {
//     try {
//       const selectQuery = { _id: 0, name: 1, category: 1 };
//       const courses = await Course.find();
//       res.json(courses);
//     } catch (err) {
//       res.send("Error :-", err);
//     }
//   });
