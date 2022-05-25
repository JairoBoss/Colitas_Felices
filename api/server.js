const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./src/models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 8080;
var corsOptions = {
  origin: process.env.WEB_LINK,
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );

  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");

  next();
});

app.get("/", (req, res) => {
  res.json({ message: "api work" });
});

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Conectado a la base de datos!");
  })
  .catch((err) => {
    console.log(
      `Ocurrio un error al tratar de conectarlo a la base de datos! ${err}`
    );
    process.exit();
  });

require("./src/routes/persona.routes.js")(app);
require("./src/routes/usuario.routes.js")(app);
require("./src/routes/mascota.routes.js")(app);
require("./src/routes/adopcion.routes.js")(app);
require("./src/routes/categoria.routes.js")(app);
require("./src/routes/articulo.routes.js")(app);
require("./src/routes/institucion.routes.js")(app);

app.listen(PORT, () => {
  console.log(`Server en el puerto ${PORT}`);
});
