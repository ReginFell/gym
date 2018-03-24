const path = require('path');
const express = require('express');

const app = express();

const publicPath = express.static(path.join(__dirname, 'public'));

app.use(publicPath);


app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'public', ''));
 });

let port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Listening on port ' + port);
});
