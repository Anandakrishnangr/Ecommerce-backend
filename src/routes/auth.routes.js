import express from 'express';
import { register, login } from '../controllers/auth.controller.js';

const router = express.Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     responses:
 *       200:
 *         description: User registered successfully.
 *       400:
 *         description: Bad request
 */
router.post('/register', register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     responses:
 *       200:
 *         description: User logged in successfully.
 */
router.post('/login', login);

export default router;
