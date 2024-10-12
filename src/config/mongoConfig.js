import { default as mongoose } from "mongoose";

export const connectMongoose =async () => {
    return mongoose.connect("mongodb+srv://Anees_Nazeer:dpT5FtJ6x9Xx4Iug@amazonedevelopmentclust.qsql9.mongodb.net/").then((res) => {
        console.log("connected")
    }).catch((err) => {
        console.log("err")
    })
}