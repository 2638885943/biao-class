function Api(max_id, list) {
    this.max_id = max_id++ ,
        this.list = list || []

}


var list = [
    {
        id: 2,
        name: 'whh',
        age: 18,
    }
    , {
        id: 3,
        name: 'lsd',
        age: 20,
    }
]


Api.prototype.add_or_read = add_or_read;
Api.prototype.remove = remove;
Api.prototype.update = update;














// 通过传入一条数据来实现增加一条数据
function add_or_read(row, id) {
    if (id && !row) {
        return find_by_id(this.list, id)
    }
    else if (!id && !row) {
        return this.list
    }
    else {
        row.id = this.max_id;
        this.list.push(row);
    }


}

// 通过传入一个id来实现清除一条数据
function remove(id) {
    var index = find_by_id_index(this.list, id);
    this.list.splice(index, 1);
}

// 通过传入一个id和一条新数据实现更改传入id所在数据的内容
function update(id, new_row) {
    var index = find_by_id_index(this.list, id);
    var old_row = this.list[index]
    this.list[index] = Object.assign({}, old_row, new_row)
}



// 通过id找元素
function find_by_id(arr, id) {
    return arr.find(function (row) {
        return row.id == id
    });

}

// 通过id找索引
function find_by_id_index(arr, id) {
    return arr.findIndex(function (row) {
        return row.id == id
    });
}