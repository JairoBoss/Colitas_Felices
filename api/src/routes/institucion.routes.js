module.exports = (app) => {
  const InstitucionController = require("../controllers/institucion.controller.js");
  var router = require("express").Router();

  router.post("/", InstitucionController.create);

  router.get("/", InstitucionController.findAll);

  router.get("/:id", InstitucionController.findOne);

  router.put("/:id", InstitucionController.update);

  router.delete("/:id", InstitucionController.delete);

  app.use("/api/institucion", router);
};
