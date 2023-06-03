import express from 'express';
import { Application } from 'express';

const app: Application = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

export default app;