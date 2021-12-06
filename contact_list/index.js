const express = require('express');
const port=2118;

var app = express();

app.get('/about',function(req,res){
    console.log(req.url);
    res.send('<h1 style="background-color:grey">its working babes')
});

app.listen(port,function(err){
    if(err){
        console.log(' there is an error', error);
    }
    console.log('your server is running on port : ',port);
});