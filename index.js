require('dotenv').config();
const express = require("express");
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8888;
const STATIC_PATH = process.env.STATIC_PATH;
const MAIN_HTML_PATH = process.env.MAIN_HTML_PATH;
const SO_HTML_PATH = process.env.SO_HTML_PATH;
const RS_HTML_PATH = process.env.RS_HTML_PATH;
const RD_HTML_PATH = process.env.RD_HTML_PATH;

app.use(express.static(STATIC_PATH));

app.get("/", (req, res) => {
  res.sendFile(MAIN_HTML_PATH);
});

app.get('/so', function(req, res){
    res.sendFile(path.join(STATIC_PATH, 'so.html')); 
});

app.get('/rs', function(req, res){
    res.sendFile(path.join(STATIC_PATH, 'rs.html'));  
});

app.get('/rd', function(req, res){
    res.sendFile(path.join(STATIC_PATH, 'rd.html')); 
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
