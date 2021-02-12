const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const cors = require('cors')
const logger = require('morgan')
const fs = require('fs')
const port = 3000
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
const originNetwork = 'http://localhost:4000'
const corsOptions = {
    origin: originNetwork,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
/* Enabling CORS in the app */
app.use(cors(corsOptions))
// app.use(logger('dev'))
// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(__dirname.concat('/logs/access.log'), { flags: 'a' })
// setup the logger
app.use(logger('combined', { stream: accessLogStream }))
const usersRouter = require('./routes/user')
app.use('/', usersRouter)
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
    /* debug('Listening on ' + bind); */
    console.log('Listening on ' + bind)
}
