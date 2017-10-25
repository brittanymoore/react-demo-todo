import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';
import axios from 'axios';

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router)
server.listen(3001, () => {
    console.log('JSON server is running');
});

const app = express();
const compiler = webpack(config);

app.use(express.static(__dirname + '/dev'));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dev/index.html'));
});

app.listen(3000, () => {
    console.log('app is running');
});
