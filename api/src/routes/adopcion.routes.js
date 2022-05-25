module.exports = (app) => {
  const AdopcionController = require("../controllers/adopcion.controller.js");
  var router = require("express").Router();

  router.post("/", AdopcionController.create);

  router.get("/", AdopcionController.findAll);

  router.get("/:id", AdopcionController.findOne);

  router.put("/:id", AdopcionController.update);

  router.delete("/:id", AdopcionController.delete);

  app.use("/api/adopcion", router);
};
