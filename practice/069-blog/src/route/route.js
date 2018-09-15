let instance;

class Route {
  /**
   * 初始化
   */
  constructor () {
    /*默认为首页，但如果地址栏直接有hash就去已有的地址*/
    this.current      = this.parse_hash(window.location.hash) || 'home';
    this.el_page_list = document.querySelectorAll('.page'); // 所有的页面
    this.detect_click(); // 监听页面中所有的点击
    this.detect_hash_change(); // 监听地址变化
    this.render(); // 渲染，因为this.current已经设置了
  }

  /**
   * 监听地址改变
   */
  detect_hash_change () {
    window.addEventListener('hashchange', () => {
      /*如果发生改变就去对应页面*/
      this.go(window.location.hash);
    });
  }

  /**
   * 监听页面中所有的点击事件
   * */
  detect_click () {
    document.addEventListener('click', e => {
      var target = e.target;

      /*看看点击的是哪类元素*/
      switch (target.nodeName) {
        /*如果是<a>元素*/
        case 'A':
          /*如果是外站链接就停止后续操作*/
          if (target.host)
            return;

          /*去对应地址*/
          this.go(target.href);
          break;
      }

    });
  }

  /**
   * 更改路由
   * @param {string} hash 原始hash路径，如: #/about
   * */
  go (hash) {
    /*通过原始hash解析真正的页面名称 /#/home => home */
    let old_state = this.current;
    let new_state = this.parse_hash(hash);

    /*如果页面新旧地址相同，就没有必要切换*/
    if (old_state === new_state)
      return;

    this.current = new_state;

    /*渲染新页面*/
    this.render();
  }

  /**
   * 渲染页面
   * @param {string} 页面名称
   * */
  render (path) {
    var content;
    path = path || this.current;

    /*先隐藏所有页面*/
    this.hide_all();

    /*选中当前页面*/
    content = document.getElementById(path);

    /*显示当前页面*/
    content.hidden = false;
  }

  /**
   * 隐藏所有页面
   * */
  hide_all () {
    this
      .el_page_list
      .forEach(el => {
        el.hidden = true;
      })
  }

  /**
   * 通过原始hash解析页面名称
   * */
  parse_hash (hash) {
    var hash_arr = hash.split('/');
    return hash_arr[ hash_arr.length - 1 ];
  }
}

/*初始化*/
function init () {
  if (!instance)
    instance = new Route();
}


export default { init };