var each = require('async-each')

var starters = {
  callml: require('./mock-callml-server'),
  mba: require('svs-mba/test/helpers/mock-server'),
  crm: require('svs-crm/test/helpers/mock-server')
}

module.exports = function (opts, cb) {
  opts = opts || {}
  opts.servers = opts.servers || ['callml', 'mba', 'crm']

  each(opts.servers, function (serverName, cb) {
    var starter = starters[serverName]

    if (!starter) return cb(new Error('Unknown server ' + serverName))

    starter(opts[serverName], function (er, server) {
      if (er) return cb(er)
      console.log(serverName, 'started', server.url)
      cb(null, server)
    })
  }, function(er, servers) {
    if (er) return cb(er)

    // Transform in map server name -> server
    servers = servers.reduce(function (servers, server, i) {
      servers[opts.servers[i]] = server
      return servers
    }, {})

    cb(null, servers)
  });
}