import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './config/webpack.dev.js';
import opn from 'opn';

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

app.use(express.static(path.resolve(__dirname, './dev')));
app.use(webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: '/'
}));
app.use(webpackHotMiddleware(compiler));
app.get('*', (req, res) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, function(err, result) {
        if (err) {
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

app.listen(3000, () => {
    console.log('app is running');
    opn('http://localhost:3000');
});
