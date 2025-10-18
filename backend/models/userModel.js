import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: String,
    userName: String,
    phoneNumber: Number,
    password: String
})

export const user = mongoose.model("User", userSchema)