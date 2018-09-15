

// 数据获得函数
function send(url, fn, methed) {
  methed = methed || 'get';

  // 准备发送请求
  var http = new XMLHttpRequest();
  http.open(methed, url);

  // 发送请求
  http.send();
  console.log(url);

  // 当数据返回时加载它并执行数据转换函数
  http.addEventListener('load', function () {
    var data = JSON.parse(this.responseText);
   
    if (fn)
      fn(data);
   
    console.log(data)


  });
}



module.exports = {
  send: send,

}