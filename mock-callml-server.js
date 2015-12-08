var http = require('http')

module.exports = function (opts, cb) {
  if (!cb) {
    cb = opts
    opts = {}
  }

  opts = opts || {}
  opts.port = opts.port || 3050
  opts.fail = opts.fail || false

  var server = http.createServer(function (req, res) {
    var appverified = opts.fail ? 'No' : 'Yes'
    var resp = '<?xml version="1.0" encoding="utf-8"?>' +
               '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' + 
                 '<soap:Body>' +
                   '<Search06bResponse xmlns="urn:callcredit.co.uk/soap:callmlapi6">' +
                     '<Search06bResult xmlns="urn:callcredit.co.uk/soap:callmlapi6">' +
                       '<results>' +
                         '<appverified xmlns="urn:callcredit.co.uk/soap:callmlapi6">' + appverified + '</appverified>' +
                       '</results>' +
                     '</Search06bResult>' +
                   '</Search06bResponse>' +
                 '</soap:Body>' +
               '</soap:Envelope>'
    res.write(resp)
    res.end()
  })

  server.listen(opts.port, function (er) {
    if (er) return cb(er)
    server.url = 'http://localhost:' + opts.port
    cb(null, server)
  })
}