require('dotenv').config();
require('./db');

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));