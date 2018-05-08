var ne = require('./element')
var user_list = document.getElementById('user-list');
var amount = document.getElementById('amount');
var top = document.getElementById('top');
// 渲染函数
function render(data) {

  data.items.forEach(function (user) {
    var html = user_list.innerHTML;
    html = html + `
        <div class="user">
          <a class="avatar" target="_blank" href="${user.html_url}">
            <img src="${user.avatar_url}">
          </a>
          <div class="info">
            <div class="username">${user.login}</div>
            <div><a target="_blank" href="${user.html_url}">${user.html_url}</a></div>
          </div>
        </div>
          `;
    user_list.innerHTML = html;
    amount.innerHTML = `搜索到${data.total_count}条搜索结果`

  });
  next_show();
}

// 展示加载更多
function next_show() {
  ne.next.hidden = false;
  
}

// 隐藏加载更多
function next_hide() {
  ne.next.hidden = true;
}

window.onscroll=function(){
  var t = document.documentElement.scrollTop||document.body.scrollTop;
 if (t>800){
  top_show();
 }
else{
   top_hide();
}
 on_top(t);
}

function on_top(){
  top.addEventListener('click',function(){

    document.documentElement.scrollTop||document.body.scrollTop =;

  });
}
// 展示top
function top_show() {
  top.hidden = false;
  
}

// 隐藏top
function top_hide() {
  top.hidden = true;
}
module.exports = {
  render: render,
  user_list: user_list,
  next_hide: next_hide,
  next_show: next.show,
  top_hide:top_hide,
  top_hide:top_hide
}

