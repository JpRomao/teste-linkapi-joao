import 'dotenv/config';

import './database';

import express from 'express';
import cors from 'cors';

import insertAllOrderedOnDay from './cronjobs';
import router from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

insertAllOrderedOnDay().start();

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Server listening on port ${process.env.SERVER_PORT}!`)
);
