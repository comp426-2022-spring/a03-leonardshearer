const express = require('express')
const app = express()
const minimist = require('minimist')
const args = minimist(process.argv.slice(2))


const HTTP_PORT = args['port'] || 5000
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', HTTP_PORT))
});

app.get('/app/', (req, res) => {
    res.statusCode = 200;
    res.statusMessage = 'OK';
    res.writeHead(res.statusCode, { 'Content-Type': 'text/plain' });
    res.status(200).send('OK')
    res.end(res.statusCode + ' ' + res.statusMessage)
});

app.use(function (req, res) {
    res.status(404).end('404 NOT FOUND')
    res.type('text/plain')
});

