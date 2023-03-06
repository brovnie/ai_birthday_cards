import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import BirthdayCard from '../mongodb/models/birthdaycard.js';

dotenv.config();

const router = express.Router();