import express from 'express'
import { register,login } from '../controllers/auth.controller.js'

const app = express()

app.post('/register', register)
app.post('/login',login)
export default app