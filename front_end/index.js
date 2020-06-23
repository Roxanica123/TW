var http = require('http')
const forward = require('http-forward')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic('./', { 'index': ['pages/main-map/main-map.html'] })

// Create server
var server = http.createServer(function onRequest(req, res) {
  req.forward = { target: 'http://localhost:5000' }
  if (req.url.includes('.css') ||
    req.url.includes('.js') ||
    req.url.includes('.html') ||
    req.url.includes('.png') ||
    req.url.includes('.ico') ||
    req.url === "/") {
    serve(req, res, () => { })
  }
  else {
    forward(req, res)
  }
})

// Listen
server.listen(3000)