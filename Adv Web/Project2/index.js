var path = require('path');
const express = require('express');
const app = express();

app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/second', function(req, res) {
    res.sendFile(path.join(__dirname + '/second.html'));
});
app.get('/third', function(req, res) {
    res.sendFile(path.join(__dirname + '/third.html'));
});
app.get('/fourth', function(req, res) {
    res.sendFile(path.join(__dirname + '/fourth.html'));
});
app.get('/five', function(req, res) {
    res.sendFile(path.join(__dirname + '/five.html'));
});
app.use('/fdone', express.static(path.join(__dirname, 'fileDirectoryOne')));
app.use('/fdtwo', express.static(path.join(__dirname, 'fileDirectoryTwo')));

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});
