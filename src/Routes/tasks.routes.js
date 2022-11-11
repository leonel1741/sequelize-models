const { Router } = require("express");
const {
  getTasksByUserId,
  createTask,
  completeTask,
} = require("../Controllers/tasks.controllers");

const router = Router();

// obtener tareas por user id
router.get("/tasks/:userId", getTasksByUserId);

// crear tarea --> una tarea esta asociada a un usuario --> ua tarea esta asociada --> categorias
router.post("/tasks", createTask);

// actualizar tarea
router.patch("/tasks/:id", completeTask);

// eliminar tarea

module.exports = router;

// crear una ruta para que un usuario pueda crear un tarea
// idUser, categories, title, description,
// body petición información para el POST

// El uso de las contraseñas
// Un paso previo va a ser encriptar las contraseñas
// para que ni nosotros ni el sistema tenga ese dato
// bcrypt --> "lasdlkhqweph" --> 09182321khalfn // no hay manera de decodificarlo
// Que no se expone la contraseña en ningun momento

// instalar bcrypt
// Vamos a beforeCreate --> Antes de que creemos al usuario vamos a encriptar la contraseña y liuego guardarla en la base de datos