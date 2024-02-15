var http = require('http');
var fs = require('fs');
const { time } = require('console');

http.createServer(function(req, res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
   // var timestamp = new Date().toISOString();
    var datestamp = new Date().toDateString();
   // var log = `${timestamp} - Requested URL: ${path}\n`;
    var logEntry = `${datestamp} - Requested URL: ${path}\n`;

    fs.appendFile('log.txt', new Date().toTimeString(), (err) => {
        if(err){
            console.log('Error writing in log file',err);
        }
    })


    switch(path){
        case '':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("Welcome to the Barterx");
            break;
        
        case '/products':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("Here are the products for sale in Barterx");
            break;
        
        case '/login':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("Login to Barterx");
            break;
        
        case '/signup':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("Signup to Barterx");
            break;
        
        case '/profile':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("Trader Profile");
            break;
        
        case '/cart':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("Your Shopping Cart is Here");
            break;
        
        case '/checkout':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("Lets start shipping");
            break;
        
        case '/orders':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("Your orders are here");
            break;
        
        case '/categories':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("Browse Categories");
            break;

        case '/chat':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("Your chat with fellow traders");
            break;
            
        case '/contact':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("Contact us at");
        
        case '/about':
            res.writeHead(200,{'Content-Type':'text/plain'});
            res.end("The mordern approach to trading our commodities");
            break;

        default:
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.end("Page Not Found");
            break;
    }
}).listen(8000);
console.log("Server is running at http://localhost:8000")