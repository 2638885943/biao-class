var helper = require('../util/helper');
var store = require('../util/store');

var el
    , list = []
    ,on_click

var output = {
    init,
    add,
    remove,
    clear
}



// 开始函数 输入传参   生成历史记录表单
function init(config) {
    el = document.querySelector(config.el);
    on_click = config.on_click;
    sync_to_ladle();
   
    render()
}


// 从冰箱把数据同步到炒瓢
function sync_to_ladle() {
    list = store.get('history-list') || [];

}

// 从炒瓢把数据同步到冰箱
function sync_to_store() {
    store.set('history-list', list);
}

//  渲染数据
function render() {
    el.innerHTML = '';
    list.forEach(function (keyword) {
        var el_row = document.createElement('div');
        el_row.innerHTML = `${keyword}`
        el_row.addEventListener('click', function (e) {
            if (on_click)
                on_click(keyword, e);
        });
        el_row.classList.add('history')
        el.appendChild(el_row);
    });
}

// 增加一条历史记录
function add(keyword){
    list.push(keyword)
    sync_to_store();
    render();
}

// 清楚一条历史记录
function remove(keyword){
     helper.find_and_delete(list,keyword)
     sync_to_store();
     render();
}
// 清楚所用历史记录
function clear(){
    list = [];
    sync_to_store();
    render();
}
module.exports=output;