//dependencies
const express = require("express");
const cors = require("cors");

const { errorHandler } = require("./middlewares/errorHandler");
const usersRoutes = require("./routes/usersRoutes/users.routes");

//app config
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());

//db connect
// dbConnect()

//handle application errors
app.use(errorHandler);

// dynamic api routes
app.use("/user", usersRoutes);

/* check api */
app.get("/", (req, res) => {
  res.send("Hello Rajon");
});
//create server
app.listen(port, () => console.log(`Listening on Port: ${port}`));

// handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log({
    name: err.name,
    message: err.message,
    stack: err.stack,
  });
  // close server & exit process
  app.close(() => process.exit(1));
});