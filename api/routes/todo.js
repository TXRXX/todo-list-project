const express = require("express");
const router = express.Router();
const controllers = require("../controllers/todo");

router.get("/todo/:userId", controllers.getTodos);
router.post("/todo", controllers.createTodo);
router.put("/todo/:id", controllers.updateTodo);
router.delete("/todo/:id", controllers.deleteTodo);
router.get("/todo/find/:id", controllers.getTodoById);

module.exports = router;
