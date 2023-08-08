require('dotenv').config();
require('./db');

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/userRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');
const productsRoutes = require('./routes/productsRoutes');
const cartRoutes = require('./routes/cartRoutes');
const ordersRoutes = require('./routes/ordersRoutes');

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));