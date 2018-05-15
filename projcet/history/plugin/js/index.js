var history = require('./history')



// 历史记录表单

// 传一个关键字就成生成一个表单
history.init({
  // 把生成的数据el(也就是表单中的一行)放在'#history-list'（整个表单）这个元素下
  el: '#history-list',

  // 当这一条被点击时 执行
  on_cilck: function (keyword, e) {
    console.log(keyword);
  },
});


//   其他功能

