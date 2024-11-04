
import mongoose from 'mongoose';

const studioSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    pricing: { type: String, required: true }, 
    availability: { type: String, required: true }, 
    contactInfo: { type: String, required: true }, 
    category: { type: String, required: true }, 
    rating: { type: Number, min: 0, max: 5 },
    image: { type: String }, 
}, { timestamps: true });

const Studio = mongoose.model('Studio', studioSchema);

export default Studio;
