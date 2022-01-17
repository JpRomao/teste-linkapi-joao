import mongoose from 'mongoose';
import config from './mongoDBConfig';

mongoose
  .connect(process.env.MONGODB_CONNECT_URI, config)
  .then(() => {
    console.log('MongoDB connected!');
  })
  .catch(error => {
    console.log('MongoDB Connect Error => ', error);

    throw new Error('error connecting to database');
  });
