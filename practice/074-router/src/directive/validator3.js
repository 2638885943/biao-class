import Vue from 'uve'

// 解析_字符串_规则   使数据键值对应
function parse_string_rule(str) {
    let rule = {};

    str
        .split('|')
        .forEach(r => {
            let arr = r.split(':');
            let key = arr[0];
            let val = arr[1];

            if (val)
                val = val.split(',')

            // 如果只有键没有值，例子:'required',那么val就等于true
            val = val === undefined ? true : val;

            rule[key] = val;
        });
    rule[key] = val;
}

// 初始化表单状态
function init_from_state(form, lang) {
    let el_submit = form.querySelector('[type=submit]');
    form.$state = {
        lang: lang,
        el_submit: el_submit,
        input_list: [],
    };
}

// 在form中推入input的状态
function track_input(form,input){
     form.$state.input_list.push(input);
}

export default Vue.directive('validator', {

    inserted: function (el, binding) {
        // 防跳反定时器
        let debounce_timer

        let rule = binding.value;
        // 用于显示错误信息的选择器
        let selector = el.getAttribute('error-el');
        // 用来显示错误信息的元素
        let error_el = document.querySelector(selector);

        // 如果规则是字符串就解析字符串为对象规则
        if (typeof rule === 'string')
            rule = pase_string_rule(binding.value);

        //    @var {HTMLFormElement}当前指令所属表单
        let el_form = el.closest('form');

        // 将表单内所有的状态存在当前<input>所在的<from>上，如果没有存过，就初始化
        if (!el_form.$state) {
            let lang = el.getAttribute('error-lang') || 'zh';
            init_from_state(el_form, lang);
        }
        // 将新的input追加到$atate(状态)中
        track_input(el_form,el);
        // 
    }

});
