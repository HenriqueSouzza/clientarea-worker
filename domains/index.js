var http = require('http');

http.createServer(async (request, response) => {

  if (request.method !== "GET") {
    return;
  }

  const headers = {
    'Access-Control-Allow-Origin': 'http://localhost:5100',
    'Access-Control-Allow-Methods': 'OPTIONS, GET',
  };

  response.writeHead(200, headers);
  response.end('<span>Tela de site</span>');
}).listen(3001, '127.0.0.1');