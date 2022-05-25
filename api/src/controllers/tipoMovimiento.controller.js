const TipoMovimiento = require("../models/tipoMovimiento.model");

exports.create = (req, res) => {
  if (!req.body.descripcion) {
    res.status(400).send({
      message: "El tipo de movimiento debe de contener un nombre",
    });
  }

  const tipoMovimientoNuevo = new TipoMovimiento({
    descripcion: req.body.descripcion,
  });

  tipoMovimientoNuevo.save((err, tipoMovimientoNuevo) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear el tipo de movimiento ${tipoMovimientoNuevo.descripcion}`,
      });
    } else {
      res.status(200).send(tipoMovimientoNuevo);
    }
  });
};

exports.findOne = (req, res) => {
  TipoMovimiento.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Tipo movimiento con id: ${req.params.id} no encontrado`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Tipo movimiento con id: ${req.params.id} no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos del tipo movimiento con id: ${req.params.id}.`,
      });
    });
};

exports.findAll = (req, res) => {
  TipoMovimiento.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un error al tratar de recuerar todos los tipos movimientos registrados.",
      });
    });
};

exports.update = (req, res) => {
  TipoMovimiento.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Tipo movimiento con id: ${req.params.id}, no encontrado`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Tipo movimiento con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar el tipo movimiento con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  TipoMovimiento.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Tipo movimiento con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Tipo movimiento eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Tipo movimiento con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar el tipo movimiento con id: ${req.params.id}.`,
      });
    });
};
