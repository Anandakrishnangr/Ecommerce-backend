import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        trim:true
    },
    LastUpdatedAt:{
        type: Date,
        default: Date.now, 
    },
    createdAt: {
        type: Date,
        default: Date.now, 
    },
    gender: {
        type: String,
        enum: ['male', 'female'], // Enum values for gender
        required: true,
    },
})


const user = mongoose.model('customerUser', userSchema);
export default user;