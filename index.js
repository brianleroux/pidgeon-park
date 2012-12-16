var fs                = require('fs')
,   path              = require('path')
,   dir               = path.join(__dirname, '..', 'docs', 'en', 'edge', 'cordova')
,   walk              = require('./walk')
,   removeFrontmatter = require('./remove-frontmatter')
,   toHTML            = require('./to-html')
,   createIndex       = require('./create-index')

// linking in index from header section to impl 
// syntax highlighting
// publish as seperate a generic node module that accepts path and returns output dir

walk(dir, function (err, markdownFiles) {
    if (err) throw err
    
    // concat the md
    var md = markdownFiles.reduce(function (memo, f) {
        // log the file title
        // console.log(_.last(f.split('/')).replace('.md',''))
        // attempt to remove the frontmatter
        return memo += removeFrontmatter(fs.readFileSync(f, 'utf8'))
    })

    console.log(createIndex(dir) + toHTML(md))
})

