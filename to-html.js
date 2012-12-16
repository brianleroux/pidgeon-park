var marked = require('marked')
module.exports = function toHTML (md) {
    marked.setOptions({
        gfm: true,
        pedantic: false,
        sanitize: true,
        highlight: function(code, lang) {
            //if (lang === 'js') {
            //    return javascriptHighlighter(code);
            //}
            return code;
        }
    })
    return marked(md)
}
