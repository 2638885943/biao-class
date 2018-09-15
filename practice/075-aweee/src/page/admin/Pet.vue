<template>
    <div>
          <Nav/>
        <div class="main">
            <div class="container">
              
         <div class="admin-panel">
           <div class="col-lg-3">
               <div class="wh">
                   <AdminNav class="round"/>
               </div>
           </div>
           <div class="col-lg-9">
               <div class="wh">
                   <div class="content card round">
                       <h2>宠物管理</h2>
                     
                     <div class="tool-bar">
                     <form @submit="search($event)">
                         <input type="text" placeholder="请搜索">
                         <button @submit="search($event)">搜索</button>

                     </form>
                        <form @submit="search_by_username($event)"></form>

                     <button @click="show_form=!show_form">创建宠物</button>
                     </div>

                     <div class="content" v-if="show_form">
                         <form @submit="cou($event)">
                             <div class="input-conturol">
                                 <label>宠物名称</label>
                                 <input type="text" v-model="current.title">
                             </div>
                             <div class="input-conturol">
                                 <label>毛色</label>
                                 <input type="text" v-model="current.color">
                             </div>
                             <div class="input-conturol">
                                 <label>封面地址</label>
                                 <input type="url" v-model="current.cover_url">
                             </div>
                             <div class="input-conturol">
                                 <label>描述</label>
                                 <textarea v-model="current.description"></textarea>
                                 
                             </div>
                             <div class="input-conturol">
                                 <label>产地</label>
                                 <input type="text" v-model="current.origin">
                             </div>
                             <div class="input-conturol">
                                 <label>价格</label>
                                 
                                 <input type="number" v-model="current.price">
                             </div>
                             <div class="input-conturol">
                                 <label>性格</label>
                                 <input type="text" v-model="current.character">
                             </div>
                             <div class="input-conturol">
                                 <label>出生日期</label>
                                 <input type="date" v-model="current.birthday">
                             </div>
                            
                             <div class="input-conturol">
                                 <div class="col-lg-3">
                                     <label>以接种疫苗</label>
                                 <input type="checkbox" v-model="current.vaccinated">
                                 </div>
                                 <div class="col-lg-3">
                                      <label>已绝育</label>
                                 <input type="checkbox" v-model="current.neuter">
                                 </div>
                                 <div class="col-lg-3">
                                        <label>无传染病史</label>
                                 <input type="checkbox" v-model="current.disease">
                                 </div>

                                 <div class="col-lg-3">
                                     <label>纯种</label>
                                 <input type="checkbox" v-model="current.pure_breed">
                                 </div>

                             </div>
                            
                             
                             
                              <div class="input-conturol">
                                 <label>种类</label>
                             
                                 <Dropdown :list="category_list" 
                                :default="current.category_id"
                                 :displayKey="'name'"
                                :onSelect="set_category_id"
                                 />
                             </div>
                             <div class="input-conturol">
                                 <label>品种</label>
                            
                                 <Dropdown :list="breed_list" 
                                :default="current.breed_id"
                                 :displayKey="'name'"
                                :onSelect="set_breed_id"
                                 />
                             </div>
                              
                             <button @submit="cou($event)">提交</button><button @click="show_form=false">取消</button>

                         </form>
                     </div>
                 
                  <div class="table">
                      <table>
                          <thead>
                              <td>名称</td>
                              <td>毛色</td>
                              <td>价格</td>
                              <td>品种</td>
                              <td>种类</td>
                              <td>已绝育</td>
                              <td>无传染病史</td>
                              <td>编辑</td>
                          </thead>
                          <tr v-for="(row,index) in list" :key="index">
                              <td>{{row.title ? row.title: '-'}}</td>
                              <td>{{row.color ? row.color: '-'}}</td>
                              <td>{{row.price ? row.price: '-'}}元</td>
                              <td>{{row.breed_id ? row.breed_id: '-'}}</td>
                              <td>{{row.category_id ? row.category_id: '-'}}</td>
                              <td>{{row.neuter ? '是': '否'}}</td>
                              <td>{{row.disease ?'无': '有'}}</td>
                              <td>
                                  <button @click="set_current(row)">编辑</button>
                                  <button @click="remove(row.id)">删除</button>
                              </td>
                           </tr>
                      </table>
                      
                  </div>
<Pagination :totalCount="total" :limit="limit" :onChange="on_page_change"/>
                   </div>
               </div>
           </div>
       </div>
            </div>
        </div>

            <Fooder/>
 
    </div>
</template>

<script>
import api from "../../lib/api.js";
import Nav from "../../components/Nav.vue";
import AdminNav from "../../components/AdminNav.vue";
import Fooder from "../../components/Fooder.vue";
import AdminPage from "../../mixins/AdminPage.vue";
import Dropdown from "../../components/Dropdown.vue";
import Pagination from "../../components/Pagination.vue";

export default {
  components: { Nav, AdminNav, Fooder, Dropdown, Pagination },
  mixins: [AdminPage],
  mounted() {
    this.get_breed_list();
    this.get_category_list();
    this.read();
  },
  data() {
    return {
      model: "pet",

      searchabke: ["name"],
      category_list: [],
      breed_list: []
    };
  },
  methods: {
    set_category_id(row) {

      this.$set(this.current, "category_id", row.id);
    },
    set_breed_id(row) {

      this.$set(this.current, "breed_id", row.id);
    },
    get_category_list() {
      api("category/read").then(r => {
        this.category_list = r.data;
      });
    },
    get_breed_list() {
      api("breed/read").then(r => {
        this.breed_list = r.data;
      });
    }
  }
};
</script>

<style scoped>
</style>

