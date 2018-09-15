
let Home = Vue.component('home', {
    template: `<div><h1>Home</h1></div>`,
    data: function () {
        return {};
    },
});
let About = Vue.component('about', {
    template: `<div><h1>我叫王花花<button @ckick="alert()"></h1></div>`,
    mothods: {
        alert: function () {
            alert('yo')
        }
    },
    data: function () {
        return {};
    },
});


new Vue({
    el: "#root",
    data: {

    },
    router: new VueRouter({
        router: [
            {
                path: '/home', component: Home
            }, {
                path: '/about', comAponent: About
            }
        ]
    })

})