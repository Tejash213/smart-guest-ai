import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import spotRoutes from './routes/spotRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/spots', spotRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`API running on ${PORT}`);
    });
  })
  .catch(err => console.error(err));
