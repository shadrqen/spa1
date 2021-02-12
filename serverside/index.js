/* Import modules */
const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const cors = require('cors')
const logger = require('morgan')
const fs = require('fs')
/* Initialize the port that the service runs on */
const port = 3000
/* Start the server on the given port */
server.listen(port)
/* Log the error in case of failure to start the server  */
server.on('error', onError)
/* Log the success message in case the server starts listening on
* the given port successfully */
server.on('listening', onListening)
/* Specify the origin of use */
const originNetwork = 'http://localhost:4000'
const corsOptions = {
    origin: originNetwork,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
/* Enabling CORS in the app */
app.use(cors(corsOptions))
/* Create a logs directory in case it does not exist
* The directory holds the application logs */
const dir = './logs'
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
}
/* Create a write stream (in append mode) */
const accessLogStream = fs.createWriteStream(__dirname.concat('/logs/access.log'), { flags: 'a' })
/* Setup the logger using the combined format that takes the following shape
* :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status
* :res[content-length] ":referrer" ":user-agent" */
/* Pass the stream as the options parameter */
app.use(logger('combined', { stream: accessLogStream }))
/* Import the users router that hosts all urls associated to the user */
const usersRouter = require('./routes/user')
/* Append the users route to the application */
app.use('/', usersRouter)
/* Function to log an error in case the server instantiation fails */
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
/* Function to log a success message in case the server instantiation fails */
function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
    /* debug('Listening on ' + bind); */
    console.log('Listening on ' + bind)
}
