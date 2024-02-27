import express from 'express';
import * as dotend from 'dotenv';
import cors from 'cors';
import connectDb from './mongodb/connect.js';

import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


//pulls environment variables from .env file
dotend.config();


const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));


app.get('/', async(req, res) => {
    res.send('Hello from Dall E Clones')
})

//API endpoints for client to use
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

const startServer = async() => {

    try {
        connectDb(process.env.MONGODB_URL)
        app.listen(8080, () => console.log('server has started on http://localhost:8080'))
    } catch (error) {
        console.log(error)
    }

    
}

startServer();