// 创建一个查找和删除元素的函数
// 传入 从哪删(列表本身)  和  删哪个(需要被删除的元素)
function   find_and_delete(list,element){
// 用findIndex遍历list 检查其中的每一条
    var index = list.findIndex(function (item){
     
        // 当表单中的元素有一条等于传进来的元素是 将该元素的索引返回
        return element == item;

    });

    // 传入表单中被找到的那个索引的内容list[index] 和 1(表示删除一条) 用splisce方法删除   
    list.splice(list[index],1)
} 