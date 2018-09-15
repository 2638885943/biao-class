<template>
  <div>
    <Nav/>
    <div class="header">
      <div class="container por">
        <form @submit="submit" class="main-form" autocomplete="off">
          <h1>注册</h1>
          <div class="row tac tab-title">
            <!-- 当这个元素被点击的时候  将phone(电话)赋值给sigup_by(使用什么登陆)
            并给他添加一个active(被选中)类
            -->
            <div @click="signup_by = 'phone'" :class="'col-lg-6 ' + (signup_by == 'phone' ? 'active': '')">手机注册</div>
            <!-- 当这个元素被点击的时候  将mail(邮箱)赋值给sigup_by(使用什么登陆)
            并给他添加一个active(被选中)类
            -->
            <div @click="signup_by = 'mail'" :class="'col-lg-6 ' + (signup_by == 'mail' ? 'active': '')">邮箱注册</div>
          </div>
          <!--<div class="error-list">-->
          <!--<div class="error">用户名或密码有误</div>-->
          <!--</div>-->
          
          <!-- 使用v-if判断 当 signup_by == 'phone'的值为true(真)    也就是signup_by(登陆方式)全等于phone(手机)时
               显示该元素 否则将其从Dom元素中删除
           -->
          <div v-if="signup_by == 'phone'" class="input-control">
            <label for="phone">手机号</label>
            <input
                    v-model="current.phone"
                    error-el="#phone-error"
                    id="phone"
                    type="text"
                    placeholder="whh">
            <div class="error-list">
              <div id="phone-error"></div>
            </div>
          </div>
          <!-- 使用v-if判断 当 signup_by == 'mail'的值为true(真)    也就是signup_by(登陆方式)全等于mail(邮箱)时
               显示该元素 否则将其从Dom元素中删除
           -->
          <div v-if="signup_by == 'mail'" class="input-control">
            <label for="mail">邮箱</label>
            <input
                    v-model="current.mail"
                    error-el="#mail-error"
                    id="mail"
                    type="text"
                    placeholder="whh">
            <div class="error-list">
              <div id="mail-error"></div>
            </div>
          </div>
          <div class="input-control">
            <label for="vcode">验证码</label>
            <div class="btn-group">
              <input style="width: 70%;"
                     id="vcode"
                     v-model="current.vcode"
                     type="text"
                     placeholder="whh">
             <!-- 当前按钮被点击时 执行send_code(发送编码）函数  通过使captcha.countdown(验证码倒计时)非零化 disabled(禁用)掉当前元素-->
              <button @click="send_code" style="width: 30%;" type="button" :disabled="captcha.countdown != 0">
                <!-- 如果计时器开始计时 就显示计时器 -->
                <span v-if="captcha.countdown">{{captcha.countdown}}</span>
                <!--否则显示 -->
                <span v-else>发送验证码</span>
              </button>
            </div>
            <div class="error-list">
              <div v-if="invalid_code" id="vcode-error">验证码有误</div>
            </div>
          </div>
          <div class="input-control">
            <label for="password">密码</label>
            <input
                    v-model="current.password"
                    error-el="#password-error"
                    id="password"
                    type="password">
            <div class="error-list">
              <div id="password-error"></div>
            </div>
          </div>
          <div class="input-control">
            <label for="password2">重复密码</label>
            <input v-model="current.password2"
                   id="password2"
                   type="password">
          </div>
          <div class="input-control">
            <button class="btn-primary" type="submit">注册</button>
          </div>
          <div class="input-control small muted">
            已有账号？<a href="#/login">登录</a>
          </div>
        </form>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad blanditiis, sed! A culpa enim eveniet explicabo
        omnis quibusdam ullam vel. Animi aspernatur cupiditate incidunt nostrum quae, quidem totam. Labore, sequi!
      </div>
    </div>
  </div>
</template>

<script>
import "../css/auth.css";
import Nav from "../components/Nav.vue";
import api from "../lib/api";

export default {
  // directives : { validator },
  data() {
    return {
      captcha: {
        timer: null,
        countdown: 0
      },
      // 登陆方式：默认为‘phone’
      signup_by: "phone",
      //
      current: {},
      //  编码(验证码)
      code: "",
      // 无效编码(无效验证码)
      invalid_code: false
    };
  },
  components: { Nav },

  methods: {
    // 当表单提交时
    submit(e) {
      // 防止跳转
      e.preventDefault();
      //写入 this.current.vcode !== this.code;
      // 即this.code(后端返回的验证码)和this.current.vcode(输入框里输入的验证码)
      // 不一致时 返回结果 true
      // 将true 赋值给this.invalid_code
      
      this.invalid_code = this.current.vcode !== this.code;
      
      // 当this.invalid_code(无效验证码)为真时 返回
      if (this.invalid_code) return;

      if (this.signup_by == "mail") delete this.current.phone;
      else delete this.current.mail;

      // 如果没有用户名，就默认用已填的邮箱或手机号作为用户名
      !this.current.username &&
        (this.current.username = this.current[this.signup_by]);

      api("user/create", this.current).then(r => {
        alert("注册成功!");
        this.$router.push("/");
      });
    },

    send_code() {
      if (this.captcha.countdown) return;

      let action, by_mail;

      this.captcha.countdown = 60;

      action = "sms";

      if ((by_mail = this.signup_by == "mail")) action = "mail";

      if ((by_mail && !this.current.mail) || (!by_mail && !this.current.phone))
        return;

      this.captcha.timer = setInterval(() => {
        if (this.captcha.countdown == 0) {
          clearInterval(this.captcha.timer);
          return;
        }

        this.$set(this.captcha, "countdown", this.captcha.countdown - 1);
      }, 1000);

      api(`captcha/${action}`, {
        phone: this.current.phone,
        mail: this.current.mail
      }).then(r => {
        this.code = atob(r.data.result);
      });
    }
  }
};
</script>

<style scoped>
.main-form {
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}

.footer {
  margin-top: 20px;
}

.tab-title {
  color: #777;
  margin-bottom: 10px;
}

.tab-title > * {
  cursor: pointer;
  padding: 5px;
}

.tab-title > *.active {
  color: #fd521d;
  border-bottom: 2px solid #fd521d;
}
</style>
