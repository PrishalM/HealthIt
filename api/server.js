//setup requires:
const express = require('express');
const cors = require('cors');
const server = express();

//setup uses:
server.use(cors());
server.use(express.json());

//setup routes for habits and users:
const habitsRoutes = require('./routes/habits')
const usersRoutes = require('./routes/users')
server.use('/habits', habitsRoutes)
server.use('/users', usersRoutes)

//setup for authorisation:


//message on port 3000 upon successful server running:
server.get('/', (req, res) => res.send('Welcome to the library'))


//export the server:
module.exports = server