const express = require("express");
const router = express.Router();
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask } = require("../controllers/taskController");

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskById);
router.post("/tasks", createTask);
router.patch("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

router.get('/test-error', (req, res) => {
    throw new Error('This is a test error');
});

module.exports = router;
