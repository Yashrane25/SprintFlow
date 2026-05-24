import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Access denied. Please log in to continue."
            });
        }

        //Bearer token
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                message: "Authentication token is missing or improperly formatted."
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Your session has expired. Please log in again."
            });
        }
        return res.status(401).json({
            message: "Authentication failed. Invalid or unauthorized access."
        });
    }
};

export default authMiddleware;