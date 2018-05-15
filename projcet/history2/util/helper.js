// 查找和删除某个元素
function find_and_delete(arr, element) {
// 这个函数的传参是(列表本身,需要被删除的函数)

// 需要被删除的元素的索引是
var shit_index = arr.indexOf(element);
    // 将列表中该元素第一次被点击时的索引赋值给shit_index
  
    if (shit_index == -1)
// 如果 该索引等于-1

      return false;
    //   就直接返回
  

    arr.splice(shit_index, 1);
    // 删除数组的内容这个方法的2个传参分别是(从哪开始删,一次删几个)
    return true;
    // 返回 是
  }
  
  module.exports = {
    find_and_delete: find_and_delete
  }