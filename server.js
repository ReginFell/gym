const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/bundle.js')));

app.get('/*', function (_, res) { res.sendFile(path.join(__dirname, '/public/index.html')) });

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
