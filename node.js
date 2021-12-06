// console.log('hello vashnavi')

// function add(a,b){
//     return a + b;
// }

// console.log(add(2,7));
// var args =process.argv.slice(2)

// console.log(" the output is : "+add(parseInt(args[0]),parseInt(args[1])));

////////////////////////////////////////////////////////////////////////////////

// ---------*create my first server*---------------------

const http=require('http');
const port=2118;
const fs = require('fs');

function requestHandler(req , res ){
    console.log(req.url);
    res.writeHeader(200 ,{'content-type':'text/html'});
      
   
        
        let filePath ;

        switch (req.url){
           case '/' :
               filePath='./node.html';
               break;
            case '/profile':
                filePath ='./profile.html';
                break;


             default : 
                filePath ='./404.html';
                break;
              
        }
        fs.readFile(filePath,function(error,data){
            if(error){
                console.log("error",error);
                return res.end('<h1>oops !</h1>');
            }
            return res.end(data);
    })

    // res.end('<i><h1 style="color:red">gotcha</h1><i>');
}

var server = http.createServer(requestHandler);

server.listen(port,function(error){
    if(error){
          console.log(error);
          return;
    }

   console.log('server is up ! :' , port );
})
