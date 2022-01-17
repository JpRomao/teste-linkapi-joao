import { ConnectOptions } from 'mongoose';

const options: ConnectOptions = {
  dbName: process.env.MONGODB_DB_NAME,
};

export default options;
