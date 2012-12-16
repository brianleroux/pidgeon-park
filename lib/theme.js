var fs   = require('fs')
,   path = require('path')
,   base = path.join(__dirname, '..', 'output')
,   tmpl = fs.readFileSync(path.join(base, 'default', 'index.html'), 'utf8')

module.exports = function theme (body, toc, callback) {
    var newf = tmpl.replace('$body', body).replace('$nav', toc)
    fs.writeFileSync(path.join(base, 'default', 'index.html'), newf)
}

/*
 TODO loop through and generate translations
var languages = fs.readdirSync(base)
console.log(languages)
*/
