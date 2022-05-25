module.exports = (app) => {
  const UsuarioController = require("../controllers/usuario.controller.js");
  var router = require("express").Router();

  router.post("/", UsuarioController.create);

  router.post("/login", UsuarioController.login);

  router.get("/", UsuarioController.findAll);

  router.get("/:id", UsuarioController.findOne);

  router.put("/:id", UsuarioController.update);

  router.delete("/:id", UsuarioController.delete);

  app.use("/api/usuario", router);
};
