import mongoose from "mongoose";
import { VerificationDetailsSchema } from "./common.schema.js";
import { comparePassword, hashPassword } from "../library/auth.lib.js";
import AppError from "../library/error.lib.js";

const LoginSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'Email is required'],
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
        lowercase: true,
    },
    phone: {
        type: Number,
        trim: true,
        required: false,
        min: 10
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required'],
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    email_verification_Details: VerificationDetailsSchema,
    phone_verification_Details: VerificationDetailsSchema
}, {
    timestamps: true
});

LoginSchema.pre('save', async function (next) {
    this.password = await hashPassword(this.password)
    next();
});

LoginSchema.post(['find', 'findOne'], async function (docs) {
    const _includePassword = this.options.includePassword
    if (_includePassword) {
        return docs
    }
    if (Array.isArray(docs)) {
        docs.forEach(doc => {
            doc.password = undefined; // Remove password from each document
        });
    } else if (docs) {
        docs.password = undefined; // Remove password from the single document
    }
});

LoginSchema.statics.isUserAuthenticated = async function (email, password) {
    let user = await this.findOne({ email }).setOptions({ includePassword: true });
    if (!user) {
        throw new AppError({ message: 'User Not Found !', statusCode: 401 })
    }
    const isMatch = await comparePassword(password, user.password)
    if (!isMatch) throw new AppError({ message: 'Incorrect password', statusCode: 400 })
    return isMatch
}

const Login = mongoose.model("Loginsf", LoginSchema);
export default Login;
