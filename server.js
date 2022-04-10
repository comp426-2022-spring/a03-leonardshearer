import * as coin from './modules/coin.mjs'
import express from 'express'
import minimist from 'minimist'

const app = express()
const args = minimist(process.argv.slice(2))

const HTTP_PORT = args['port'] || 5000
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', HTTP_PORT))
});

app.get('/app', (req, res) => {
    res.type('text/plain')
    res.status(200).end('OK')
});

app.get('/app/flips/:number', (req, res) => {
    const flips = manyflips(req.params.number)
    //Other
    //expressions
    //go
    //here
});

app.use(function (req, res) {
    res.status(404).end('404 NOT FOUND')
    res.type('text/plain')
});

