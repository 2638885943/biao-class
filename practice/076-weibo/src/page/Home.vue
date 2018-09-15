// 1 判断当前用户是否为登录状态 如果是未登录状态就显示所有推文(通过api发送请求 获得推文(tweet)表单 )
                              如果是登录状态就显示当前用户以及该用户所关注的人的推文(通过api发送请求 获得推文(tweet)表单 )
                              
// 2 展示已关注用户和推荐关注的用户 (通过api发送请求 获得用户(user)表单 )
// 3 发推 (使用当前用户id 通过api发送请求在 tweet表单中生成一条tweet数据)
// 4 关注 (使用当前用户id 通过api发送请求在 _bind_user_user(中间表单)中生成一bind条数据)
// 5 使用函数控制 关注/取消关注的 转换

<template>
  <div>
  <Nav/>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Fooder from "../components/Fooder.vue";

export default {
  components: { Nav, Fooder }
};
</script>

<style>
</style>
