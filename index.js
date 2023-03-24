const http=require('http');

const fs=require('fs')
const fileContent =fs.readFileSync('index.html')


http.createServer(function(request, response){
    
    response.writeHead(200, {'Content-type':'index.html'});
    
    response.end(fileContent);
}).listen(5000);

console.log('Listening on port 5000...');