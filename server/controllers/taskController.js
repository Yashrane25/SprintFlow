import Task from "../models/Task.js";

export const createTask = async (req, res) => {
    try {

        const {
            title,
            description,
            priority,
            dueDate,
            labels,
            assignedTo,
            project
        } = req.body;

        const task = await Task.create({
            title,
            description,
            priority,
            dueDate,
            labels,
            assignedTo,
            project,
            createdBy: req.user.id
        });

        res.status(201).json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getTasksByProject = async (req, res) => {
    try {
        const tasks = await Task.find({
            project: req.params.projectId
        })
            .populate(
                "assignedTo",
                "name email"
            )
            .populate(
                "createdBy",
                "name email"
            );
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(
            req.params.id
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const deleteTask = async (req, res) => {
    try {

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        if (task.createdBy.toString() !== req.user.id) {
            return res.status(403).json({
                message: "Access denied"
            });
        }

        await task.deleteOne();
        res.status(200).json({ message: "Task deleted" });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const updateTaskStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const allowedStatuses = [
            "todo",
            "inprogress",
            "review",
            "done"
        ];

        if (!allowedStatuses.includes(status)) {
            return res.status(400).json({
                message: "Invalid status"
            });
        }

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        if (task.createdBy.toString() !== req.user.id) {
            return res.status(403).json({
                message: "Access denied"
            });
        }

        task.status = status;
        await task.save();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};