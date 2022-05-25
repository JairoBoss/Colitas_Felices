module.exports = (app) => {
  const CategoriaController = require("../controllers/categoria.controller.js");
  var router = require("express").Router();

  router.post("/", CategoriaController.create);

  router.get("/", CategoriaController.findAll);

  router.get("/:id", CategoriaController.findOne);

  router.put("/:id", CategoriaController.update);

  router.delete("/:id", CategoriaController.delete);

  app.use("/api/categoria", router);
};
