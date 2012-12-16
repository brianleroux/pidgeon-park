var fs                = require('fs')
,   path              = require('path')
,   dir               = path.join(__dirname, 'docs', 'en', 'edge', 'cordova')
,   createIndex       = require('./create-index')
,   createBody        = require('./create-body')

// syntax highlighting
// publish as seperate a generic node module that accepts path and returns output dir
module.exports = function (dir) {
    return createIndex(dir) + createBody(dir)
}

if (module === require.main) console.log(module.exports(dir))

