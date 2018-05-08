
// 该模块用于绑定事件并暴露出去
var el = require('./element');
// 获取element.js中暴露出来的信息并赋值给变量el
var se = require('./search')
// 获取search.js中暴露出来的信息并赋值给变量se

// 表单提交函数
function submit() {
  el.search_form.addEventListener('submit', function (e) {
    e.preventDefault();
   se.search();
   
   
  });
}


// 加载更多函数
function next() {
  el.next.addEventListener('click', function () {
   se.search_next();
  });
}



function events(){
    submit();
    next();
 

}

// 将定义好的函数本身暴露出去
module.exports={
  submit:submit,
  next:next,
  events:events
}