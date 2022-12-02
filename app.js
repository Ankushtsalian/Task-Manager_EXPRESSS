const express = require("express");
const app = express();
const tasks = require("./Router/tasks");
const Port = 5000;
// app.use(express.static("./public"));

app.use(express.urlencoded({ extended: false }));
// app.use(cors());
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.all("*", (req, res) => {
  res.send("<h1>404 Not found</h1>");
});

app.listen(Port, () => console.log(`Server is listening in Port ${5000}`));
