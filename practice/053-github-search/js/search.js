// 该模块用于
var history = require('./util/history')
var el = require('./element')
var sd = require('./util/send')
var re = require('./render')
var keyword
var page =1

//搜索函数
function search(){
    
    keyword = el.search_input.value
    if(keyword =='' || !keyword)
   {
    alert('尔康 快住手 你要搜个撒子哦');
    return;
   }
    var url ='https://api.github.com/search/users?q='+keyword

    // history.clear();
//    用url（地址）和re.render（渲染函数）当做传参   发送数据
    sd.send(url,re.render);
 
    console.log(keyword)
   
//    添加一条历史记录
    history.add(keyword);
   }
   //   将keyword（关键字也就是搜索框中的内容）推到历史记录表单中


function search_next(){
    page++
    var url ='https://api.github.com/search/users?q='+keyword+page
    sd.send(url,re.render);
}
module.exports = {
    search:search,
    search_next:search_next
}