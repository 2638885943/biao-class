<template>
  <div>
    <Nav/>
    <div class="header">
      <div class="container por">
        <form @submit="submit" class="main-form" autocomplete="off">
          <h1>登录</h1>
          <div v-if="login_failed" class="error-list">
            <div class="error">用户名或密码有误</div>
          </div>
          <div class="input-control">
            <!--<label for="username">用户名</label>-->
            <input v-validator="'required'"
                   v-model="current.$unique"
                   type="text"
                   placeholder="用户名">
          </div>
          <div class="input-control">
            <!--<label for="password">密码</label>-->
            <input id="password"
                   v-model="current.password"
                   type="password"
                   placeholder="密码">
          </div>
          <div class="input-control">
            <button class="btn-primary" type="submit">登录</button>
          </div>
          <div class="input-control small muted">
            没有账号？<router-link to="/Sigup">注册账号</router-link>
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
  import '../css/auth.css';

  import Nav from '../components/Nav.vue';
  import api from '../lib/api';

  // import validator from '../directive/validator';
  // import red       from '../directive/red';

  // api('user/update', {
  //   id       : 25,
  //   username : 'whh',
  // });

  export default {
    // directives : { validator },
    data () {
      return {
        current      : {},
        login_failed : false,
      };
    },
    components : { Nav },
    methods    : {
    //  当表单提交时
      submit (e) {
        //   利用传进来的e(event)实现禁用默认跳转行为
        e.preventDefault();
        let unique, password;

        //  如果没有被赋值过的unique(用户名)或者没有被赋值过的password(密码)
        // 也就是用户没输入用户名或密码的时候
        if (!(unique = this.current.$unique) ||
          !(password = this.current.password))
        //  直接返回
         return;

        // 发送read(查看)user(用户表单)请求
        api('user/read', {
          where : {
            or : [
              [ 'username', '=', unique ],
              [ 'phone', '=', unique ],
              [ 'mail', '=', unique ],
            ],
          },
        }).then(r => {
          let row;
        //   如果用户名不存在或者 密码比对也不为真(即输入的密码不是在数据库中存的密码)的时候
          if (!(row = r.data[ 0 ]) || row.password !== password) {
            // 将login_falied(登陆失败)的值赋值成true(真)
            this.login_failed = true;
            // 返回
            return;
          }
         
        //  当login_falied(登陆失败)的值为false(假)的时候
          this.login_failed = false;
        //   删除row.password的值
          delete row.password;
        //   将数据存入localStorage中
          localStorage.setItem('uinfo', JSON.stringify(row));
          alert('Yo.');
        //  向路由router(即地址栏)推入一条斜杆使它跳转到Home页面
         this.$router.push('/');
        });
      },
    },
  };
</script>

<style scoped>
  .header {
    height: 400px;
    background-image: url(../assets/picture/4.jpg);
    /* background-repeat: no-repeat; */
    -webkit-background-size: contain;background-size: contain;
  }

  .main-form {
    position: absolute;
    top: 60px;
    right: 10px;
    width: 240px;
  }
</style>
