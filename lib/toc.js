var fs      = require('fs')
,   path    = require('path')
,   dir     = path.join(__dirname, '..', 'docs', 'en', 'edge', 'cordova')
,   capital = require('./capital')

module.exports = function createIndex (dir, callback) {
    var titles = fs.readdirSync(dir)
    ,   index  = titles.map(function(title) {
                    return '<li><a href=#' + title + '>' + capital(title) + '</a></li>'
                 })
    // wrap it up and slap it out
    callback(null, '<h1 id=api>API Reference</h1><ul>' + index.join("\n") + '</ul>')
}

if (module === require.main) {
    module.exports(dir, function(err, data) {
        console.log(data)   
    })
}
