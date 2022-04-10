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

app.get('/app/flip', (req, res) => {
    res.type('application/json')
    res.status(200).json({ 'flip': coin.coinFlip() })
});

app.get('/app/flips/:number', (req, res) => {
    const raw = coin.coinFlips(parseInt(req.params.number))
    const summary = coin.countFlips(raw)
    res.type('application/json')
    res.status(200).json({ 'raw': raw, 'summary': summary })
});

app.get('/app/flip/call/heads', (req, res) => {
    res.type('application/json')
    res.status(200).json(coin.flipACoin('heads'))
});

app.get('/app/flip/call/tails', (req, res) => {
    res.type('application/json')
    res.status(200).json(coin.flipACoin('tails'))
});

app.use(function (req, res) {
    res.type('text/plain')
    res.status(200).status(404).end('404 NOT FOUND')
});

