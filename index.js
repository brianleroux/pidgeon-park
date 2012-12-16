var fs    = require('fs')
,   path  = require('path')
,   dir   = path.join(__dirname, 'docs', 'en', 'edge', 'cordova')
,   body  = require('./lib/body')
,   toc   = require('./lib/toc')
,   theme = require('./lib/theme')

module.exports = function (dir) {
    body(dir, function (err, body) {
        toc(dir, function (err, toc) {
            theme(body, toc)
        })        
    })
}

if (module === require.main) module.exports(dir)
