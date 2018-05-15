/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/history.js":
/*!***********************!*\
  !*** ./js/history.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var helper = __webpack_require__(/*! ../util/helper */ \"./util/helper.js\");\r\nvar store = __webpack_require__(/*! ../util/store */ \"./util/store.js\");\r\n\r\nvar el\r\n    , list = []\r\n    ,on_click\r\n\r\nvar output = {\r\n    init,\r\n    add,\r\n    remove,\r\n    clear\r\n}\r\n\r\n\r\n\r\n// 开始函数 输入传参   生成历史记录表单\r\nfunction init(config) {\r\n    el = document.querySelector(config.el);\r\n    on_click = config.on_click;\r\n    sync_to_ladle();\r\n   \r\n    render()\r\n}\r\n\r\n\r\n// 从冰箱把数据同步到炒瓢\r\nfunction sync_to_ladle() {\r\n    list = store.get('history-list') || [];\r\n\r\n}\r\n\r\n// 从炒瓢把数据同步到冰箱\r\nfunction sync_to_store() {\r\n    store.set('history-list', list);\r\n}\r\n\r\n//  渲染数据\r\nfunction render() {\r\n    el.innerHTML = '';\r\n    list.forEach(function (keyword) {\r\n        var el_row = document.createElement('div');\r\n        el_row.innerHTML = `${keyword}`\r\n        el_row.addEventListener('click', function (e) {\r\n            if (on_click)\r\n                on_click(keyword, e);\r\n        });\r\n        el_row.classList.add('history')\r\n        el.appendChild(el_row);\r\n    });\r\n}\r\n\r\n// 增加一条历史记录\r\nfunction add(keyword){\r\n    list.push(keyword)\r\n    sync_to_store();\r\n    render();\r\n}\r\n\r\n// 清楚一条历史记录\r\nfunction remove(keyword){\r\n     helper.find_and_delete(list,keyword)\r\n     sync_to_store();\r\n     render();\r\n}\r\n// 清楚所用历史记录\r\nfunction clear(){\r\n    list = [];\r\n    sync_to_store();\r\n    render();\r\n}\r\nmodule.exports=output;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9oaXN0b3J5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvaGlzdG9yeS5qcz9mOGExIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBoZWxwZXIgPSByZXF1aXJlKCcuLi91dGlsL2hlbHBlcicpO1xyXG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi91dGlsL3N0b3JlJyk7XHJcblxyXG52YXIgZWxcclxuICAgICwgbGlzdCA9IFtdXHJcbiAgICAsb25fY2xpY2tcclxuXHJcbnZhciBvdXRwdXQgPSB7XHJcbiAgICBpbml0LFxyXG4gICAgYWRkLFxyXG4gICAgcmVtb3ZlLFxyXG4gICAgY2xlYXJcclxufVxyXG5cclxuXHJcblxyXG4vLyDlvIDlp4vlh73mlbAg6L6T5YWl5Lyg5Y+CICAg55Sf5oiQ5Y6G5Y+y6K6w5b2V6KGo5Y2VXHJcbmZ1bmN0aW9uIGluaXQoY29uZmlnKSB7XHJcbiAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLmVsKTtcclxuICAgIG9uX2NsaWNrID0gY29uZmlnLm9uX2NsaWNrO1xyXG4gICAgc3luY190b19sYWRsZSgpO1xyXG4gICBcclxuICAgIHJlbmRlcigpXHJcbn1cclxuXHJcblxyXG4vLyDku47lhrDnrrHmiormlbDmja7lkIzmraXliLDngpLnk6JcclxuZnVuY3Rpb24gc3luY190b19sYWRsZSgpIHtcclxuICAgIGxpc3QgPSBzdG9yZS5nZXQoJ2hpc3RvcnktbGlzdCcpIHx8IFtdO1xyXG5cclxufVxyXG5cclxuLy8g5LuO54KS55Oi5oqK5pWw5o2u5ZCM5q2l5Yiw5Yaw566xXHJcbmZ1bmN0aW9uIHN5bmNfdG9fc3RvcmUoKSB7XHJcbiAgICBzdG9yZS5zZXQoJ2hpc3RvcnktbGlzdCcsIGxpc3QpO1xyXG59XHJcblxyXG4vLyAg5riy5p+T5pWw5o2uXHJcbmZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGVsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXl3b3JkKSB7XHJcbiAgICAgICAgdmFyIGVsX3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVsX3Jvdy5pbm5lckhUTUwgPSBgJHtrZXl3b3JkfWBcclxuICAgICAgICBlbF9yb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAob25fY2xpY2spXHJcbiAgICAgICAgICAgICAgICBvbl9jbGljayhrZXl3b3JkLCBlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbF9yb3cuY2xhc3NMaXN0LmFkZCgnaGlzdG9yeScpXHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZWxfcm93KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyDlop7liqDkuIDmnaHljoblj7LorrDlvZVcclxuZnVuY3Rpb24gYWRkKGtleXdvcmQpe1xyXG4gICAgbGlzdC5wdXNoKGtleXdvcmQpXHJcbiAgICBzeW5jX3RvX3N0b3JlKCk7XHJcbiAgICByZW5kZXIoKTtcclxufVxyXG5cclxuLy8g5riF5qWa5LiA5p2h5Y6G5Y+y6K6w5b2VXHJcbmZ1bmN0aW9uIHJlbW92ZShrZXl3b3JkKXtcclxuICAgICBoZWxwZXIuZmluZF9hbmRfZGVsZXRlKGxpc3Qsa2V5d29yZClcclxuICAgICBzeW5jX3RvX3N0b3JlKCk7XHJcbiAgICAgcmVuZGVyKCk7XHJcbn1cclxuLy8g5riF5qWa5omA55So5Y6G5Y+y6K6w5b2VXHJcbmZ1bmN0aW9uIGNsZWFyKCl7XHJcbiAgICBsaXN0ID0gW107XHJcbiAgICBzeW5jX3RvX3N0b3JlKCk7XHJcbiAgICByZW5kZXIoKTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cz1vdXRwdXQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/history.js\n");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var history = __webpack_require__(/*! ./history */ \"./js/history.js\")\r\n\r\n// 怎么用 输出配置条件生成历史记录页面（配置条件默认为根元素 和事件监听）\r\nhistory.init({\r\n    el:'#history-list',\r\n    on_click: function (){\r\n\r\n    }\r\n})\r\n// 功能\r\n// 添加一条历史记录\r\n// history.add('a')\r\n// 清楚一条历史记录\r\n// history.remove('a')\r\n// 清除所有历史记录\r\n// history.clear()\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzP2VlMWMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGhpc3RvcnkgPSByZXF1aXJlKCcuL2hpc3RvcnknKVxyXG5cclxuLy8g5oCO5LmI55SoIOi+k+WHuumFjee9ruadoeS7tueUn+aIkOWOhuWPsuiusOW9lemhtemdou+8iOmFjee9ruadoeS7tum7mOiupOS4uuagueWFg+e0oCDlkozkuovku7bnm5HlkKzvvIlcclxuaGlzdG9yeS5pbml0KHtcclxuICAgIGVsOicjaGlzdG9yeS1saXN0JyxcclxuICAgIG9uX2NsaWNrOiBmdW5jdGlvbiAoKXtcclxuXHJcbiAgICB9XHJcbn0pXHJcbi8vIOWKn+iDvVxyXG4vLyDmt7vliqDkuIDmnaHljoblj7LorrDlvZVcclxuLy8gaGlzdG9yeS5hZGQoJ2EnKVxyXG4vLyDmuIXmpZrkuIDmnaHljoblj7LorrDlvZVcclxuLy8gaGlzdG9yeS5yZW1vdmUoJ2EnKVxyXG4vLyDmuIXpmaTmiYDmnInljoblj7LorrDlvZVcclxuLy8gaGlzdG9yeS5jbGVhcigpXHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ }),

/***/ "./util/helper.js":
/*!************************!*\
  !*** ./util/helper.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 查找和删除某个元素\r\nfunction find_and_delete(arr, element) {\r\n// 这个函数的传参是(列表本身,需要被删除的函数)\r\n\r\n// 需要被删除的元素的索引是\r\nvar shit_index = arr.indexOf(element);\r\n    // 将列表中该元素第一次被点击时的索引赋值给shit_index\r\n  \r\n    if (shit_index == -1)\r\n// 如果 该索引等于-1\r\n\r\n      return false;\r\n    //   就直接返回\r\n  \r\n\r\n    arr.splice(shit_index, 1);\r\n    // 删除数组的内容这个方法的2个传参分别是(从哪开始删,一次删几个)\r\n    return true;\r\n    // 返回 是\r\n  }\r\n  \r\n  module.exports = {\r\n    find_and_delete: find_and_delete\r\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL2hlbHBlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWwvaGVscGVyLmpzPzE1NDgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g5p+l5om+5ZKM5Yig6Zmk5p+Q5Liq5YWD57SgXHJcbmZ1bmN0aW9uIGZpbmRfYW5kX2RlbGV0ZShhcnIsIGVsZW1lbnQpIHtcclxuLy8g6L+Z5Liq5Ye95pWw55qE5Lyg5Y+C5pivKOWIl+ihqOacrOi6qyzpnIDopoHooqvliKDpmaTnmoTlh73mlbApXHJcblxyXG4vLyDpnIDopoHooqvliKDpmaTnmoTlhYPntKDnmoTntKLlvJXmmK9cclxudmFyIHNoaXRfaW5kZXggPSBhcnIuaW5kZXhPZihlbGVtZW50KTtcclxuICAgIC8vIOWwhuWIl+ihqOS4reivpeWFg+e0oOesrOS4gOasoeiiq+eCueWHu+aXtueahOe0ouW8lei1i+WAvOe7mXNoaXRfaW5kZXhcclxuICBcclxuICAgIGlmIChzaGl0X2luZGV4ID09IC0xKVxyXG4vLyDlpoLmnpwg6K+l57Si5byV562J5LqOLTFcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vICAg5bCx55u05o6l6L+U5ZueXHJcbiAgXHJcblxyXG4gICAgYXJyLnNwbGljZShzaGl0X2luZGV4LCAxKTtcclxuICAgIC8vIOWIoOmZpOaVsOe7hOeahOWGheWuuei/meS4quaWueazleeahDLkuKrkvKDlj4LliIbliKvmmK8o5LuO5ZOq5byA5aeL5YigLOS4gOasoeWIoOWHoOS4qilcclxuICAgIHJldHVybiB0cnVlO1xyXG4gICAgLy8g6L+U5ZueIOaYr1xyXG4gIH1cclxuICBcclxuICBtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGZpbmRfYW5kX2RlbGV0ZTogZmluZF9hbmRfZGVsZXRlXHJcbiAgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./util/helper.js\n");

/***/ }),

/***/ "./util/store.js":
/*!***********************!*\
  !*** ./util/store.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*往冰箱存*/\r\nfunction set(key, val) {\r\n    /*加保鲜膜（JSON化）*/\r\n    var json = JSON.stringify(val);\r\n    /*存冰箱（状态稳定不轻易改变）*/\r\n    localStorage.setItem(key, json);\r\n  }\r\n  \r\n  /*从冰箱取*/\r\n  function get(key) {\r\n    /*从冰箱取到带保鲜膜的数据*/\r\n    var json = localStorage.getItem(key);\r\n    /*撕膜（将数据转化为JS可以理解的数据类型）*/\r\n    return JSON.parse(json);\r\n  }\r\n  \r\n  module.exports = {\r\n    set: set,\r\n    get: get,\r\n  }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL3N0b3JlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbC9zdG9yZS5qcz8xMjA2Il0sInNvdXJjZXNDb250ZW50IjpbIi8q5b6A5Yaw566x5a2YKi9cclxuZnVuY3Rpb24gc2V0KGtleSwgdmFsKSB7XHJcbiAgICAvKuWKoOS/nemynOiGnO+8iEpTT07ljJbvvIkqL1xyXG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xyXG4gICAgLyrlrZjlhrDnrrHvvIjnirbmgIHnqLPlrprkuI3ovbvmmJPmlLnlj5jvvIkqL1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBqc29uKTtcclxuICB9XHJcbiAgXHJcbiAgLyrku47lhrDnrrHlj5YqL1xyXG4gIGZ1bmN0aW9uIGdldChrZXkpIHtcclxuICAgIC8q5LuO5Yaw566x5Y+W5Yiw5bim5L+d6bKc6Iac55qE5pWw5o2uKi9cclxuICAgIHZhciBqc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIC8q5pKV6Iac77yI5bCG5pWw5o2u6L2s5YyW5Li6SlPlj6/ku6XnkIbop6PnmoTmlbDmja7nsbvlnovvvIkqL1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XHJcbiAgfVxyXG4gIFxyXG4gIG1vZHVsZS5leHBvcnRzID0ge1xyXG4gICAgc2V0OiBzZXQsXHJcbiAgICBnZXQ6IGdldCxcclxuICB9Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./util/store.js\n");

/***/ })

/******/ });