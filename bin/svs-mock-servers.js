#!/usr/bin/env node

var fs = require('fs')
var argv = require('minimist')(process.argv.slice(2))
var startMockServers = require('../')

if (argv.version || argv.v) {
  return console.log(require('../package.json').version)
}

if (argv.help || argv.usage || argv.h || argv.u) {
  return fs.createReadStream(__dirname + '/usage.txt').pipe(process.stdout)
}

var servers = []

servers = servers.concat(argv.callml === false ? [] : 'callml')
servers = servers.concat(argv.mba === false ? [] : 'mba')
servers = servers.concat(argv.crm === false ? [] : 'crm')

var opts = {
  servers: servers,
  callml: {
    port: argv['callml-port'],
    fail: argv['callml-fail']
  },
  mba: {
    port: argv['mba-port']
  },
  crm: {
    port: argv['crm-port'],
    fail: argv['crm-fail']
  }
}

startMockServers(opts, function (er) {
  if (er) throw er
  console.log('Ready!')
})