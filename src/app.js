const express = require("express");
const initModels = require("./models/initModels");
// importamos la instancia db de database.js
const db = require("./utils/database");
// importo las rutas del usuario
const userRoutes = require("./Routes/users.routes");
const tasksRoutes = require("./Routes/tasks.routes");
const morgan = require("morgan");
const logs = require("./middlewares/requestLogs");
const handleError = require("./middlewares/error");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(logs);
app.use(morgan("dev"));

// app.use((req, res, next) => {
//   console.log('Antes de atender una peticion');
//   next();
// }) // Punto de montaje, trabajar en cualquier lugar o ruta

const PORT = process.env.PORT || 8000;

db.authenticate() // devuelve una promesa
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false }) // devuelve una promesa
  .then(() => console.log("Base sincronizada"))
  .catch((error) => console.log(error));

initModels();

app.get("/",
  // (req, res, next) => {
  //   console.log("Antes de responder a la ruta raiz");
  //   next();
  // }, 
  (req, res, next) => {
    res.status(200).json("Todo bien");
    next();
  },
);

app.use("/api/v1", userRoutes);

app.use("/api/v1", tasksRoutes);

app.use(handleError);

app.listen(PORT, () => console.log("Servidor corriendo en el puerto " + PORT));

// Ciclo de peticion respuesta
// request - response cycle

// middleware de aplicacion
// app.use, app.get, app.post, app.patch, app.delete, etc etc
// get, post, put, delete
// app.get --> peticion del tipo get

// Si quieres crear un middleware que atienda a todas las rutas, debemos hacer un app.use al inicio