import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import BirthdayCard from '../mongodb/models/birthdaycard.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

// GET 
router.route('/').get(async (req,res) => {
      try {
        const birthdayCards = await BirthdayCard.find({}); 
     
        res.status(200).json({ success: true, data: birthdayCards });
      } catch (error) {
        res.status(500).json({ success: true, message: error });
      }
})
// POST
router.route('/').post(async(req, res) => {
    try {
        const { name, celebraitsName, wishes, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo);
        
        const newBirthdayCard = await BirthdayCard.create({
            name,
            celebraitsName,
            wishes,
            photo: photoUrl.url
        })

        res.status(201).json({ success: true, data: newBirthdayCard });
    } catch (error) {
        res.status(500).json({ success: false, message: error})
    }
});
export default router;