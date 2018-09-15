

var el;
var on_click;
var list;
var output = {
    init,
    add,
    remove,
    clear
}

// 创建init函数   config为传参
function init(config) {
    //    拿到表单在页面中的挂载点   根元素
    el = document.querySelector(config.el)
    // 找到根元素后从冰箱里把数据拿出来
    sync_to_lable()
    // 渲染
    render()
    // 当它被点击时咋办
    on_click = config.on_click
}

// 添加一条历史记录
function add(keyword) {
    if (!keyword && keyword !== '')
        list.push(keyword)
        sync_to_lable()
        render()
}

// 删除一条历史记录

function remove(keyword) {

 var index = list.findIndex(function (item) {
        return item == keyword
    })
    sync_to_lable()
    render()
    list.splice(list[index],1)
}

// 删除所有历史记录
function clear(){
    list = [];
    sync_to_lable()
    render()
}
// 数据操作

// 从冰箱把数据同步到炒瓢
function sync_to_lable() {
    list = JSON.parse(localStorage.setItem('history-list')) || []
}

// 从炒瓢把数据同步到冰箱
function sync_to_store() {
    localStorage.getItem(JOSN.stringify(list, 'history'));
}


function set(key,value){

     var data = JSON.stringify(value)
     localStorage.setItem(key,data)
}


function get(key){
   var data =JSON.parse(localStorage.getItem(key))
}

function render() {
    // 每次渲染前把el的html清空
    el.innerHTML = ''
    // 遍历list(表单)
    list.forEach(function (keyword) {
        var el_row = document.createElement('div')
        el_row.innerHTML = `${keyword}`
        el_row.classList.add('history')
        el_row.addEventListener('click', function (e) {
            if (on_click)
                on_click(keyword, e)
        })
        el.appendChlid(el_row)
    });
}

module.exports = output;