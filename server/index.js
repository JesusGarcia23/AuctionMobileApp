require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require("socket.io");

require('./config/database/db.setup');
let app = express(), io;
const server = http.createServer(app)
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)
const routes = require('./routes/routes');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname , 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
    secret: 'auction everything',
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: 5000
    })
}))

// PASSPORT COMES HERE
require('./config/passport/passport.setup')(app)

app.use(cors({
    credentials: true,
    origin: ["http://localhost:3000", "exp://192.168.1.75:19006", "http://192.168.1.75:3000", "exp://192.168.125.250:19000", 'http://192.168.1.20:3000', 'exp://192.168.1.20:3000']
}))
app.use(routes)


// SOCKET HERE
io = socketIo(server)
io.on('connection', socket => {
    console.log('new conection established')


    socket.on('disconnect', () =>{
        console.log('an user disconnected')
    })

})

server.listen(5000, () => {
    console.log("CONNECTED TO PORT 5000!");

//     var minutes = 1, the_interval = minutes * 60 * 1000;
// setInterval(function() {
//   console.log("I am doing my 5 minutes check");
//   // do your stuff here
// }, the_interval);
})


app.use((req, res, next) => {
    req.io = io;
    return next()
})