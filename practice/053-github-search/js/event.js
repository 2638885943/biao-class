
// 该模块用于绑定事件并暴露出去
var el = require('./element');
// 获取element.js中暴露出来的信息并赋值给变量el
var se = require('./search')
// 获取search.js中暴露出来的信息并赋值给变量se
var history = require('./util/history')

var render = require('./render')

// 清屏
// render.cls();


// 表单提交函数
function submit() {
  el.search_form.addEventListener('submit', function (e) {
    e.preventDefault();
   
  
   
       
    se.search();

    render.history_list_hide();
 



  });
}


// 加载更多函数
function next() {
  el.next.addEventListener('click', function () {
    se.search_next();
  });
}

// 当点击搜索框生成历史记录表单
function on_search_input_click() {
  // 给搜索框绑定点击事件
  el.search_input.addEventListener('click', function () {


    history.init({
      el: '#history-list',
      on_click: function (keyword, e) {
        console.log(keyword);

        console.log(e.target)
        // 如果在这条历史记录里点击源不是delete（删除按钮）的情况下
        if (e.target !== document.querySelector('#delete')) {
          // 把keyword（传回来的关键字）推到el.search_input.value(搜索框中的内容)里
          el.search_input.value = keyword
          //  搜索它
          se.search(keyword);

          // 隐藏历史记录表单
          render.history_list_hide();
        } else {
          // 删除这条历史记录
          history.remove(keyword);

        }

      }

    });
    // 历史记录的开关
    render.history_on_off();
  });
}



function events() {
  submit();
  next();
  on_search_input_click();


}


// 将定义好的函数本身暴露出去
module.exports = {
  submit: submit,
  next: next,
  events: events,
  on_search_input: on_search_input_click
}