module.exports = (app) => {
  const MascotaController = require("../controllers/mascota.controller.js");
  var router = require("express").Router();

  router.post("/", MascotaController.create);

  router.get("/", MascotaController.findAll);

  router.get("/:id", MascotaController.findOne);

  router.put("/:id", MascotaController.update);

  router.delete("/:id", MascotaController.delete);

  app.use("/api/mascota", router);
};
