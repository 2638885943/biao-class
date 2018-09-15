<template>
  <div :style="{width: width}" class="card side-nav">
  <router-link class="nav-item" to="/admin/user">用户管理</router-link>
    <router-link  class="nav-item" to="/admin/category">种类管理</router-link>
    <router-link class="nav-item" to="/admin/breed">品种管理</router-link>
    <router-link class="nav-item" to="/admin/pet">宠物管理</router-link>
    <router-link class="nav-item" to="/admin/order">订单管理</router-link>
    <router-link class="nav-item" to="/admin/color">颜色管理</router-link>
    <router-link class="nav-item" to="/admin/character">性格管理</router-link>
    <router-link class="nav-item" to="/admin/carousel">轮播图片管理</router-link>


    
   
    
    
  </div>
</template>

<script>
import "../css/sidenav.css";
export default {
  props: ["width"],
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    on() {
      this.isActive = true;
    }
  }
};
</script>

<style scoped>
.active {
  background: #000;
}
</style>