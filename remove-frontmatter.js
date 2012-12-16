module.exports = function removeFrontmatter (f) {
    var lines  = f.split("\n")
    ,   length = lines.length
    ,   rest   = lines.slice(18, length).join("\n")
    return rest
} 
