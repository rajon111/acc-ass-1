//dependencies
const express = require("express");
const {
  getRandomUser,
  getAllUsers,
  postUser,
  updateUser,
  bulkUpdate,
  deleteUser,
} = require("../../controllers/users.controller");

//module scaffolding
const usersRoutes = express.Router();

//routes
usersRoutes.route("/random").get(getRandomUser);
usersRoutes.route("/all").get(getAllUsers);
usersRoutes.route("/save").post(postUser);
usersRoutes.route("/update").patch(updateUser);
usersRoutes.route("/bulk-update").patch(bulkUpdate);
usersRoutes.route("/delete").delete(deleteUser);

//export module
module.exports = usersRoutes;