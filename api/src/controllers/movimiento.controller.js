const Movimiento = require("../models/movimiento.model");

exports.create = (req, res) => {
  if (!req.body.descripcion) {
    res.status(400).send({
      message: "El movimiento debe de contener una descripcion",
    });
  }
  const movimientoNuevo = new Movimiento({
    descripcion: req.body.descripcion,
    fecha: req.body.fecha,
    monto: req.body.monto,
    tipoMovimiento: req.body.tipoMovimiento,
    persona: req.body.persona,
    pago: req.body.pago,
  });

  movimientoNuevo.save((err, movimientoNuevo) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear el nuevo movimeinto, ${movimientoNuevo.descripcion}`,
      });
    } else {
      Movimiento.findById(movimientoNuevo._id)
        .populate("tipoMovimiento")
        .populate("persona")
        .populate("pago")
        .exec((err, data) => {
          if (err) {
            console.log(err);
            res.status(500).send({
              message:
                err.message ||
                `Ocurrio un error al tratar de regresar el movimiento `,
            });
          } else {
            res.status(200).send(data);
          }
        });
    }
  });
};

exports.findOne = (req, res) => {
  Movimiento.findById(req.params.id)
    .populate("tipoMovimiento")
    .populate("persona")
    .populate("pago")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de recuperar el movimiento`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.findAll = (req, res) => {
  Movimiento.find()
    .populate("tipoMovimiento")
    .populate("persona")
    .populate("pago")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de recuperar todos los movimientos`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.update = (req, res) => {
  Movimiento.findByIdAndUpdate(req.params.id, req.body)
    .populate("tipoMovimiento")
    .populate("persona")
    .populate("pago")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de actualizar el movimiento`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.delete = (req, res) => {
  Movimiento.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Movimiento con id: ${req.params.id}, no encontrado`,
        });
      }
      res.send({ message: "Movimiento eliminada con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Movimiento con id: ${req.params.id}, no encontrado`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error el movimiento la adopcion con id: ${req.params.id}.`,
      });
    });
};
