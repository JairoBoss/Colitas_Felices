module.exports = (app) => {
  const PagoController = require("../controllers/pago.controller.js");
  var router = require("express").Router();

  router.post("/", PagoController.create);

  router.get("/", PagoController.findAll);

  router.get("/:id", PagoController.findOne);

  router.put("/:id", PagoController.update);

  router.delete("/:id", PagoController.delete);

  app.use("/api/pago", router);
};
