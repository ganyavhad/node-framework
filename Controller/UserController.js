const Router = require("express").Router();
const UserModel = require("../Model/UserModel");

Router.get("/:id", async (req, res) => {
  try {
    let user = await UserModel.getAll(req.params.id);
    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});
Router.post("/saveUser", async (req, res) => {
  try {
    let user = await UserModel.saveUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = Router;
