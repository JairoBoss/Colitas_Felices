module.exports = (app) => {
    const TipoMovimientoController = require("../controllers/tipoMovimiento.controller.js");
    var router = require("express").Router();
  
    router.post("/", TipoMovimientoController.create);
  
    router.get("/", TipoMovimientoController.findAll);
  
    router.get("/:id", TipoMovimientoController.findOne);
  
    router.put("/:id", TipoMovimientoController.update);
  
    router.delete("/:id", TipoMovimientoController.delete);
  
    app.use("/api/tipo-movimiento", router);
  };
  