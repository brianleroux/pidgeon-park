var fs                = require('fs')
,   path              = require('path')
,   dir               = path.join(__dirname, 'docs', 'en', 'edge', 'cordova')
,   createIndex       = require('./create-index')
,   createBody        = require('./create-body')

// syntax highlighting
// publish as seperate a generic node module that accepts path and returns output dir
module.exports = function (dir, callback) {
    createBody(dir, function(err, body) {
        createIndex(dir, function(err, index) {
            callback(null, index + body)
        })
    })
}

if (module === require.main) {
    module.exports(dir, function(err, data) {
        console.log(data)
    })
}
