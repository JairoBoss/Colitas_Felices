const Venta = require("../models/venta.model");

exports.create = (req, res) => {
  if (!req.body.articulos) {
    res.status(400).send({
      message: "La venta debe de contener articulos",
    });
  }
  const ventaNueva = new Venta({
    articulos: req.body.articulos,
    movimiento: req.body.movimiento,
  });

  ventaNueva.save((err, ventaNueva) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message || `Ocurrio un error al tratar de crear la nueva venta`,
      });
    } else {
      Movimiento.findById(ventaNueva._id)
        .populate("Articulo")
        .populate("Movimiento")
        .exec((err, data) => {
          if (err) {
            console.log(err);
            res.status(500).send({
              message:
                err.message ||
                `Ocurrio un error al tratar de regresar la venta `,
            });
          } else {
            res.status(200).send(data);
          }
        });
    }
  });
};

exports.findOne = (req, res) => {
  Venta.findById(req.params.id)
    .populate("Articulo")
    .populate("Movimiento")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de recuperar la venta con id ${req.params.id}`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.findAll = (req, res) => {
  Venta.find()
    .populate("Articulo")
    .populate("Movimiento")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de recuperar todas las ventas`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.update = (req, res) => {
  Venta.findByIdAndUpdate(req.params.id, req.body)
    .populate("Articulo")
    .populate("Movimiento")
    .exec((err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de actualizar la venta con id ${req.params.id}`,
        });
      } else {
        res.status(200).send(data);
      }
    });
};

exports.delete = (req, res) => {
  Venta.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Venta con id: ${req.params.id}, no encontrada`,
        });
      }
      res.send({ message: "Venta eliminada con exito!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: `Venta con id: ${req.params.id}, no encontrada`,
        });
      }
      return res.status(500).send({
        message: `Ocurrio un error al tratar de eliminar la Venta con id: ${req.params.id}.`,
      });
    });
};
