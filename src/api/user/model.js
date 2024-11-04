import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    profilePic: { type: String },  
    password: { type: String, required: true },
    refreshToken: { type: String },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
