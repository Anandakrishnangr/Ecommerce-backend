import mongoose from "mongoose"
import user from "../models/user.models.js";


export const createUser = async(req, res) => {
    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        // Create a new address
        const newUser = await user.create([{
           firstName:"ananda",
           lastName:"krishnan",
           gender:"male"
        }], { session });

        // Commit the transaction
        throw Error
        await session.commitTransaction();
        console.log('Transaction committed:', newUser);
    } catch (error) {
        // If an error occurs, abort the transaction
        await session.abortTransaction();
        console.error('Transaction aborted due to error:', error);
    } finally {
        session.endSession();
    }


}