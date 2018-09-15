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
                       <h2>分类管理</h2>
                     
                     <div class="tool-bar">
                     <form @submit="search($event)">
                         <input type="text" placeholder="请搜索">
                         <button @submit="search($event)">搜索</button>

                     </form>
                        <form @submit="search_by_username($event)"></form>

                     <button @click="show_form=!show_form">创建分类</button>
                     </div>

                     <div class="content" v-if="show_form">
                         <form @submit="cou($event)">
                             <div class="input-conturol">
                                 <label>分类名</label>
                                 <input type="text" v-model="current.name">
                             </div>
                              <div class="input-conturol">
                                 <label>封面</label>
                                 <input type="text" v-model="current.cover_url">
                             </div>
                              <div class="input-conturol">
                                 <label>是否首页推广</label>
                                 <input type="checkbox" v-model="current.hot">
                                 
                             </div>
                             <button @submit="cou($event)">提交</button><button @click="show_form=false">取消</button>

                         </form>
                     </div>
                 
                  <div class="table">
                      <table>
                          <thead>
                              <td>分类名</td>
                              <td>是否首页推广</td>
                              <td>编辑</td>
                          </thead>
                          <tr v-for="(row,index) in list" :key="index">
                              <td>{{row.name ? row.name: '-'}}</td>
                              <td>{{row.hot ? '是': '否'}}</td>
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

    
 
    </div>
</template>

<script>
import Nav from "../../components/Nav.vue";
import AdminNav from "../../components/AdminNav.vue";

import AdminPage from '../../mixins/AdminPage.vue'
import Pagination from '../../components/Pagination.vue'

export default {
  components: { Nav, AdminNav,Pagination },
  mixins:[AdminPage],
  mounted(){
      this.read();
      },
  data(){
      return{
          model:'category',
      
          searchabke:['name'],

      }
  },
  methods:{

  }
};
</script>

<style scoped>

</style>
