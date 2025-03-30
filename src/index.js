import 'dotenv/config';
config({
    path: './.env'
});

import { app } from './app.js';
import { connectMongoDb } from './db/db.js';
import { config } from 'dotenv';


const port = process.env.PORT || 3000;

await connectMongoDb();

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});