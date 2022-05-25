module.exports = (app) => {
  const AdopcionController = require("../controllers/adopcion.controller.js");
  var router = require("express").Router();

  router.post("/", AdopcionController.create);

  app.use("/api/adopcion", router);
};
