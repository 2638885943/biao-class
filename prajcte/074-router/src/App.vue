<template>
  <div>
    <!-- <Dropdown 
    
    :list="[
    {name:'星辰大海', vleue:1},
    {name:'中土魔界', vleue:2},
    {name:'青冥天下', vleue:3},
    {name:'琉璃净土', vleue:4},

    ]"/> -->
  <!-- <Location/> -->
<!-- <User/> -->
<!-- <Vehicle/> -->
    <!-- <Search/> -->
    <!-- <Home/> -->
    <!-- <Login/> -->
    <!-- <Detail/> -->
    <!-- <Sigup/> -->
    <!-- <Me/> -->
<router-view></router-view>
  </div>
</template>

<script>
import Location from './components/Location.vue'
import Search from "./page/Search.vue"
import Dropdown from "./components/Dropdown.vue";
import Me from "./page/settings/Me.vue";
import Home from "./page/Home.vue";
import Detail from "./page/Detail.vue";
import Login from "./page/Login.vue";
import Sigup from "./page/Sigup.vue";
import User from "./page/admin/User";
import Vehicle from './page/admin/Vehicle';
export default {
  name: "app",
 

  components: {
    Home,
    Detail,
    Login,
    Sigup,
    Me,
    Dropdown,
    Search,
    User,
    Vehicle,
    Location,
  }
};
</script>

<style>
</style>
