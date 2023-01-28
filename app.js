const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });
const app = express();

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

console.log(DB);

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("no connection");
    console.log(e);
  });

// mongoose
//   .connect(
//     "mongodb+srv://RaghavKhandelwal:raghav1103Special@cluster1.tnn4sbj.mongodb.net/?retryWrites=true&w=majority",
//     {
//       useCreateIndex: true,
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//     }
//   )
//   .then(() => {
//     console.log("connection successful");
//   })
//   .catch((e) => {
//     console.log("no connection");
//     console.log(e);
//   });

const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res
    .status(404)
    .json({ message: "hello from the server side!", app: "special you" });
  // .send("hello");
});
app.post("/", (req, res) => {
  res.send("now you can post to this end point !");
});

app.listen(port, () => {
  console.log(`app is running at port ${port}...`);
});
