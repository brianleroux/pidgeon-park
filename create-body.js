var toHTML            = require('./to-html')
,   path              = require('path')
,   fs                = require('fs')
,   dir               = path.join(__dirname, 'docs', 'en', 'edge', 'cordova')
,   walk              = require('./walk')
,   removeFrontmatter = require('./remove-frontmatter')

module.exports = function createBody (dir) {
    walk(dir, function (err, markdownFiles) {
        if (err) throw err
        // concat the md
        var md = markdownFiles.map(function (f) {
            // log the file title
            // console.log(_.last(f.split('/')).replace('.md',''))
            // linking in index from header section to impl 
            return removeFrontmatter(fs.readFileSync(f, 'utf8'))
        })

        toHTML(md.join("\n"))
    })
}
