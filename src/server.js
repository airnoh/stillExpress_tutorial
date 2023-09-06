const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const contactRouter = require('./routes/contactRoutes');
const errorHandler = require ('./middleware/errorHandler')

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use('/api/contacts', contactRouter)
// using the  middleware errorHandler
app.use(errorHandler);


app.listen(PORT, ()=>{
    console.log('listening on port ${PORT}');
});