var toHTML            = require('./to-html')
,   path              = require('path')
,   fs                = require('fs')
,   base              = path.join(__dirname, 'docs', 'en', 'edge')
,   dir               = path.join(__dirname, 'docs', 'en', 'edge', 'cordova')
,   config            = require(path.join(__dirname, 'docs', 'en', 'edge', 'config.json'))
,   walk              = require('./walk')
,   removeFrontmatter = require('./remove-frontmatter')
,   _                 = require('underscore')

module.exports = function (dir, callback) {

    var markdownFiles = []
    
    Object.keys(config.merge).forEach(function (concatFile) {
        config.merge[concatFile].forEach(function (file) {
            markdownFiles.push(path.join(base, file))
        })
    })

    var md = markdownFiles.map(function (f) {
        // linking in index from header section to impl 
        var title = _.last(f.split('/')).replace('.md','')
        ,   tmpl  = '<h1 id=' + title + '>' + title + '</h1>'
        return tmpl + removeFrontmatter(fs.readFileSync(f, 'utf8'))
    })

    callback(null, toHTML(md.join("\n")))
}
