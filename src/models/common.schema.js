import mongoose from "mongoose";

export const VerificationDetailsSchema = mongoose.Schema({
    status: {
        type: Boolean,
        default: false, 
    },
}, {
    timestamps: true  
});