

var history = require('./history')

// 输入传参生成历史记录表单  当它被点击时  执行个性化操作
history.init ({
    el :'#history-list',
    on_click:function (){

    }
})


// 所谓个性化操作

// 添加一条历史记录
history.add()

// 删除一条历史记录
history.remove()

// 删除所有历史记录
history.clear()

// 隐藏历史记录表单
history.history_list_show()

// 展开历史记录表单
history.history_list_hide()

// 给历史记录表单加开关
history.history_list_no_off()