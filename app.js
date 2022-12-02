const express = require("express");
const app = express();
const Port = 5000;
app.use(express.static("./public"));

app.get("/", (req, res) => {
  return res.send("Task Manager App");
});

app.listen(Port, () => console.log(`Server is listening in Port ${5000}`));
