; (function () {
    'use strict';
    var el_search = document.getElementById('search-form');
    var el_input = document.getElementById('search-input');
    var kwd

    init()

    function init() {
        el_search.addEventListener('submit', function (e) {
            e.preventDefault();

        });
    }
})();