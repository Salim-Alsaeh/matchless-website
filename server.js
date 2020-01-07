const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const connectDb = require('./config/db');

//Load env vars
dotenv.config({
    path: './config/config.env'
});

const app = express();


//Route Files
const users = require('./routes/users');
const auth = require('./routes/auth');
const categories = require('./routes/categories');
const items = require('./routes/items');

//json body parser
app.use(express.json());

//cookieParser
app.use(cookieParser());

//connectDb
connectDb();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

const PORT = process.env.PORT || 5000;

//mount routes
app.use('/api/v1/users', users);
app.use('/api/v1/auth', auth);
app.use('/api/v1/categories', categories)
app.use('/api/v1/items', items)

const server = app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`));

//handle unhandled promise rejections
process.on('unhandledrejection', (err, promise) => {
    console.log(`Error ${err.message}`);
    //close Server and exit
    server.close(() => process.exit(1))
});