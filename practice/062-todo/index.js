var max_id = 101;
var todo_list = [
    {
        id:100,
        name:'买菜',
        completed:false,
    },
    {
        id:101,
        name:'洗菜',
        completed:false,
    }
]


// 添加一条待办事项
function add(row){
    row.id = max_id++
    todo_list.push(row)

}

// 删除一条待办事项

function  remove(){

}













// 通过id找索引
function find_index_by_id(arr,id){
 return arr.findINDEX(function (item){ 
  return    id == arr.id
  })
}