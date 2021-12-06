const express = require('express');
const path = require('path');
const port=2118;

var app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    return res.render('main');
});

app.listen(port,function(err){
    if(err){
        console.log(' there is an error', error);
    }
    console.log('your server is running on port : ',port);
});