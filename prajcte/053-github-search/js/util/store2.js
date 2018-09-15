


// 创建一个把数据存到冰箱的函数 
// 传参是  键名  和 内容  
function set(key, value) {
    // 先把value(内容)裹上膜 并把它赋值给data(定义的变量) 
    var data = JSON.stringify(value)
    // 把键名和定义的变量存到冰箱里
    localStorage.set(key, data)
}


//  创建一个从冰箱中拿数据的函数
// 传入  键名
function get(key) {
    var data = localStorage.get(key)
    return JSON.parse(data)

}