const Pago = require("../models/pago.model");

exports.create = (req, res) => {
  if (!req.body.idPaypal) {
    res.status(400).send({
      message: "El pago debe de contener un id",
    });
  }

  const pagoNuevo = new Pago({
    idPaypal: req.body.idPaypal,
    pagado: req.body.pagado,
  });

  pagoNuevo.save((err, pagoNuevo) => {
    if (err) {
      res.status(500).send({
        message: err.message || `Ocurrio un error al tratar de crear el pago`,
      });
    } else {
      res.status(200).send(pagoNuevo);
    }
  });
};

exports.findOne = (req, res) => {
  Pago.findById(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Pago con id: ${req.params.id} no encontrado`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Pago con id: ${req.params.id} no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Error al recuperar datos de la pago con id: ${req.params.id}.`,
      });
    });
};

exports.findAll = (req, res) => {
  Pago.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Ocurrio un error al tratar de recuerar todas los pagos registrados.",
      });
    });
};

exports.update = (req, res) => {
  Pago.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Pago con id: ${req.params.id}, no encontrado`,
        });
      }
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: `Pago con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Error al actualizar el pago con id: ${req.params.id}`,
      });
    });
};

exports.delete = (req, res) => {
  Pago.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Pago con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Pago eliminado con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Pago con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al eliminar el pago con id: ${req.params.id}.`,
      });
    });
};
