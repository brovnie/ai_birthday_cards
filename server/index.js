import express, { application } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import birthdayCardRoutes from './routes/birthdayCardRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/api/v1/birthday_card', birthdayCardRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get("/", async (req, res) => {
    res.send("Hello from backend");
})

const startServer = async () => {

    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => {
            console.log('Server running on post: http://localhost:8080');
    })
    } catch (error) {
        console.log(error);
    }
}

startServer();