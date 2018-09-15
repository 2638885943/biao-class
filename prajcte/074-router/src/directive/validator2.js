import Vue from 'vue';

/**
 * @var {string} 错误信息的语言
 */

// let lang;

/**
 * @var 所有的<input>
 */
// let el_input_list = [];
//
// /**
//  * @var {HTMLButtonElement} 当前指令所属表单
//  */
// let el_submit;


function parse_string_rule (str) {
  let rule = {};

  str
    .split('|')
    .forEach(r => {
      let arr = r.split(':');
      let key = arr[ 0 ]; // 例子：'min_length:4'，那么key就等于min_length
      let val = arr[ 1 ]; // 例子：'min_length:4'，那么val就等于4

      // 如果只有键没有值，例子：'required'，那么val就等于true
      val = val === undefined ? true : val;

      rule[ key ] = val;
    });

  return rule;
}

// 各种验证规则
const valid = {
  /**
   * 验证用户名格式
   * @param val
   * @return {boolean}
   */
  username (val, lang) {
    const lang_conf = {
      zh : '用户名不合法，只能包含字母和数字',
      en : 'Invalid username',
    };

    const re = /^[a-zA-Z0-9]*$/;
    let r    = re.test(val);

    if (!r)
      throw lang_conf[ lang ];

    return r;
  },

  /**
   * 验证非空
   * @param val
   * @return {boolean}
   */
  required (val, lang) {
    const lang_conf = {
      zh : '此项为必填项',
      en : 'This field is required',
    };

    if (typeof val === 'number')
      return true;

    let r = !!val;

    if (!r)
      throw lang_conf[ lang ];

    return r;
  },

  /**
   * 验证最小长度
   * @param val
   * @param min
   * @return {boolean}
   */
  min_length (val, lang, min) {
    const lang_conf = {
      zh : '此项的最小长度为' + min,
      en : 'Minimal length: ' + min,
    };

    let r = val.length >= parseInt(min);

    if (!r)
      throw lang_conf[ lang ];

    return r;
  },

  /**
   * 验证最大长度
   * @param val
   * @param max
   * @return {boolean}
   */
  max_length (val, lang, max) {
    const lang_conf = {
      zh : '此项的最大长度为' + max,
      en : 'Maximum length: ' + max,
    };

    let r = val.length <= parseInt(max);

    if (!r)
      throw lang_conf[ lang ];

    return r;
  },
};

/**
 * 设置表单是否合法，其实就是更新form_valid全文变量
 * @param valid
 */
// function set_form_valid (valid) {
//   form_valid = valid;
// }

/**
 * 检查所有input是否合法（即有没有invalid属性）
 */
function validate_form (el_input_list, el_submit) {
  let invalid = false;

  el_input_list.forEach(input => {
    if (input.getAttribute('invalid') === 'true') {
      invalid = true;
    }
  });

  if (invalid)
    disable_submit(el_submit);
  else
    enable_submit(el_submit);
}

/**
 * 禁用提交按钮
 */
function disable_submit (el_submit) {
  el_submit.setAttribute('disabled', 'disabled');
}

/**
 * 启用提交按钮
 */
function enable_submit (el_submit) {
  el_submit.removeAttribute('disabled');
}

function init_form_state (form, lang) {
  let el_submit = form.querySelector('[type=submit]');
  form.$state   = {
    lang          : lang,
    el_submit     : el_submit,
    el_input_list : [],
  };
  // form.$state.el_input_list = form.$state.el_input_list || [];
}

function track_input (form, input) {
  form.$state.el_input_list.push(input);
}

function go (el_form, el_input, el_error, rule) {
  {
    let val     = el_input.value;
    let invalid = false;

    // 由于错误信息可能不止一条（不是用户名还没满足最小长度）
    // 所以每一条错误信息都要一个独立的元素包含：
    // <div class="error">错误1...</div>
    // <div class="error">错误2...</div>
    let inner_msg = '';

    /*
      {
        required: true,
        min_length: 2
      }
    */
    for (let type in rule) {
      // type是每一类验证规则如'required'或'username'
      let arg       = rule[ type ]; // 获取传参，如'min_length:4'中的'4'
      let validator = valid[ type ]; // 获取验证函数
      try {
        validator(val, el_form.$state.lang, arg);
      } catch (e) {
        // set_form_valid(false);
        invalid = true;
        inner_msg += `<div class="error">${e}</div>`;
      }
    }

    if (invalid)
      el_input.setAttribute('invalid', 'true');
    else
      el_input.setAttribute('invalid', 'false');

    if (el_input.getAttribute('dirty') === 'true') {
      el_error.innerHTML = inner_msg;
    }
    validate_form(el_form.$state.el_input_list, el_form.$state.el_submit);
  }
}


export default Vue.directive('validator', {
  /**
   * 当此指令插入DOM中的一瞬间
   * @param el
   * @param binding
   */
  inserted : function (el, binding) {
    // 先拿到字符串验证规则
    let rule     = binding.value; // 'required|username|min_length:4'
    let selector = el.getAttribute('error-el'); // 用于显示错误信息的选择器
    let error_el = document.querySelector(selector); // 用于显示错误信息的元素

    /**
     * @var {HTMLFormElement} 当前指令所属表单
     */
    let el_form = el.closest('form');

    // 将表单内所有input的状态存在当前<input>所在的<form>上，如果没有存过，就初始化
    if (!el_form.$state) {
      let lang = el.getAttribute('error-lang') || 'zh'; // 错误信息的语言
      init_form_state(el_form, lang);
    }

    // 将新的input
    track_input(el_form, el);

    // 如果规则直接是字符串就解析字符串为对象规则
    if (typeof rule === 'string')
      rule = parse_string_rule(binding.value); // {required: true, min_length: 4}

    go(el_form, el, error_el, rule);

    // 当输入框有字符输入时开始验证
    el.addEventListener('keyup', (e) => {
      go(el_form, el, error_el, rule);
    });

    el.addEventListener('focus', () => {
      el.setAttribute('dirty', 'true');
    });

    /**
     * 开始验证并显示错误信息
     */
  },
});

