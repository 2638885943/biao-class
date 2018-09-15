
    //   v-on: or @(绑定事件)
// new Vue({
//     el:"#app",
//     methods:{
//         alert:function(){
//             alert('别点了')
//         },
//         onFocus:function(){
            
//             console.log('聚焦')
//         },
//         onBlur:function (){
//             console.log('失焦')
//         },
//        onSubmit:function(){
//            console.log('提交完成')
//        },
//        onKeyup:function(){
//            console.log('键盘事件')
//        },
//        onEnter:function(){
//            console.log('回车事件')
//        }
//     }
// })




// v-model(在input中的用法)
//    new Vue({
//        el:"#app",
//        data:{
//            name:"whh",
//        }
//    })



// (在除input外的其他元素上的用法)
new Vue({
    el:"#app",
    data:{
   from:2,
   go:[],
    }
})
