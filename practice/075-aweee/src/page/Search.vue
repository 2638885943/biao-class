<template>
    <div>
        <Nav/>
       
      <div class="container">
   
           <form @submit.prevent="on_submit(keyword)">
              
            <input type="serch" class="icon" v-model="keyword">
             
        </form>
           <div class="card round filter">
           <div class="col-lg-1 card-item"><Dropdown api="category.name" placeholder="分类"/></div>
           <div class="col-lg-1 card-item"><Dropdown api="breed.name" placeholder="种类"/></div>
           <div class="col-lg-1 card-item"><Dropdown api="pet.color" placeholder="毛色"/></div>
           <div class="col-lg-1 card-item">价格</div>
          
           <div class="col-lg-1 card-item">性格</div>
           <div class="col-lg-1 card-item">性别</div>
           <div class="col-lg-1 card-item">已绝育</div>
           <div class="col-lg-2 card-item">接种疫苗</div>
           

       </div>
      </div>


      <div class="main">
          <div class="container row result">
             
               <div class="col-lg-6 " v-for="(row,index) in pet_list" :key="index">
     
                 <div class="result-card">
                     <router-link :to="{path:'/detail',query:{pet_id:row.id}}">
                         <img :src="row.cover_url" alt="图片有事来不了了" class="round">
                     </router-link>
                 </div>
              
              </div>
              
              
            
         

          </div>
      </div>
      
    </div>
</template>

<script>
import "../../font_779410_v6q6yvfv46.js";
import api from "../lib/api.js";
import Nav from "../components/Nav.vue";

import main from "../css/main.css";
import Dropdown from "../components/Dropdown";

export default {
  components: { Nav, Dropdown },
  mounted() {},
  data() {
    return {
      keyword: '',
      pet_list: []
    };
  },
  methods: {
    on_submit() {
      if (!this.keyword) return;

      api("pet/read", {
        // query: `where("title" contains "${this.keyword}"  ) `
        where:
        [
            [ "title", 'in' ,this.keyword],
         ],
        
        //  query: `where("category_id" = 1 )`
      }).then(r => {
          
        console.log(r.data);
        this.pet_list = r.data;
      });
    }
  }
};
</script>

<style scoped>
.card {
  border: 4px solid #521f4d;
}
.card .card-item {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #2e5d28;
}
.result-card {
  padding: 5px;
}
input {
  width: 98%;
  height: 1.5rem;
  font-size: 1.5rem;
  padding: 5px;
  margin: 5px;
}

</style>
