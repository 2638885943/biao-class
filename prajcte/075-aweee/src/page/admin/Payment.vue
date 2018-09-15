<template>
    <div>
      {{current}}
      
        <h2>支付页面</h2>
   <div>该订单的支付金额为 {{current.sum}}</div>
    <div>
        选择支付方式
       <div>
          <input type="radio" v-model="current.pay_bay" value="wechat" >
          <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-weixinzhifu-copy"></use>
</svg>

        <label>微信</label>
        <svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-ziyuan"></use>
</svg>
        <input type="radio" v-model="current.pay_bay" value="alipay">
         <label>支付宝</label>
       </div>
        
    </div>

    <div v-if="current.pay_bay == 'alipay'">
     
        确认使用支付宝支{{current.pay_bay}}付？
      <div>
        <button @click="pay($route.query.order_id,current.sum,current.pay_bay)">是</button>
        <button @click="select()">否</button>
      </div>
      
        <a v-if="payment_url" :href="payment_url">在线支付</a>
    </div>
     <div v-if="current.pay_bay == 'wechat'">
        确认使用微信{{current.pay_bay}}支付？
      
        <div>
        <button @click="pay($route.query.order_id,current.sum,current.pay_bay)">是</button>
        <button @click="select()">否</button>
      </div>
        <div class="col-lg-2">
          <img v-if="payment_url" :src="payment_url" alt="图片正在赶来的路上">
         <button @click="verify ()">支付完成</button>
        </div>
    </div>
   
    </div>
</template>

<script>
import "../../../font_779410_v6q6yvfv46.js";
import api from "../../lib/api.js";
export default {
  mounted() {
    this.current = Object.assign({}, this.current, this.$route.query);
    this.find_order_amg(this.current);
  },
  data() {
    return {
      current: {
        pay_bay: "alipay"
      },
      payment_url: null
    };
  },
  methods: {
    select() {
      console.log(1);
    },
    go_home() {
      this.$router.push("/");
    },
    find_order_amg(id) {
      api("order/find", { id }).then(r => {
        this.current = r.data[0];
      });
    },

    verify() {
      api("order/find", {
        id: this.current.id
      }).then(r => {
        if (r.data._paid) {
          alert("支付成功");
          this.go_home();
        } else alert("支付失败");
      });
    },

    pay(id, fee, pay_by) {
      if (fee > 0.02) fee = 0.02;

      api("order/payment/url", {
        id: id,
        fee: fee,
        pay_by: pay_by
      }).then(r => {
        this.payment_url = r.data.url || r.data.qrcode;
      });
    }
  }
};
</script>

<style>
</style>
<style type="text/css">
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
