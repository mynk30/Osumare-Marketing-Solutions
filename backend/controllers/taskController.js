const tasks = require("../tasks.json");


const getAllTasks = (req, res) => {
    // Get pagination parameters from query
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    
    // Calculate pagination values
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const totalTasks = tasks.length;
    
    // Get paginated data
    const paginatedTasks = tasks.slice(startIndex, endIndex);
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(totalTasks / limit);
    const hasNext = endIndex < totalTasks;
    const hasPrevious = page > 1;
    
    // Create pagination links
    const pagination = {
        currentPage: page,
        totalPages,
        hasNext,
        hasPrevious,
        totalItems: totalTasks,
        itemsPerPage: limit
    };
    
    res.status(200).json({
        data: paginatedTasks,
        pagination
    });
};

const getTaskById = (req, res) => {
    const taskId = Number(req.params.id);
    console.log(taskId);
    console.log(tasks);
    const task = tasks.find((task) => task.id === taskId);
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
};

const createTask = (req, res) => {
    const { title, description, completed } = req.body;
    console.log(req.body);
    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        completed: completed === true ? true : false,
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
};

const updateTask = (req, res) => {
    const taskId = Number(req.params.id);
    console.log(taskId);
    const task = tasks.find((task) => task.id === taskId);
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    task.title = req.body.title;
    task.description = req.body.description;
    task.completed = req.body.completed === true ? true : false;
    res.status(200).json(task);
};

const deleteTask = (req, res) => {
    const taskId = Number(req.params.id);
    const task = tasks.find((task) => task.id === taskId);
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    res.status(200).json({ message: "Task deleted" });
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};
