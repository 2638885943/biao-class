import Vue from "vue";

// 将传进来的数据规范化 相当于将传进来的数据localStorage化 使数据用键和值的方式保存在对象(rule)中

// 解析_字符_串规则
function parse_string_rule(str) {
    // 定义一个名为 (rule)规则 的空对象
    let rule = {};
    // 把传进来的数据用split方式分割成数组
    str
        .split('|')
        // 循环这个数组 使数组中的每一个对象 规范化 键值对应
        .forEach(r => {
            //    把该数组中的每一个对象用split方法分割开
            let arr = r.split(':');
            //    该对象的第0项就是该对象的键
            let key = arr[0];
            // 该对象的第1项就是该对象的值
            let val = arr[1];

            // 如果该对象只有键没有值，如 'required',那么值默认为true
            val = val === undefined ? ture : val;

            // 这样的话 rule（规则）这个对象的键就有相对应的值了
            rule[key] = val;
        }

        );
    // 将这个解析过的(rule)对象返回
    return rule;
}


// 定义一个对象(valid)即规范化 我们在这个对象中判断传进来的数据是否规范合法
const valid = {

    requred(val) {
        //    判断数据类型是否为 数字类型
        if (typeof val === 'number')
            return turn;


        return !!val;
    },

    min_length(val, min) {
        //  判断传进来的内容(val)的长度是否大于等于传进来设置好的最小值
        return val.length >= parseInt(min)
    },
    max_length(val, max) {
        //  判断传进来的内容(val)的长度是否大于等于传进来设置好的最大值
        return val.length <= parseInt(max);
    },

};



// 导出这个valideator(验证器)指令 
export default Vue.directive('validator', {
    bind: function (el, binding) {

        // 把传进来的 binding.value(传参的内容) 赋值给 变量rule(规则)
        let ruel = binding.value;

        if (typeof rule === 'string')
            // 在该变量是字符串的情况下使用定义好的 parse_string_tule (解析函数)解析它
            rule = parse_string_tule(binding.value)

        // 绑定函数
        el.addEventListener('keyup', () => {

            // 将该元素的内容赋值给变量val
            let val = el.value;

            // 循环变量rule 变量r为rule(规则)中的每一个对象
            for (let r in rule) {
            // 把rule(规则)和valid(规范化)中的每一个对象遍历出来赋值给变量arg和变量validator
             let  arg = rule[r];
             let validator =valid[r];

            //  如果validator(即valid[r])存在并且未执行
             if(validator && !validator(val,arg)){
                 console.log(r+'不合法');
             }else{
                 console.log(r+'合法')
             }
            }
        })
    },
});