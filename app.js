//DataBase
require("./DataBase/connect");
const express = require("express");
const app = express();
const connectDB = require("./DataBase/connect");
const errorHandlerMiddleware = require("./Middleware/Error-Handler");
const notFound = require("./Middleware/notFound");

//.env
require("dotenv").config();
const tasks = require("./Router/tasks");
//Dynamic Port
const Port = process.env.PORT || 5000;

/*--------------------MIDDLEWARE---------------------- */

app.use(express.urlencoded({ extended: false }));
// app.use(cors());
app.use(express.json());
app.use("/api/v1/tasks", tasks);
app.use(express.static("./public"));
app.use(notFound);
app.use(errorHandlerMiddleware);
/*--------------------MIDDLEWARE---------------------- */

/*----------------------DB  and Server setup---------------------------------- */

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(Port, () => console.log(`Server is listening in Port ${5000}`));
  } catch (error) {
    console.log(error);
  }
};

start();
/*----------------------DB  and Server setup---------------------------------- */
