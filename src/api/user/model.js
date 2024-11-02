// src/api/user/model.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    refreshToken: { type: String },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;