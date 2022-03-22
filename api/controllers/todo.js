const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
    const todos = await Todo.find({ userId: req.params.userId });
    res.status(200).json(todos);
};

exports.createTodo = async (req, res) => {
    const newTodo = new Todo(req.body);
    try {
        const savedTodo = await newTodo.save();
        res.send(savedTodo);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedTodo);
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Todo has been deleted...' });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json(error);
    }
};
