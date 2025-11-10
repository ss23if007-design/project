const adminMiddleware = async (req, res, next ) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized. No user in request." });
        }
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Forbidden. You are not authorized to access this resource." });
        }
        // user is admin — allow request to continue
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = adminMiddleware;