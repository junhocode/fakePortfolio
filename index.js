const express = require("express");
const app = express();
const PORT = 8888;
const path = require('path');

app.use(express.static("/Users/FAMILY/assignment1"));

app.get("/", (req, res) => {
  res.sendFile("/Users/FAMILY/assignment1/main.html");
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});

app.get('/so', function(req, res){
    const soPath = path.join(__dirname,'so.html')
    res.sendFile(soPath);
})

app.get('/rs', function(req, res){
    const rsPath = path.join(__dirname,'rs.html')
    res.sendFile(rsPath);
})

app.get('/rd', function(req, res){
    const rdPath = path.join(__dirname,'rd.html')
    res.sendFile(rdPath);
})