<template>
    <div>
 <h2>创建订单</h2>
<form>
     <div>商品名：{{product.title}}</div>
 <div>价格：{{product.price}}</div>
 <div>数量：{{current.count}}只</div>
 <div>总价：{{total}}元</div>
 <button @click="go()">点击确认生成订单</button>
 <button v-if="order_id">
     <router-link :to="{path:'/admin/payment',query:{order_id}}">前往付款页付款</router-link>
     </button>

</form>



 
    </div>
</template>

<script>
import api from "../../lib/api.js";
export default {
  mounted() {
    console.log(this.$route.query);
    this.current = Object.assign({}, this.current, this.$route.query);
    console.log(this.current);
    this.find_product_amg(this.current.pet_id);
  },
  computed: {
    total() {
      if (!this.product.price) this.product.price = 0;

      if (!this.current.count) this.current.count = 1;

      return this.product.price * this.current.count;
    }
  },

  data() {
    return {
      current: {},
      product: {},
      order_id:null,
    };
  },
    methods: {
    find_product_amg(id) {
      api("pet/find", { id }).then(r => {
        this.product = r.data;
      });
    },
    go(fn){
       console.log(this.product.title)
       console.log(this.total)
       this.current.product_info = this.product.title;
       this.current.sum=this.total
  
        api('order/create',this.current)
        .then(r=>{
           this.order_id= r.data.id
           console.log(this.order_id)
         
        });
        // api('order/read')
      
    },
    
  },
};
</script>

<style>
</style>
