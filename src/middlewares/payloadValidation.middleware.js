import { schemaLookup } from "../validations/validations.schema.js";

export const validateRequest = (req, res, next) => {
    const { method, path } = req;
    console.log(path, method)
    
    const schema = schemaLookup[`${method}:${path}`] || Object.keys(schemaLookup).find(key => {
        const regex = new RegExp(`^${key.split(':')[1].replace(':id', '\\d+')}$`);
        return regex.test(path) && key.startsWith(method);
    });
    if (schema) {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
    }
    next(); // Proceed to the next middleware or route handler
};

