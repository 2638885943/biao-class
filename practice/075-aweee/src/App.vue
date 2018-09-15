<template>
  <div>
    
 <router-view></router-view>
  </div>
</template>

<script>
import Home from "./page/Home.vue";
import Detail from "./page/Detail.vue";
import Search from "./page/Search.vue";

export default {
  name: "app",
  components: {
    Home,
    Detail,
    Search,
  }
};
</script>

<style>

</style>
