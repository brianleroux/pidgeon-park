var fs = require('fs')
,   path = require('path')
,   dir = path.join(__dirname, 'docs', 'en', 'edge', 'cordova')

module.exports = function createIndex (dir, callback) {
    var titles = fs.readdirSync(dir)
    ,   index  = titles.map(function(title) {
                    return '<li><a href=#' + title + '>' + title + '</a></li>'
                 })
    // wrap it up and slap it out
    callback(null, index.join("\n") + '</ul>')
}

if (module === require.main) module.exports(dir)
