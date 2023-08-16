import dotenv from 'dotenv';
import './db.js';
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';
import categoriesRoutes from './routes/categoriesRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import ordersRoutes from './routes/ordersRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import inventoryRoutes from './routes/inventoryRoutes.js';

dotenv.config();
const app = express();
const corsOptions = {
    origin: (origin, callback) => {
      // Allow requests from any origin
      callback(null, true);
    },
    credentials: true, // Allow credentials (cookies) to be included in the request
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(cookieParser());

app.use('/api', userRoutes);
app.use('/api', categoriesRoutes);
app.use('/api', productsRoutes);
app.use('/api', cartRoutes);
app.use('/api', ordersRoutes);
app.use('/api', inventoryRoutes);
app.use('/api/admin', adminRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
