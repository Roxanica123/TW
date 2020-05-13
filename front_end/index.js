var http = require('http')
var serveStatic = require('serve-static')
 
// Serve up public/ftp folder
var serve = serveStatic('./', { 'index': ['pages/main-map/main-map.html'] })
 
// Create server
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, () => {})
})
 
// Listen
server.listen(3000)