const express = require('express');
var app = express();
var bodyParser = require('body-parser');

const connectDB = require('./config/db');

//connect database
connectDB();
//Init middleware
app.use(bodyParser.json({ extended: false }));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => console.log('Server started on Port' + PORT));
