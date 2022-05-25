module.exports = (app) => {
  const PersonaController = require("../controllers/persona.controller.js");
  var router = require("express").Router();

  router.post("/", PersonaController.create);

  router.get("/", PersonaController.findAll);

  router.get("/:id", PersonaController.findOne);

  router.put("/:id", PersonaController.update);

  router.delete("/:id", PersonaController.delete);

  app.use("/api/persona", router);
};
