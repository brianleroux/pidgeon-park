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

    var out = '<h1 id=top>Cordova/Docs</h1>'
    // this parses the config.json file in cordova folder
    // it dictates ordering for the api docs
    Object.keys(config.merge).forEach(function (concatFile) {
        // grab the section title and concat
        var title = _.last(concatFile.split('/')).replace('.md', '')
        ,   tmpl  = '<h1 id=' + title + '>' + title + '</h1>'
        out += '<ul>' + tmpl
        // loop thru sub files building sub toc
        config.merge[concatFile].forEach(function (file) {
            // markdownFiles.push(path.join(base, file))
            var subsection = _.last(file.split('/')).replace('.md', '')
            out += '<li><a href=#' + subsection + '>' + subsection + '</a></li>'
        })
        out += '</ul>'
        // loop thru again adding actual sub content
        config.merge[concatFile].forEach(function (file) {
            // linking in index from header section to impl 
            var subsection = _.last(file.split('/')).replace('.md', '')
            out += '<h1 id=' + subsection + '>' + subsection + '</h1>'
            out += toHTML(removeFrontmatter(fs.readFileSync(path.join(base, file), 'utf8')))
            out += '<a class=top href=#top>Back to top.</a>'
        })
    })

    callback(null, out)
}
