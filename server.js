const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);

const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/bundle.js')));

app.get('/*', function (_, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

let port = process.env.PORT || 5002;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
