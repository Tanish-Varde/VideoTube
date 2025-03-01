import dotenv from 'dotenv';
import { app } from './app.js';
import { connectMongoDb } from './db/db.js';

dotenv.config({
    path: "./.env"
});

const port = process.env.PORT || 3000;

await connectMongoDb();

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});