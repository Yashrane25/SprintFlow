import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String
        },

        status: {
            type: String,

            enum: [
                "todo",
                "inprogress",
                "review",
                "done"
            ],

            default: "todo"
        },

        priority: {
            type: String,

            enum: [
                "low",
                "medium",
                "high",
                "critical"
            ],

            default: "medium"
        },

        dueDate: {
            type: Date
        },

        labels: [
            {
                type: String
            }
        ],

        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
            required: true
        },

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;