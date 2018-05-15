var helper = require('../../util/helper')
    , strore = require('../../util/store')

var list = [];   // 现在这个数组（历史记录表单）是什么 是空数组
var el // 生成的数组往哪放 它的根元素是什么
var onclick // 当点击事件发生时 应该干嘛

// 建立开始函数
function init(config) {
    // 传参config(及用户指定的信息，配置)

    // 找到用户指定的历史记录根元素
    el = document.querySelector(config.el);
    // el即用户指定的历史记录根元素


}

// 增加一条历史记录
function add(keyword) {
    list.unshift(keywoed);// 将keyword（传参 也就是关键字）推到list（历史记录表单）中
    render();
}

// 清除一条历史记录
function remove(keywoed) {

    render();
}

// 清除所有历史记录
function clear() {
    list = [];// 把list（历史记录表单）直接等于空数组
    render();
}

// 渲染函数
function render() {

    el.innerHTML = '';// 渲染之前先把根元素清空

    // 遍历list（历史记录表单）
    list.forEach(function (keyword) {
        // 让他中的keyword（每一条搜索内容）
        var el_row = document.createElement('div');
        // 在文档中建立一个新的div并赋值给 el_row(也就是el 也就是list中的一条)
        el_row.innerHTML = ` <div class="text">${keyword}</div>
        <div class="tool">
          <span class="delete">删除</span>
        </div>`
        // 这一条在html中的显示内容就是 `${keyword}`（也就是list中这一条的内容）

        el_row.addEventListener(function (e) {
            //    给el_row（这条历史记录）加上点击事件 因为是在循环里所以就等于是给每一条历史记录加上了点击事件

            // 判断这一页有没有on_click这个函数
            if (on_click);

            on_click(keyword, e);
            // 叫出这个函数 并将参数keyword(关键字或者说这一条历史记录中的内容)和e（js中的原生参数）
            // 传给它
        });
        el.appendChlid(el_row);
        // 每次循环在el（用户指定的根元素里面）添加一条el_row(历史记录)
    });

}

module.exports = {
    init,
    add,
    remove,
    clear
}