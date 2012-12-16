var fs = require('fs')
,   path = require('path')
,   dir = path.join(__dirname, '..', 'docs', 'en', 'edge', 'cordova')

module.exports = function createIndex (dir) {
    var titles = fs.readdirSync(dir)
    ,   index  = titles.map(function(title) {
        return '<li><a href=#' + title + '>' + title + '</a></li>'    
    })
    return '<ul>' + index.join("\n") + '</ul>'
}

if (module === require.main) module.exports(dir)
