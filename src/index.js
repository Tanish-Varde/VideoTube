import dotenv from 'dotenv';
import { app } from './app.js';
import { connectMongoDb } from './db/db.js';

dotenv.config({
    path: "./.env"
});

const port = process.env.PORT || 3000;

await connectMongoDb();

app.get('/', (req, res) => {
    console.log('Fetching data from Database ...');
    setTimeout(() => {
        try {
            const num = Math.floor(Math.random() * 2);
            if (num == 1) {
                console.log('Data fetched successfully!');
                res.send('Hello World');
            } else {
                throw new Error('Failed to fetch data from Database!');
            }
        } catch (error) {
            console.log(`${error}`);
            res.status(500).send('Internal Server Error');
        }
    }, 2000);
});

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});