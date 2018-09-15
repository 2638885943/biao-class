<template>
  <div :style="{width: width}" class="card side-nav">
  <router-link class="nav-item" to="/admin/user">用户管理</router-link>
    <router-link  class="nav-item" to="/admin/vehicle">车辆管理</router-link>
    <router-link class="nav-item" to="/admin/model">型号管理</router-link>
    <router-link class="nav-item" to="/admin/brand">品牌管理</router-link>
    <router-link class="nav-item" to="/admin/design">车型管理</router-link>
    <router-link  class="nav-item" to="/admin/report">质检管理</router-link>
   
    
    
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