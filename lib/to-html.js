var marked = require('marked')
module.exports = function toHTML (md) {
    marked.setOptions({
        gfm: true,
        pedantic: false,
        sanitize: false,
        highlight: function(code, lang) {
            //if (lang === 'js') {
            //    return javascriptHighlighter(code);
            //}
            return code;
        }
    })
    return marked(md).replace(/<pre>/g,'<pre class=prettyprint>')
}
