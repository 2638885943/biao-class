// 该模块用于

var el = require('./element')
var sd = require('./send')
var re = require('./render')
var keyword
var page =1

function search(){
    keyword = el.search_input.value
    var url ='https://api.github.com/search/users?q='+keyword
    sd.send(url,re.render);
    console.log(keyword)
}

function search_next(){
    page++
    var url ='https://api.github.com/search/users?q='+keyword+page
    sd.send(url,re.render);
}
module.exports = {
    search:search,
    search_next:search_next
}