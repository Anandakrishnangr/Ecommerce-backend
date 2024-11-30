import Login from "../models/auth.models.js"

export const register = async (req, res, next) => {
    try {
        let { password, email } = req.body
        await Login.create({ password, email })
        res.send(200)
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
    try {
        let { password, email } = req.body
        await Login.isUserAuthenticated(email, password)
        res.send(200)
    } catch (error) {
        console.log(error)
        next(error)
    }
}