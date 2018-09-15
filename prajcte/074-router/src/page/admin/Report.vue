
<template>
  <div>
    <Nav :push-down="true"/>
    <div>
      <div class="container row">
        <div class="col-lg-3">
          <AdminNav/>
        </div>
        <div class="col-lg-9">
          <div class="content card">
            <h2>检测报告列表</h2>
            <div class="tool-bar">
              <div class="btn-group">
                <button @click="show_form=!show_form">创建检测报告</button>
              </div>

              <form @submit="search($event)">
                <input type="search" v-model="keyword"
                       placeholder="搜标题/描述" autofocus>
                <button type="submit" hidden>搜</button>
               <div>
                <small>共有{{total_check}}条检测项</small>

               </div>
              </form>
            </div>

            <form v-if="show_form" @submit="cou($event)">
              <div>
                <button type="button" @click="check_all()">全部通过</button>
                <button type="button" @click="uncheck_all()">取消全选</button>

                <button type="button" @click="check_random()">随机通过</button>

              </div>
            
               <div v-if="prop.display_name" v-for="(prop,key) in structure" :key="key">
                   <label>
                      <input type="checkbox" v-model="current[key]">
                      
                      {{prop.display_name}}
                   </label>
                   
               </div>
            
              <div class="input-control">
                <div class="btn-group">
                  <button class="btn-primary" type="submit">提交</button>
                  
                  <button @click="show_form=false" type="button">取消</button>
                </div>
              </div>
            </form>
            <div class="table">
              <table>
                <thead>
                <th>检测报告</th>
                <th>通过</th>
                <th>通过率</th>
                <th>操作</th>
                </thead>
                <tbody>
                <tr v-for="row in list">
                  <td>检测车辆</td>
                  <td>{{passed_count = compute_passed_check(row)}}</td>
                  <td>{{passed_count/total_check | percentage}}</td>
                  <td>
                    <div class="btn-group">
                      <button class="btn-small" @click="set_current(row)">编辑</button>
                      <button class="btn-small" @click="remove(row.id)">删除</button>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            
            

            </div>

            <Pagination :totalCount="total" :limit="limit" :onChange="on_page_change"/>
          </div>
        </div>
      </div>
    </div>
    <AdminFooter/>
  </div>
</template>

<script>
import "../../css/admin.css";
import AdminPage from "../../mixin/AdminPage";
import Dropdown from "../../components/Dropdown";
import api from "../../lib/api";

export default {
  mounted() {
    this.get_structure();
  },
  components: { Dropdown },
  data() {
    return {
      brand_list: [],
      structure: {},
      model: "report",
      searchable: ["name"],
      with: [],
      total_check: 0
    };
  },
  methods: {
    //  获取数据结构
    get_structure() {
      api("MODEL/FIND", { name: "report" }).then(r => {
        this.structure = r.data.structure;
        this.compute_total_check();
        // console.log(this.structure);
      });
    },
    // 获取数据
    each_prop(fn) {
      for (let key in this.structure) {
        let prop = this.structure[key];

        if (fn) {
          fn(prop, key);
        }
      }
    },

    // 拿到检测项目总条数
    compute_total_check() {
      let count = 0;
      // 使用each_prop函数循环数据
      this.each_prop(prop => {
        //  检测其中的每一条是否有prop.dislay_name(当前数据的中文描述) 如果有count(检测项目条数)自增1
        prop.display_name && count++;
      });
      // 将循环后的count(检测项目条数)变量赋值给data中的total_check(总数检测)
      this.total_check = count;
    },
    // 控制所有选项打勾状态
    check_all(check = true) {
      this.each_prop((prop, key) => {
        if (!prop.display_name) return;

        // 使用this$方法给当前这条数据添加ckeck属性
        this.$set(this.current, key, check);
      });
    },

    //取消选中
    uncheck_all() {
      this.check_all(false);
    },
    //随机选中
    check_random() {
      this.each_prop((prop, key) => {
        if (!prop.display_name) return;

        // 使用this$方法给当前这条数据添加ckeck属性
        this.$set(this.current, key, Math.random() >= 0.5);
      });
    },
    // 通过条数
    compute_passed_check(row) {
      
      let count = 0;
      row = row || this.current;
      // 将匿名函数传入each_prop中 它会在each_prop本身的代码执行玩后之行我们传入的个性化代码
      this.each_prop((prop, key) => {
        prop.display_name && row[key] && count++;
       
      });
      return count;
     
    },
    
  },

  mixins: [AdminPage]
};
</script>

<style scoped>
h2 {
  margin-top: 0;
  font-size: 16px;
}

.table {
  overflow: auto;
}

th,
td {
  padding: 5px 10px;
  text-align: left;
}
</style>
