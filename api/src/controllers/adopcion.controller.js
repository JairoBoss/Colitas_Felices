const Adopcion = require("../models/adopcion.model");

exports.create = (req, res) => {
  const adopcionNueva = new Adopcion({
    fechaAdopcion: req.body.fechaAdopcion,
    status: req.body.status,
    Mascota: req.body.Mascota,
    Persona: req.body.Persona,
  });

  adopcionNueva.save((err, adopcionNueva) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message:
          err.message ||
          `Ocurrio un error al tratar de crear la nueva adopcion`,
      });
    } else {
      Adopcion.findById(adopcionNueva._id)
        .populate("Mascota")
        .populate("Persona")
        .exec((err, adopcionNueva) => {
          if (err) {
            console.log(err);
            res.status(500).send({
              message:
                err.message ||
                `Ocurrio un error al tratar de crear la nueva adopcion`,
            });
          } else {
            res.status(200).send(adopcionNueva);
          }
        });
    }
  });
};

exports.findOne = (req, res) => {
  Adopcion.findById(adopcionNueva._id)
    .populate("Mascota")
    .populate("Persona")
    .exec((err, adopcionNueva) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            err.message ||
            `Ocurrio un error al tratar de recuperar la adopcion`,
        });
      } else {
        res.status(200).send(adopcionNueva);
      }
    });
};

// adopcionNueva.save((err, adopcionNueva) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send({
//         message:
//           err.message ||
//           `Ocurrio un error al tratar de crear a ${personaNueva.nombres}`,
//       });
//     } else {
//       res.status(200).send(personaNueva);
//     }
//   });
