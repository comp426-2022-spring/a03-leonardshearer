const express = require('express')
const app = express()
const minimist = require('minimist')
const args = minimist(process.argv.slice(2))


const HTTP_PORT = args['port'] || 5000
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', HTTP_PORT))
});

app.use(function (req, res) {
    res.status(404).send('404 NOT FOUND')
});

app.get('/app/', (req, res) => {
    res.statusCode = 200;
    res.sendStatus(res.statusCode)
    res.statusMessage = 'OK';
    res.send(res.statusMessage)
    res.writeHead(res.statusCode, { 'Content-Type': 'text/plain' });
    res.end(res.statusCode + ' ' + res.statusMessage)
});

