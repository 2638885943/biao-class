var helper = require('./helper');
var store = require('./store');

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
    // 使用数据生成表单前的样式
    el.innerHTML =  `<div id='delete-all' hidden>清空所有历史记录</div>` ;
//    遍历数据      使每一条
    list.forEach(function (keyword) {
        // 给生成的每一行加上div
        var el_row = document.createElement('div');
    //    每一行的innerHTML样式
        el_row.innerHTML = `<div class ='text'>${keyword}</div>
        <div class = 'tool'><div id='delete'>删除</div></div>`
    //    当这一行被点击时
        el_row.addEventListener('click', function (e) {
           
            if (on_click)
                on_click(keyword, e);
        });
    //   给生成的每一行加个类
        el_row.classList.add('history')
    //    将生成的这条历史记录推进el元素中
        el.appendChild(el_row);
    //   如果list的长度大于2
        if(list.length>2)
        {
        //   显示 document.querySelector('#delete-all')元素
         document.querySelector('#delete-all').hidden=false;
         //   监听 document.querySelector('#delete-all')元素当它被点击时
         document.querySelector('#delete-all').addEventListener('click',function (){
        //  清空历史记录表单
             clear();
           
         });
        }
       
    });
  
    
 
}

// 增加一条历史记录
function add(keyword){
    
    // 如果历史记录表单中没有这条而且关键词不为空的情况下
    if(keyword==!list.keyword)
  {
    //   把这条记录推进表单
    list.push(keyword)
    // 把数据同步到冰箱
    sync_to_store();
    // 渲染
    render();
  }
//   如果有的话
  else{
    //   清除这条历史记录
      remove(keyword);
    //   把表单中这条历史记录置顶
      list.unshift(keyword)
    //   把数据同步到冰箱
      sync_to_store();
    //   渲染
      render();
  }
}

// 清除一条历史记录
function remove(keyword){
     helper.find_and_delete(list,keyword)
     sync_to_store();
     render();
}
// 清除所用历史记录
function clear(){
    list = [];
    sync_to_store();
    render();
}

module.exports=output;