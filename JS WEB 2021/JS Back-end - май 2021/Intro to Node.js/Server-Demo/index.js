const http = require('http');

const port = 3000;
const server = http.createServer(requestHandler);

const html = `
<html>
     <body>
        <h1>Hello World!</h1>
        <p>This is my Simple Website</p>
        <a><iframe width="1000" height="333" src="https://www.youtube.com/embed/l9YxTXDiiFY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></a>
     </body>
</html>`;

function requestHandler(req, res){
    console.log('>>> ' + req.method + ' ' + req.url);
    res.write(html);
    res.end();
    
}

server.listen(port, () => console.log('Server is Running on port ' + port));