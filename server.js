const path = require('path');
const express = require('express');

const app = express();

const publicPath = express.static(path.join(__dirname, 'public'));

app.use(publicPath);

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
