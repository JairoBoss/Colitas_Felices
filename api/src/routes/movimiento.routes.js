module.exports = (app) => {
  const MovimientoController = require("../controllers/movimiento.controller.js");
  var router = require("express").Router();

  router.post("/", MovimientoController.create);

  router.get("/", MovimientoController.findAll);

  router.get("/:id", MovimientoController.findOne);

  router.put("/:id", MovimientoController.update);

  router.delete("/:id", MovimientoController.delete);

  app.use("/api/movimiento", router);
};
