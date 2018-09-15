<template>
    <div>

    <div class="inform">
          <button @click="show=!show">点击创建整站通知</button>
          <form v-if="show" @submit.prevent="create_inform()">
            <div>
              <span>通知名称</span><input type="text" placeholder="充值提示/xxx" v-model="form.name">
            </div>
          <div>
            <span>通知内容</span><textarea v-model="form.content"></textarea>
          </div>
             <div>
            <span>开始时间</span><input type="date"  v-model="form.start_time">
          </div>
            <div>
            <span>结束时间</span><input type="date"  v-model="form.end_time">
          </div>
          <button type="submit">提交</button>
        </form>
    </div>

    </div>

</template>
<script>
import api from '../lib/api.js'
export default {
  data() {
    return {
     show:false,
     form:{},
    };
  },
  methods: {
   create_inform(){
   console.log(this.form);
   api('inform_tempalte/create',this.form)
      .then(r=>{
        console.log(r.data)
      })
   },
  }
};
</script>
<style>
</style>


