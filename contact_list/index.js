const express = require('express');
const path = require('path');
const port=2118;

var app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

var bookList=[
    {
        name:"think like a monk",
        author:'jay shetty'
    },
    {
        name:'think and grow rich',
        author:'napolean hill'
    },
    {
        name:'the subtle art of not giving a f*ck',
        author:'mark mansion'
    },
]

app.get('/',function(req,res){
    return res.render('main',{
        title:"MY collection",
        book_list:bookList
});
});

app.get('/profile',function(req,res){
    return res.render('profile',{
        title:'colors all around !'
      
    })
})


app.post('/addBook', function(req,res){
    return res.redirect('/profile');
})
app.listen(port,function(err){
    if(err){
        console.log(' there is an error', error);
    }
    console.log('your server is running on port : ',port);
});