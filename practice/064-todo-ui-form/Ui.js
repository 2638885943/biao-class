window.Ui = Ui;

function Ui(form_seletor, list_selector) {
    this.form = document.querySelector(form_seletor)
    this.list = document.querySelector(list_selector)
    
    this._api = new Api();
}
Ui.prototype.get_form_data = get_form_data;
Ui.prototype.set_form_data = set_form_data;
Ui.prototype.render = render;
function render() {
    var todo_list = this._api.read();
    var me = this;
    todo_list.forEach(function (item) {
        var el = document.createElement('div');

        el.innerHTML = `  <div class="row todo-item">
      <div class="col checkbox">
        <input type="checkbox">
      </div>
      <div class="col detail">
        <div class="title">${item.title}</div>
      </div>
      <div class="col tool-set">
        <button>更新</button>
        <button>删除</button>
      </div>
    </div>`;
        me.list.appendChild(el);

    });
}

//   从表单中拿出数据  生成对象
function get_form_data(form_selector) {
    var data = {};
    var form = document.querySelector(form_selector);
    var list = form.querySelectorAll('[name]');

    list.forEach(function (input) {
        switch (input.nodeName) {

            case 'INPUT':
                switch (input.type) {
                    case 'text':
                    case 'search':
                    case 'number':
                    case 'password':
                    case 'hidden':
                        /*如果是字符类数据，使用用户输入的值*/
                        data[input.name] = input.value;
                        break;
                    case 'radio':
                    case 'checkbox':
                        /*如果是打钩类数据，使用打钩的状态（打|没打）*/
                        data[input.name] = input.checked;
                        break;
                }
                // console.log(input);
                break;
            case 'TEXTAREA':
                data[input.name] = input.value;
                break;
        }
    });

    return data;
}

function set_form_data(form_selector, data) {
    /*选中要插入数据的表单*/
    var form = document.querySelector(form_selector);

    /*遍历数据对象*/
    for (var key in data) {
        /*缓存当前属性的值*/
        var value = data[key];
        /*找到当前属性在表单中对应的input*/
        var input = form.querySelector(`[name=${key}]`);

        if (!input)
            continue;

        /*获取当前属性的数据类型*/
        var data_type = typeof value;

        switch (data_type) {
            /*如果是字符串或者数字，就默认其为input[type=number|text|url|...]*/
            case 'string':
            case 'number':
                input.value = value;
                break;
            /*如果是布尔值，就默认其为input[type=radio|checkbox]*/
            case 'boolean':
                input.checked = value;
                break;
        }
    }
}

var ui = new Ui('#todo-form', '#todo-list');
console.log(ui);