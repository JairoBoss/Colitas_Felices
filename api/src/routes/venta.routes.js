module.exports = (app) => {
  const VentaController = require("../controllers/Venta.controller.js");
  var router = require("express").Router();

  router.post("/", VentaController.create);

  router.get("/", VentaController.findAll);

  router.get("/:id", VentaController.findOne);

  router.put("/:id", VentaController.update);

  router.delete("/:id", VentaController.delete);

  app.use("/api/venta", router);
};
