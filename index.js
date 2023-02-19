const express = require('express');
const connectDB = require('./db');
const app = express();
const authRoute = require('./routes/auth');
const codeRoute = require('./routes/code');
const questionRoute = require('./routes/question');

const cors = require('cors');

connectDB();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());
app.use('/api/auth', authRoute);
app.use('/api/code', codeRoute);
app.use('/api/question', questionRoute);

app.listen(port, ()=>{
    console.log("Server listening at port " + port);
});