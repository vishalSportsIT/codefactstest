// src/api/studio/model.js

import mongoose from 'mongoose';

const studioSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    pricing: { type: Number, required: true },
    availability: { type: Boolean, default: true },
    contactInfo: {
        phone: { type: String, required: true },
        email: { type: String, required: true },
    },
    category: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5 },
    image: { type: String }, // Added field for storing image path
}, { timestamps: true });

const Studio = mongoose.model('Studio', studioSchema);

export default Studio;
