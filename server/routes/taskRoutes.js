import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { createTask, getTasksByProject, updateTask, deleteTask, updateTaskStatus } from "../controllers/taskController.js";

const router = express.Router();


//CREATE TASK
router.post(
    "/",
    authMiddleware,
    createTask
);


//GET TASKS OF PROJECT
router.get(
    "/project/:projectId",
    authMiddleware,
    getTasksByProject
);


//UPDATE TASK
router.put(
    "/:id",
    authMiddleware,
    updateTask
);


//DELETE TASK
router.delete(
    "/:id",
    authMiddleware,
    deleteTask
);


//UPDATE TASK STATUS
router.patch(
    "/:id/status",
    authMiddleware,
    updateTaskStatus
);

export default router;