let express = require('express');
let app = express();


app.get('/', function (req, res) {
  console.log('Current path /');
  res.sendFile('index.html', {root: '../assets'});
})

console.log('App listen on port 3000');
app.listen(3000);

