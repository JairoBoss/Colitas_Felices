module.exports = (app) => {
  const NoticiaController = require("../controllers/noticia.controller.js");
  var router = require("express").Router();

  router.post("/", NoticiaController.create);

  router.get("/", NoticiaController.findAll);

  router.get("/:id", NoticiaController.findOne);

  router.put("/:id", NoticiaController.update);

  router.delete("/:id", NoticiaController.delete);

  app.use("/api/noticia", router);
};
