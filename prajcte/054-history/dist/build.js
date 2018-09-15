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
/***/ (function(module, exports) {

eval("\r\n\r\nvar el;\r\nvar on_click;\r\nvar list;\r\nvar output = {\r\n    init,\r\n    add,\r\n    remove,\r\n    clear\r\n}\r\n\r\n// 创建init函数   config为传参\r\nfunction init(config) {\r\n    //    拿到表单在页面中的挂载点   根元素\r\n    el = document.querySelector(config.el)\r\n    // 找到根元素后从冰箱里把数据拿出来\r\n    sync_to_lable()\r\n    // 渲染\r\n    render()\r\n    // 当它被点击时咋办\r\n    on_click = config.on_click\r\n}\r\n\r\n// 添加一条历史记录\r\nfunction add(keyword) {\r\n    if (!keyword && keyword !== '')\r\n        list.push(keyword)\r\n        sync_to_lable()\r\n        render()\r\n}\r\n\r\n// 删除一条历史记录\r\n\r\nfunction remove(keyword) {\r\n\r\n var index = list.findIndex(function (item) {\r\n        return item == keyword\r\n    })\r\n    sync_to_lable()\r\n    render()\r\n    list.splice(list[index],1)\r\n}\r\n\r\n// 删除所有历史记录\r\nfunction clear(){\r\n    list = [];\r\n    sync_to_lable()\r\n    render()\r\n}\r\n// 数据操作\r\n\r\n// 从冰箱把数据同步到炒瓢\r\nfunction sync_to_lable() {\r\n    list = JSON.parse(localStorage.setItem('history-list')) || []\r\n}\r\n\r\n// 从炒瓢把数据同步到冰箱\r\nfunction sync_to_store() {\r\n    localStorage.getItem(JOSN.stringify(list, 'history'));\r\n}\r\n\r\n\r\nfunction set(key,value){\r\n\r\n     var data = JSON.stringify(value)\r\n     localStorage.setItem(key,data)\r\n}\r\n\r\n\r\nfunction get(key){\r\n   var data =JSON.parse(localStorage.getItem(key))\r\n}\r\n\r\nfunction render() {\r\n    // 每次渲染前把el的html清空\r\n    el.innerHTML = ''\r\n    // 遍历list(表单)\r\n    list.forEach(function (keyword) {\r\n        var el_row = document.createElement('div')\r\n        el_row.innerHTML = `${keyword}`\r\n        el_row.classList.add('history')\r\n        el_row.addEventListener('click', function (e) {\r\n            if (on_click)\r\n                on_click(keyword, e)\r\n        })\r\n        el.appendChlid(el_row)\r\n    });\r\n}\r\n\r\nmodule.exports = output;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9oaXN0b3J5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvaGlzdG9yeS5qcz9mOGExIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxudmFyIGVsO1xyXG52YXIgb25fY2xpY2s7XHJcbnZhciBsaXN0O1xyXG52YXIgb3V0cHV0ID0ge1xyXG4gICAgaW5pdCxcclxuICAgIGFkZCxcclxuICAgIHJlbW92ZSxcclxuICAgIGNsZWFyXHJcbn1cclxuXHJcbi8vIOWIm+W7umluaXTlh73mlbAgICBjb25maWfkuLrkvKDlj4JcclxuZnVuY3Rpb24gaW5pdChjb25maWcpIHtcclxuICAgIC8vICAgIOaLv+WIsOihqOWNleWcqOmhtemdouS4reeahOaMgui9veeCuSAgIOagueWFg+e0oFxyXG4gICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5lbClcclxuICAgIC8vIOaJvuWIsOagueWFg+e0oOWQjuS7juWGsOeusemHjOaKiuaVsOaNruaLv+WHuuadpVxyXG4gICAgc3luY190b19sYWJsZSgpXHJcbiAgICAvLyDmuLLmn5NcclxuICAgIHJlbmRlcigpXHJcbiAgICAvLyDlvZPlroPooqvngrnlh7vml7blkovlip5cclxuICAgIG9uX2NsaWNrID0gY29uZmlnLm9uX2NsaWNrXHJcbn1cclxuXHJcbi8vIOa3u+WKoOS4gOadoeWOhuWPsuiusOW9lVxyXG5mdW5jdGlvbiBhZGQoa2V5d29yZCkge1xyXG4gICAgaWYgKCFrZXl3b3JkICYmIGtleXdvcmQgIT09ICcnKVxyXG4gICAgICAgIGxpc3QucHVzaChrZXl3b3JkKVxyXG4gICAgICAgIHN5bmNfdG9fbGFibGUoKVxyXG4gICAgICAgIHJlbmRlcigpXHJcbn1cclxuXHJcbi8vIOWIoOmZpOS4gOadoeWOhuWPsuiusOW9lVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlKGtleXdvcmQpIHtcclxuXHJcbiB2YXIgaW5kZXggPSBsaXN0LmZpbmRJbmRleChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtID09IGtleXdvcmRcclxuICAgIH0pXHJcbiAgICBzeW5jX3RvX2xhYmxlKClcclxuICAgIHJlbmRlcigpXHJcbiAgICBsaXN0LnNwbGljZShsaXN0W2luZGV4XSwxKVxyXG59XHJcblxyXG4vLyDliKDpmaTmiYDmnInljoblj7LorrDlvZVcclxuZnVuY3Rpb24gY2xlYXIoKXtcclxuICAgIGxpc3QgPSBbXTtcclxuICAgIHN5bmNfdG9fbGFibGUoKVxyXG4gICAgcmVuZGVyKClcclxufVxyXG4vLyDmlbDmja7mk43kvZxcclxuXHJcbi8vIOS7juWGsOeuseaKiuaVsOaNruWQjOatpeWIsOeCkueTolxyXG5mdW5jdGlvbiBzeW5jX3RvX2xhYmxlKCkge1xyXG4gICAgbGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpc3RvcnktbGlzdCcpKSB8fCBbXVxyXG59XHJcblxyXG4vLyDku47ngpLnk6LmiormlbDmja7lkIzmraXliLDlhrDnrrFcclxuZnVuY3Rpb24gc3luY190b19zdG9yZSgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKEpPU04uc3RyaW5naWZ5KGxpc3QsICdoaXN0b3J5JykpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2V0KGtleSx2YWx1ZSl7XHJcblxyXG4gICAgIHZhciBkYXRhID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpXHJcbiAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LGRhdGEpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXQoa2V5KXtcclxuICAgdmFyIGRhdGEgPUpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gICAgLy8g5q+P5qyh5riy5p+T5YmN5oqKZWznmoRodG1s5riF56m6XHJcbiAgICBlbC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgLy8g6YGN5Y6GbGlzdCjooajljZUpXHJcbiAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKGtleXdvcmQpIHtcclxuICAgICAgICB2YXIgZWxfcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBlbF9yb3cuaW5uZXJIVE1MID0gYCR7a2V5d29yZH1gXHJcbiAgICAgICAgZWxfcm93LmNsYXNzTGlzdC5hZGQoJ2hpc3RvcnknKVxyXG4gICAgICAgIGVsX3Jvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChvbl9jbGljaylcclxuICAgICAgICAgICAgICAgIG9uX2NsaWNrKGtleXdvcmQsIGUpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBlbC5hcHBlbmRDaGxpZChlbF9yb3cpXHJcbiAgICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBvdXRwdXQ7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/history.js\n");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\nvar history = __webpack_require__(/*! ./history */ \"./js/history.js\")\r\n\r\n// 输入传参生成历史记录表单  当它被点击时  执行个性化操作\r\nhistory.init ({\r\n    el :'#history-list',\r\n    on_click:function (){\r\n\r\n    }\r\n})\r\n\r\n\r\n// 所谓个性化操作\r\n\r\n// 添加一条历史记录\r\nhistory.add()\r\n\r\n// 删除一条历史记录\r\nhistory.remove()\r\n\r\n// 删除所有历史记录\r\nhistory.clear()\r\n\r\n// 隐藏历史记录表单\r\nhistory.history_list_show()\r\n\r\n// 展开历史记录表单\r\nhistory.history_list_hide()\r\n\r\n// 给历史记录表单加开关\r\nhistory.history_list_no_off()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL2luZGV4LmpzP2VlMWMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG52YXIgaGlzdG9yeSA9IHJlcXVpcmUoJy4vaGlzdG9yeScpXHJcblxyXG4vLyDovpPlhaXkvKDlj4LnlJ/miJDljoblj7LorrDlvZXooajljZUgIOW9k+Wug+iiq+eCueWHu+aXtiAg5omn6KGM5Liq5oCn5YyW5pON5L2cXHJcbmhpc3RvcnkuaW5pdCAoe1xyXG4gICAgZWwgOicjaGlzdG9yeS1saXN0JyxcclxuICAgIG9uX2NsaWNrOmZ1bmN0aW9uICgpe1xyXG5cclxuICAgIH1cclxufSlcclxuXHJcblxyXG4vLyDmiYDosJPkuKrmgKfljJbmk43kvZxcclxuXHJcbi8vIOa3u+WKoOS4gOadoeWOhuWPsuiusOW9lVxyXG5oaXN0b3J5LmFkZCgpXHJcblxyXG4vLyDliKDpmaTkuIDmnaHljoblj7LorrDlvZVcclxuaGlzdG9yeS5yZW1vdmUoKVxyXG5cclxuLy8g5Yig6Zmk5omA5pyJ5Y6G5Y+y6K6w5b2VXHJcbmhpc3RvcnkuY2xlYXIoKVxyXG5cclxuLy8g6ZqQ6JeP5Y6G5Y+y6K6w5b2V6KGo5Y2VXHJcbmhpc3RvcnkuaGlzdG9yeV9saXN0X3Nob3coKVxyXG5cclxuLy8g5bGV5byA5Y6G5Y+y6K6w5b2V6KGo5Y2VXHJcbmhpc3RvcnkuaGlzdG9yeV9saXN0X2hpZGUoKVxyXG5cclxuLy8g57uZ5Y6G5Y+y6K6w5b2V6KGo5Y2V5Yqg5byA5YWzXHJcbmhpc3RvcnkuaGlzdG9yeV9saXN0X25vX29mZigpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./js/index.js\n");

/***/ })

/******/ });