var ne = require('./element')
var history = require('./util/history')
var user_list = document.getElementById('user-list');
var amount = document.getElementById('amount');
var top = document.getElementById('top');

// 渲染函数
function render(data) {





  user_list.innerHTML = '';// 每次渲染前清空该元素的innerHTML
  // 如果data(传进来的数据)为空
 
  if (data.total_count!==0) {
    console.log(data)
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

  }
  else {
   
    amount.innerHTML = `一共有0条搜索结果`;
    
  }

  next_show();// 显示加载更多
}

// 展示加载更多
function next_show() {
  ne.next.hidden = false;

}

// 隐藏加载更多
function next_hide() {
  ne.next.hidden = true;
}

// ========= 分割线 ===========

// 通过滚动条距和顶部的距离来实现top按钮的出现和隐藏
window.onscroll = function () {
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  if (t > 800) {
    top_show();
  }
  else {
    top_hide();
  }
  on_top(t);
}

// 点击事件  当top按钮被点击时 通过将滚动条与顶部之间的距离变成0来实现回到顶部的功能
function on_top() {
  top.addEventListener('click', function () {

    window.scrollTo(0, 0);

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

// ========= 分割线 ===========


// 历史记录的展示
function history_list_show() {
  var history_list = document.querySelector('#history-list')

  history_list.hidden = false
}

// 历史记录的隐藏
function history_list_hide() {
  var history_list = document.querySelector('#history-list')

  history_list.hidden = true
}

//历史记录的开关
function history_on_off() {
  var history_list = document.querySelector('#history-list')

  history_list.hidden = !history_list.hidden
}


module.exports = {
  render: render,
  user_list: user_list,
  next_hide: next_hide,
  next_show: next.show,
  top_hide: top_hide,
  top_hide: top_hide,
  history_list_show: history_list_show,
  history_list_hide: history_list_hide,
  history_on_off: history_on_off
  // cls:cls
}

