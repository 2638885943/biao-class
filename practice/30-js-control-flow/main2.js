var name_element = document.querySelector('#name');

name_element.addEventListener('change', function () {
    var name = name_element.value.trim();
    switch (name) {
        case '山姆':
            console.log('你好');
            break;
        case '李雷':
            console.log('你掉到坑里了');

        case '韩梅梅':
            console.log('nice too meet you');
            break;
        case '大卫':
            console.log('再见');
            break;
        default:
            console.log('你好 陌生人');
            break;
    }
});
var age_element = document.querySelector('#age');

age_element.addEventListener('change', function () {
    var age = age_element.value.trim();
    age = parseIent('age');

    if (!age) {
        console.log('不填年龄是不允许的');
    }
    else if (age == 18) {
        console.log('刚刚成年');
    }
    else if (age < 18) {
        console.log('未成年');
    }
    else if (age > 6 && age < 18) {
        console.log('小学僧 快去写作业');
    }
    else if (age < 1) {
        console.log('尔康 快住手');
    }
    else if (age > 150) {
        console.log('你怕不是修仙党哦');
    }
    else {
        conslole('你今年' + age + '岁了');
    }
});
var phone_element = document.querySelector('#phone');
phone_element.addEventListener('change', function () {
    var phone = phone_element.value.trim();

    if (!phone) {
        console.log('号码是必填项');
    }
    else if (!phone.startsWith('1') ||
               phone.lenght! = 11 ||
            !parseInt(phone)
){
    console.log('号码格式有误');
}
    else {
    console.log('欢迎登陆');
}

});