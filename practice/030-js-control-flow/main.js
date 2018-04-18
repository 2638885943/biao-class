var age_element = document.querySelector('#age');

age_element.addEventListener('change', function () {
    var age = age_element.value;
    age = parseInt(age);
    console.log(age);
    if (!age) {
        console.log('不行 不填年龄是不允许的')
    }
    else if (age < 1) {
        console.log('尔康 快住手')
    }
    else if (age == 23) {
        console.log('你跟我同岁呢')
    }
    else if (age > 1 && age < 18) {
        console.log('小学生 快去读书')
    }
    else if (age > 18 && age < 30) {
        console.log('这位是一个青年人')
    }
    else if (age >= 30 && age <= 45) {
        console.log('油腻的中年人')
    }
    else if (age > 100 && age < 2000) {
        console.log('你是修仙党吗')
    }
});
var name_element = document.querySelector('#name');

name_element.addEventListener('change', function () {
    var name = name_element.value;
    console.log(name);
    if (!name) {
        console.log('hapi 填名字')
    }
    else if (name == 'fengbo')
        console.log('同名')
    else {
        console.log(name + '你好')
    }
});
