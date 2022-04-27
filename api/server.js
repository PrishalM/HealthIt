//setup requires:
const express = require('express');
const cors = require('cors');
const server = express();

//setup uses:
server.use(cors());
server.use(express.json());

server.use("/", (req, res, next) => {
    console.log(req.method, req.originalUrl);
    next();
})

//setup routes for habits and users:
const habitRoutes = require('./routes/habits')
const userRoutes = require('./routes/users')
server.use('/habits', habitRoutes)
server.use('/users', userRoutes)

//setup for authorisation:
const authRoutes = require('./routes/auth')
server.use('/auth', authRoutes)

//message on port 3000 upon successful server running:
server.get('/', (req, res) => res.send('Welcome to the HealthIt habit tracker!'))


//export the server:
module.exports = server