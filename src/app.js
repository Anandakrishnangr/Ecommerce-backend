import express from 'express';
import { connectMongoose } from './config/mongoConfig.js'
import bodyParser from 'body-parser';
import { createUser } from './controllers/signup.controller.js';
import authRoute from './routes/auth.routes.js'
import { validateRequest } from './middlewares/payloadValidation.middleware.js';
import cors from 'cors'
import { swaggerSpecs } from "./config/swaggerConfig.js";
import swaggerUi from "swagger-ui-express"

const app = express();
connectMongoose()
// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use(validateRequest)
app.get('/', (req, res) => {
    res.send('Welcome to the Demo App!');
});

app.post('/test', createUser)
// app.post('/business',)
app.use("/auth", authRoute)

export default app // Export the app for use in server.js
