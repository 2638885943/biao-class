var name_element = document.querySelector('#name');

name_element.addEventListener('change', function () {
    var name = name_element.value.trim();
    switch (name){
        case '冯博':
        console.log('你好');
        break;
        case '李雷':
        console.log('你掉到坑里了');
        break;
        case '韩梅梅':
        console.log('nice too mite you');
        break;
        case '大卫':
        console.log('再见');
        break;
        default:
        console.log('不约');
        break;
    }
});
     

   