module.exports = (app) => {
  const ArticuloController = require("../controllers/articulo.controller.js");
  var router = require("express").Router();

  router.post("/", ArticuloController.create);

  router.get("/", ArticuloController.findAll);

  router.get("/:id", ArticuloController.findOne);

  router.put("/:id", ArticuloController.update);

  router.delete("/:id", ArticuloController.delete);

  app.use("/api/articulo", router);
};
