const express = require('express');
const port=2118;

var app = express();

app.listen(port,function(err){
    if(err){
        console.log(' there is an error', error);
    }
    console.log('your server is running on port : ',port);
});