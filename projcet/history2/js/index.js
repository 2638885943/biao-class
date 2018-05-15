var history = require('./history')

// 怎么用 输出配置条件生成历史记录页面（配置条件默认为根元素 和事件监听）
history.init({
    el:'#history-list',
    on_click: function (){

    }
})
// 功能
// 添加一条历史记录
// history.add('a')
// 清楚一条历史记录
// history.remove('a')
// 清除所有历史记录
// history.clear()

