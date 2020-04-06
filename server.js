const express = require("express");
const app = express();
const server = require('http').Server(app);

server.listen(8080, function(){
    console.log(`listening on ${server.address().port}`)
})
