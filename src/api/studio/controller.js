import Studio from './model.js';

export const getStudios = async (req, res) => {
    const { location, category, priceRange, rating } = req.query;
    try {
        const filter = {};
        if (location) filter.location = location;
        if (category) filter.category = category;
        if (priceRange) {
            const [min, max] = priceRange.split('-');
            filter.pricing = { $gte: min, $lte: max };
        }
        if (rating) filter.rating = { $gte: rating };

        const studios = await Studio.find(filter);
        res.status(200).json(studios);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching studios', error });
    }
};


export const addStudio = async (req, res) => {
    const {
        name,
        location,
        description,
        pricing,
        startTime,  
        endTime,    
        contactInfo,
        category
    } = req.body;

    const image = req.file ? req.file.path : null;

    try {
        const newStudio = new Studio({
            name,
            location,
            description,
            pricing,
            startTime, 
            endTime,   
            contactInfo,
            category,
            image,
        });

        await newStudio.save();
        res.status(201).json(newStudio);
    } catch (error) {
        res.status(400).json({ message: 'Error adding studio', error });
    }
};



export const getStudioById = async (req, res) => {
    const { id } = req.params;
    try {
        const studio = await Studio.findById(id);
        if (!studio) {
            return res.status(404).json({ message: 'Studio not found' });
        }
        res.status(200).json(studio);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching studio details', error });
    }
};

export const updateStudio = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedStudio = await Studio.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedStudio) {
            return res.status(404).json({ message: 'Studio not found' });
        }
        res.status(200).json(updatedStudio);
    } catch (error) {
        res.status(400).json({ message: 'Error updating studio', error });
    }
};
