const validate = (schema) => async(req, res, next) => {
    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const message = error.message || "Invalid request data";
        const error = {
            status: 400,
            message,
            extraDetails,
        }
       
       next(error);
    }

};

module.exports = validate;
