import swaggerJsdoc from 'swagger-jsdoc'
import { fileURLToPath } from 'url';
import packageDetails from '../../package.json' assert {type: 'json'}
import path from 'path';
const PORT = process.env.PORT
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ecom API with Swagger",
            version: packageDetails.version,
            description: "A simple CRUD API application made with Express and documented with Swagger",
        },
        servers: [
            {
                url: `http://localhost:${PORT}`, // Replace with your server URL
            },
        ],
    },
    apis: [path.join(__dirname, "../routes/*.js")],
};

export const swaggerSpecs = swaggerJsdoc(options);


