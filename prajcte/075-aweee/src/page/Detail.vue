<template>
    <div>
        <Nav/>
        <div class="container row">
             <div class="slider pro">


                <div>
                   <img :src="pet_msg.cover_url" alt="图谋了" class="round">
                 
                </div>

                <div class="mask round"></div>

                <div class="detail-list">

                    <div class="detail-item">产地：{{pet_msg.origin? pet_msg.origin :'美利坚合众国' }}</div>
                    <div class="detail-item">品种：{{pet_msg.id? pet_msg.id :'美利坚合众国' }}</div>


                </div>
                {path:'/detail',query:{pet_id:row.id}}
                <router-link :to="{path:'admin/neworder',query:{pet_id:this.id}}">
                    <button class="buy" @click="this.$router.push({path:'neworder',query:{pet_id:this.id}})"> {{pet_msg.price}}￥购买</button>
                </router-link>
    </div>

        </div>

               
    <div class="main">
        <div class="container row">
         <div class="nav">
          <div class="col-lg-12 main-text">
              <hr style="height: 4px; background: #f8e735;"> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae vel est velit ducimus, consequatur magni laboriosam sequi soluta exercitationem suscipit commodi nihil consequuntur, laborum nesciunt voluptates iusto eligendi possimus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius obcaecati minima amet delectus optio a sequi provident natus, perspiciatis fugiat maiores ad, autem earum quia ab veniam similique corporis possimus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae vel est velit ducimus, consequatur magni laboriosam sequi soluta exercitationem suscipit commodi nihil consequuntur, laborum nesciunt voluptates iusto eligendi possimus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae vel est velit ducimus, consequatur magni laboriosam sequi soluta exercitationem suscipit commodi nihil consequuntur, laborum nesciunt voluptates iusto eligendi possimus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae vel est velit ducimus, consequatur magni laboriosam sequi soluta exercitationem suscipit commodi nihil consequuntur, laborum nesciunt voluptates iusto eligendi possimus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae vel est velit ducimus, consequatur magni laboriosam sequi soluta exercitationem suscipit commodi nihil consequuntur, laborum nesciunt voluptates iusto eligendi possimus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vitae vel est velit ducimus, consequatur magni laboriosam sequi soluta exercitationem suscipit commodi nihil consequuntur, laborum nesciunt voluptates iusto eligendi possimus.
            
            
            </div>
         </div>
        </div>
    </div>



    <Fooder/>
 

  
    </div>
</template>

<script>
import api from '../lib/api'
import Nav from "../components/Nav.vue";
import Fooder from "../components/Fooder.vue";
import main from "../css/main.css";

export default {
  components: { Nav, Fooder },
  mounted() {
       console.log(this.$route.query.pet_id)
    this.id = this.$route.query.pet_id;
    console.log(this.id)
    this.get_pet_msg_by_id(this.id);
  },
  data() {
    return {
      pet_msg: [],
      id:null,
    };
  },
  methods: {
      get_pet_msg_by_id(){
       console.log(1)
          api('pet/find',{id:this.id})
          .then(r=>{
              this.pet_msg=r.data
          })
      }
  }
};
</script>

<style scoped>
/* /组件的css应该是全局的/  */

.detail-list {
  opacity: 0;
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 20px;
  color: #d4d5c4;
  font-size: 1.1rem;
}
.buy {
  font-size: 1.1rem;
  position: absolute;
  right: 69px;
  bottom: 34px;
  padding: 5px 40px;
  background: #f8e735;
}
</style>
