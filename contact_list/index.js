const { name } = require('ejs');
const express = require('express');
const path = require('path');
const port=2118;

var app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

const db = require('./config/mongoose');

const Book =require('./models/book');

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

// -----middle ware 1-----

// app.use(function(req,res,next){
//     req.myBook="i am flying"
//      console.log("it's working babes !");
//     next();
// });

// // -----middle ware 2----

// app.use(function(req,res,next){
   
//     console.log('middle ware 2 is working ! ');
//     next();
// });

app.get('/',function(req,res){

    Book.find({}, function(err,books){
        if(err){
            console.log('error offo !');
            return;
        }
        return res.render('main',{
            title:"MY collection",
            book_list: books,
    });
    })

});

app.get('/profile',function(req,res){

    return res.render('profile',{
        title:'colors all around ! '
    })
})



app.post('/addBook', function(req,res){
    // bookList.push(req.body);
     
     Book.create({
         name:req.body.name,
         author:req.body.author,
         
     }, function(err,newBook){
         if(err){
             console.log('error in creating book !');
             return;
         }
         console.log("%%%%%%%%",newBook);
         res.redirect('back');

     })
});

// app.get('/delete-book/:author', function(req,res){
//     console.log(req.params);
//     let author = req.params.author;
// });

app.get('/delete-book/', function(req,res){
    console.log(req.query);
    let name = req.query.name;
   
    let bookIndex = bookList.findIndex(bookCheck =>bookCheck.name == name);
   
    
    console.log(bookIndex);
    if(bookIndex != -1){
       
        bookList.splice(bookIndex,1);
    }
    return res.redirect('back');
})

app.listen(port,function(err){
    if(err){
        console.log('there is an error', error);
    }
    console.log('your server is running on port : ',port);
});