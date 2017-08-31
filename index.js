const express = require('express');

const app = express();

app.get('/reg_number', function(req, res){

  res.send('Number_Plates');
});

const port = 3001;

app.listen(port, function(){

console.log("web app started on: " + port);
});
