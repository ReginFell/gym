let express = require('express');

app = express();
let port = process.env.PORT || 5000;
app.listen(port);

console.log('server started ' + port);