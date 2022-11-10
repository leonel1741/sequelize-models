const { Router } = require("express");
const { getTasksByUserId } = require("../Controllers/tasks.controller");

const router = Router();

// Obtener tareas por user id
router.get("/tasks/:userId", getTasksByUserId);

// Crear tarea --> Una tarea esta asociada a un usuario --> una tarea esta asociada a un usuario

// Actualizar tarea

// Eliminar tarea

module.exports = router;