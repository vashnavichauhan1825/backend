const http=require('http');
const port = 5011;

function requestHandler(req,res){
    console.log(req.url);
    if(err){
        console.log('error',err);
        return res.end("sorry dude here is an error !");
    }

    res.end("your server is running on port :", port);
}

var server = http.createServer(requestHandler);


server.listen(port,function(err){
    if(err){
        console.log('error',err);
        return console.log("no dude !");
    }
    console.log("hey come on here you go !");
})