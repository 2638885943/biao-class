<template>
    <div>
        <Nav/>

         <div class="container">
              <div class=" slider">
           
                <img src="../img/home-1.jpg" alt="图谋了" class="round">

            </div>
         </div>
      
<div class="main">
        <div class="container row" v-for="(row,index) in hot_category_list" :key="index">
            <div class="nav1" >
                <div class="left col-lg-2">
                    <a href="#" class="nav1-item">{{row.name}}</a>
    
                </div>
            <div class="right col-lg-10">         
                <div v-for="(breed,index) in breed_list" :key="index">
                  
                    <a href="#"  v-if="row.id == b.category_id"
                    class="nav1-item" v-for="(b,index) in breed" :key="index">{{b.name}}</a>
                  

                    
                </div>
              </div>  
            </div>
           
          
               
                <div class="col-lg-4 col"  
                v-for="(row,index) in row.pet" :key="index">
          
                <router-link :to="{path:'/detail',query:{pet_id:row.id}}" >
                    <div class="wh">
                    <img :src="row.cover_url? row.cover_url : 'http://img.hb.aicdn.com/4823e6ca556a5090964b6c476db9eb0d8fce885c16fb5-biOPFp_fw658'" 
                    alt="图不知道跑到哪里去了" class="round">
                </div>
                </router-link>
                </div>

          
           
        </div>

        
</div>

<Fooder/>

    </div>
    
</template>

<script>
import api from "../lib/api.js";
import Nav from "../components/Nav.vue";
import Fooder from "../components/Fooder.vue";

export default {
  components: { Nav, Fooder },
  mounted() {
    this.get_pet_list();
    this.get_category_list();
    this.a();
  },
  data() {
    return {
      pet_list: [],
      hot_category_list: [],
      breed_list: [],
      pet:[],
    
    };
  },
  methods: {
    get_pet_list() {
      api("pet/read").then(r => {
        this.pet_list = r.data;
      });
    },
    get_category_list() {
      api("category/read", { where: { hot: true } }).then(r => {
        this.hot_category_list = r.data;
        this.get_breed_list_by_category_id();
        this.get_pet_by_cat();
      });
    },
    get_breed_list_by_category_id() {
      this.hot_category_list.forEach(row => {
    
        api("breed/read", { where: { category_id: row.id } }).then(r => {
          this.breed_list.push(r.data);
        });
      });
    },
    get_pet_by_cat(){
        this.hot_category_list.forEach(row => {
        
        api("pet/read", { where: { category_id: row.id } }).then(r => {
         this.$set(row, 'pet', r.data);
   
        });
      });
    },
    a(){
        api('category/search',{})
    }
  }
};
</script>

<style scoped>
.slider {
  margin: 10px 0;
}
</style>

