import Project from "../models/Project.js";

export const createProject = async (req, res) => {
    try {

        const { title, description } = req.body;

        const project = await Project.create({
            title,
            description,
            createdBy: req.user.id
        });

        return res.status(201).json({
            message: "Project created successfully",
            data: project
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

export const getProjects = async (req, res) => {
    try {

        const projects = await Project.find()
            .populate("createdBy", "name email");

        return res.status(200).json({
            message: "Projects fetched successfully",
            data: projects
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const getProjectById = async (req, res) => {
    try {

        const project = await Project.findById(
            req.params.id
        ).populate("createdBy", "name email");

        if (!project) {
            return res.status(404).json({
                message: "Project not found"
            });
        }

        return res.status(200).json({
            message: "Project fetched successfully",
            data: project
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

export const deleteProject = async (req, res) => {
    try {

        const project = await Project.findById(
            req.params.id
        );

        if (!project) {
            return res.status(404).json({
                message: "Project not found"
            });
        }

        if (project.createdBy.toString() !== req.user.id) {
            return res.status(403).json({
                message: "You do not have permission to perform this action."
            });
        }

        await project.deleteOne();

        res.status(200).json({
            message: "Project deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        });
    }
};