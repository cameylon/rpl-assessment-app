// backend/middleware/errorHandler.js
module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
};


// backend/middleware/authMiddleware.js
module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
};

